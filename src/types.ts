/**
 * This depicts all values that evaluate to false.
 */
export type Falsy = false | 0 | "" | null | undefined;

/**
 * This depicts a property that is able to provide rows of data. It depicts several strategies for providing that data.
 *
 * A simple list: All data is loaded and is ready to be provided. (Not recommended for large datasets as it loads ALL
 *                of the dataset into RAM to make this work)
 *
 * A simple callback: A row of data will be provided when the method is called. Allows for heavier processing and some
 *                    start up massaging of the data. (Not recommended for large datasets, it would be VERY tricky to
 *                    not have first loaded all of the initial data into RAM first to make this work)
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
  | T[]
  | ((index: number) => T | Falsy)
  | ((index: number) => Promise<T>)
  | Generator<T, void, number>
  | AsyncGenerator<T, void, number>;
