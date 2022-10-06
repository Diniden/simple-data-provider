import { DataProvider } from "./types";

export enum ProviderType {
  LIST,
  METHOD,
  METHOD_SYNC,
  METHOD_ASYNC,
  GENERATOR,
  GENERATOR_ASYNC,
  ITERATOR,
  ITERATOR_ASYNC,
  OBJECT,
  PRIMITIVE,
  SET,
  UNKNOWN
}

/**
 * The state stored for iterating through a provider.
 */
export type IterState = {
  type: ProviderType;
};

/**
 * The data provider type after it has been exposed to the iterating concept.
 */
export type DataProviderInternal<T> = DataProvider<T> & {
  __iter__: { [key: string]: IterState };
};

/**
 * Typeguard for simple iterator types
 */
export function isIterable<T>(val: any): val is IterableIterator<T> {
  if (!val) return false;
  return typeof val[Symbol.iterator] === "function";
}

/**
 * Typeguard for async iterator types
 */
export function isAsyncIterable<T>(val: any): val is AsyncIterableIterator<T> {
  if (!val) return false;
  return typeof val[Symbol.asyncIterator] === "function";
}
