/**
 * This depicts the value that is considered an exit value to end data provider loops.
 */
export type ExitValue = undefined;

/**
 * Provider that is a hunk of values that comes from a simple javascript object. The provided values are only the values
 * in the object, not the keys.
 */
export type ObjectProvider<T> = {[key: string]: T};

/**
 * Provides all the values in the set or the Values of the Map (not the keys).
 */
export type SetProvider<T> = Set<T> | Map<any, T>;

/**
 * Provides the value the iterator outputs until the iterator reaches the end value.
 */
export type IterableProvider<T> = Iterable<T> | AsyncIterable<T> | IterableIterator<T> | AsyncIterableIterator<T>;

/**
 * Provides the values output by the method until an undefined value is returned.
 */
export type MethodProvider<T> = ((index: number) => Promise<T | ExitValue> | (T | ExitValue));

/**
 * Provides the values the generator would provide until the generator completes.
 */
export type GeneratorProvider<T> = () => (Generator<T, void, number> | AsyncGenerator<T, void, number>);

/**
 * This depicts a property that is able to provide rows of data. It depicts several strategies for providing that data.
 *
 * A primitive: The primitive will be the data out
 *
 * A simple list: All data is loaded and is ready to be provided. (Not recommended for large datasets as it loads ALL
 *                of the dataset into RAM to make this work)
 *
 * An object: All data is ready to be provided, but each row has a key value. This provides just the values from the
 *            object (Not recommended for large datasets as it loads ALL of the dataset into RAM to make this work)
 *
 * A Set (Set or Map): All data is loaded but within a Set style object. This provides just the values from the source.
 *                     (Not recommended for large datasets as it loads ALL of the dataset into RAM to make this work)
 *
 * An iterator: You have an iterator available that contains the data. This will provide all values the iterator has
 *              to provide. (Not recommended for large datasets as it loads ALL of the dataset into RAM to make this
 *              work)
 *
 * An async iterator: You have an async style iterator that will provide all of the data. This will provide all values
 *                    the iterator has to offer. (Recommended for large datasets as you can load in data from the
 *                    iterator as needed instead of all at once)
 *
 * A simple callback: A row of data will be provided when the method is called. Allows for heavier processing and some
 *                    start up massaging of the data. (Not recommended for large datasets, it would be VERY tricky to
 *                    not have first loaded all of the initial data into RAM first to make this work)
 *
 *
 * An async callback: A row of data will be provided when the method is called. This is allowed to have async patterns
 *                    as it returns a Promise rather than a value. This lets you fetch, process, massage the data as you
 *                    need before providing it. This is recommended for large datasets as it allows you to load in
 *                    pieces of unmassaged data into RAM and then forget about it as the system processes the provider.
 *
 * A Generator: A row of data will be provided from the generator per each next() call. Yields data rows, returns
 *              nothing, is passed in the index of the row being processed. (Not recommended for large datasets, it
 *              would be VERY tricky to not have first loaded all of the initial data into RAM first to make this work)
 *
 * An AsyncGenerator: A row of data will be provided from the generator per each next() call. Yields data rows, returns
 *                    nothing, is passed in the index of the row being processed. (This is a recommended approach for
 *                    large datasets as it can load in data piece by piece instead of all at once and be processed into
 *                    the target datatype withput having an intermediary type sitting around eating up ram)
 */
export type DataProvider<T> =
  | T
  | T[]
  | ObjectProvider<T>
  | SetProvider<T>
  | IterableProvider<T>
  | GeneratorProvider<T>
  | MethodProvider<T>
;

export type DataProviderPage<T> = T[];
