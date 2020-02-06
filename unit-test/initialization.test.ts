import assert from 'assert';
import { describe, it } from 'mocha';
import { values } from '../src';
import { isAsyncIterable } from '../src/internal-types';

describe('Initializing Generator', () => {
  it('List should be a generator', async () => {
    const list = [1, 2, 3];
    const iter = values(list);

    assert(isAsyncIterable(iter));
  });

  it('Set should be a generator', () => {
    const s = new Set([1, 2, 3]);
    const iter = values(s);

    assert(isAsyncIterable(iter));
  });

  it('Map should be a generator', () => {
    const s = new Map([[0, 0], [1, 1]]);
    const iter = values(s);

    assert(isAsyncIterable(iter));
  });

  it('Iterator should be a generator', () => {
    function* gen() {/** */}
    const genIter = gen();
    const iter = values(genIter);

    assert(isAsyncIterable(iter));
  });

  it('Async Iterator should be a generator', () => {
    async function* gen() {/** */}
    const genIter = gen();
    const iter = values(genIter);

    assert(isAsyncIterable(iter));
  });

  it('Object should be a generator', () => {
    const iter = values({hey: 123, yo: 12, 123: 1});
    assert(isAsyncIterable(iter));
  });

  it('Method should be a generator', () => {
    const iter = values((_index: number) => {/** */});
    assert(isAsyncIterable(iter));
  });

  it('Async Method should be a generator', () => {
    const iter = values(async (_index: number) => {/** */});
    assert(isAsyncIterable(iter));
  });

  it('Generator should be a generator', () => {
    function* gen() {/** */}
    const iter = values(gen);
    assert(isAsyncIterable(iter));
  });

  it('Async generator should be a generator', () => {
    async function* gen() {/** */}
    const iter = values(gen);
    assert(isAsyncIterable(iter));
  });

  it('Primitive should be a generator', () => {
    const iter = values(10);
    assert(isAsyncIterable(iter));
  });
});
