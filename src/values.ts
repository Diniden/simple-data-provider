import {
  isAsyncIterable,
  isIterable,
  IterState,
  ProviderType
} from "./internal-types";
import {
  DataProvider,
  ExitValue,
  GeneratorProvider,
  IterableProvider,
  MethodProvider,
  ObjectProvider,
  SetProvider
} from "./types";

/**
 * Typeguard to see if the provider is a simple list.
 */
function isListProvider<T>(provider: DataProvider<T>): provider is T[] {
  return Array.isArray(provider);
}

/**
 * This determines if the provider is a method.
 */
function isMethodProvider<T>(
  provider: DataProvider<T>
): provider is MethodProvider<T> {
  return typeof provider === "function";
}

/**
 * This determines if the provider is a Set type (one that provides a .values() Iterable)
 */
function isSetProvider<T>(
  provider: DataProvider<T>
): provider is SetProvider<T> {
  return (
    (provider as any).constructor !== undefined &&
    ((provider as any).constructor === Set ||
      (provider as any).constructor === Map)
  );
}

/**
 * This determines if the provider is an iterable provider.
 */
function isIterableProvider<T>(
  provider: DataProvider<T>
): provider is IterableProvider<T> {
  return typeof (provider as any)[Symbol.iterator] === "function";
}

/**
 * This determines if the provider is an async iterable provider.
 */
function isAsyncIterableProvider<T>(
  provider: DataProvider<T>
): provider is IterableProvider<T> {
  return typeof (provider as any)[Symbol.asyncIterator] === "function";
}

/**
 * This ensures (after many other checks) that this provider is a simple object that has values that can be returned.
 */
function isObjectProvider<T>(
  provider: DataProvider<T>
): provider is ObjectProvider<T> {
  return typeof provider === "object";
}

/**
 * Do an intial analysis of our provider type. Note that this does NOT figure out the official type of this provider.
 * The only way to get a robust understanding of the provider we, we have to analyze the return value of the method
 * being called once in order to truly know what the provider is providing from a method.
 */
function getInitialProviderType<T>(provider: DataProvider<T>): ProviderType {
  if (isListProvider(provider)) return ProviderType.LIST;
  if (isSetProvider(provider)) return ProviderType.SET;
  if (isIterableProvider(provider)) return ProviderType.ITERATOR;
  if (isAsyncIterableProvider(provider)) return ProviderType.ITERATOR_ASYNC;
  if (isObjectProvider(provider)) return ProviderType.OBJECT;
  if (isMethodProvider(provider)) return ProviderType.METHOD;
  return ProviderType.UNKNOWN;
}

/**
 * Provides the initial state of the iteration
 */
function initState<T>(provider: DataProvider<T>): IterState {
  const type = getInitialProviderType(provider);
  return { type };
}

/**
 * This is a uniform accessor into a DataProvider type. It will always provide the next row of data if available.
 */
export async function* values<T>(
  provider: DataProvider<T>
): AsyncGenerator<T, void, ExitValue> {
  const state = initState(provider);

  // We can use a pre-analyzed type for the data provider to quickly provide the fastest way to get it's next value
  switch (state.type) {
    // If our provider is a list, then we simply loop through the list and return the found values.
    case ProviderType.LIST: {
      const list = provider as T[];

      for (let i = 0, iMax = list.length; i < iMax; ++i) {
        yield list[i];
      }

      return void 0;
    }

    // If our provider is an iterator, then we just iterate it to completion
    case ProviderType.ITERATOR: {
      const iter = provider as IterableIterator<T>;
      if (iter.next) {
        let result = iter.next();

        while (!result.done) {
          yield result.value;
          result = iter.next();
        }
      }

      else {
        for (const result of iter) {
          yield result;
        }
      }

      return void 0;
    }

    // If our provider is an iterator, then we just iterate it to completion
    case ProviderType.ITERATOR_ASYNC: {
      const iter = provider as AsyncIterableIterator<T>;

      for await (const result of iter) {
        yield result;
      }

      return void 0;
    }

    // If our provider is a Set type (Map or Set), then we provide the values of the set
    case ProviderType.SET: {
      const iter = (provider as SetProvider<T>).values();
      let result = iter.next();

      while (!result.done) {
        yield result.value;
        result = iter.next();
      }

      return void 0;
    }

    // If our provider is an Object type, then we provide the values found in the object
    case ProviderType.OBJECT: {
      const obj = provider as ObjectProvider<T>;
      const values = Object.values(obj);

      for (let i = 0, iMax = values.length; i < iMax; ++i) {
        yield values[i];
      }

      return void 0;
    }

    // If we have determined the provider is a method, we must analyze the result of the method to determine what type
    // of method it is
    case ProviderType.METHOD: {
      const method = provider as Function;
      let checkValue = method(0);

      if (checkValue === void 0) return void 0;
      else if (isIterable<T>(checkValue)) state.type = ProviderType.GENERATOR;
      else if (isAsyncIterable<T>(checkValue)) {
        state.type = ProviderType.GENERATOR_ASYNC;
      } else if (checkValue instanceof Promise) {
        state.type = ProviderType.METHOD_ASYNC;
        yield await checkValue;
      } else {
        state.type = ProviderType.METHOD_SYNC;
        yield checkValue;
      }

      switch (state.type) {
        // Method is determined to be a generator
        case ProviderType.GENERATOR: {
          const iter = checkValue as Generator<T, void, number>;
          let result = iter.next();

          while (!result.done) {
            yield result.value;
            result = iter.next();
          }

          return void 0;
        }

        // Method is determined to be an async generator
        case ProviderType.GENERATOR_ASYNC: {
          const iter = checkValue as AsyncGenerator<T, void, number>;
          let result = await iter.next();

          while (!result.done) {
            yield result.value;
            result = await iter.next();
          }

          return void 0;
        }

        // Method is an async method
        case ProviderType.METHOD_ASYNC: {
          let i = 0;

          while (checkValue !== void 0) {
            checkValue = await method(++i);
            if (checkValue === void 0) return void 0;
            yield checkValue;
          }

          return void 0;
        }

        // Method is just a simple method
        case ProviderType.METHOD_SYNC: {
          let i = 0;

          while (checkValue !== void 0) {
            checkValue = method(++i);
            if (checkValue === void 0) return void 0;
            yield checkValue;
          }

          return void 0;
        }

        default: {
          console.warn(
            "The provider could not have it's type determined for iteration. Thus no values will be returned."
          );
          return void 0;
        }
      }
    }

    // An unknown type will return itself.
    case ProviderType.UNKNOWN: {
      yield (provider as unknown) as T;
      return void 0;
    }

    // We can not have determined if the method was a specific method type yet. If we actually hit this, then we have
    // found a bug.
    case ProviderType.METHOD_SYNC:
    case ProviderType.METHOD_ASYNC:
    case ProviderType.GENERATOR:
    case ProviderType.GENERATOR_ASYNC:
      console.warn(
        "Undefined behavior occurred while processing a provider. No values will be returned."
      );
      return void 0;

    default:
      console.warn(
        "The provider could not have it's type properly determined for iteration. Thus no values will be returned."
      );
      return void 0;
  }
}
