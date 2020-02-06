import { DataProvider, ExitValue } from "./types";
/**
 * This is a uniform accessor into a DataProvider type. It will always provide the next row of data if available.
 */
export declare function values<T>(provider: DataProvider<T>): AsyncGenerator<T, void, ExitValue>;
