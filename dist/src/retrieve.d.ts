/**
 * Wrapper in the event you don't want to write out the for await loop (this causes overhead).
 *
 * This is also available to help environments that may not be able to transpile or handle the for await syntax.
 */
export declare function retrieve<T>(values: AsyncGenerator<T, void, undefined>, access: (val: T) => void): Promise<void>;
