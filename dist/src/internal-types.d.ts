import { DataProvider } from "./types";
export declare enum ProviderType {
    LIST = 0,
    METHOD = 1,
    METHOD_SYNC = 2,
    METHOD_ASYNC = 3,
    GENERATOR = 4,
    GENERATOR_ASYNC = 5,
    ITERATOR = 6,
    ITERATOR_ASYNC = 7,
    OBJECT = 8,
    PRIMITIVE = 9,
    SET = 10,
    UNKNOWN = 11
}
/**
 * The state stored for iterating through a provider.
 */
export declare type IterState = {
    type: ProviderType;
};
/**
 * The data provider type after it has been exposed to the iterating concept.
 */
export declare type DataProviderInternal<T> = DataProvider<T> & {
    __iter__: {
        [key: string]: IterState;
    };
};
/**
 * Typeguard for simple iterator types
 */
export declare function isIterable<T>(val: any): val is IterableIterator<T>;
/**
 * Typeguard for async iterator types
 */
export declare function isAsyncIterable<T>(val: any): val is AsyncIterableIterator<T>;
