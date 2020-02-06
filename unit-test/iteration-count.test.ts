import assert from 'assert';
import { describe, it } from 'mocha';
import { retrieve, values } from '../src';

const list = [-1, 0, 1, 2, 3];

describe('Iteration count', () => {
  it('List should iterate 5 times', async () => {
    let i = 0;

    for await (const _ of values(list)) {
      i++;
    }

    assert(i === 5, `Iterated ${i} times`);

    i = 0;

    await retrieve(values(list), () => {
      i++;
    });

    assert(i === 5, `Retrieved ${i} times`);
  });

  it('Set should iterate 5 times', async () => {
    const s = new Set(list);
    let i = 0;

    for await (const _ of values(s)) {
      i++;
    }

    assert(i === 5, `Iterated ${i} times`);

    i = 0;

    await retrieve(values(s), () => {
      i++;
    });

    assert(i === 5, `Retrieved ${i} times`);
  });

  it('Map should iterate 5 times', async () => {
    const s = new Map(list.map(l => [l, l]));
    let i = 0;

    for await (const _ of values(s)) {
      i++;
    }

    assert(i === 5, `Iterated ${i} times`);

    i = 0;

    await retrieve(values(s), () => {
      i++;
    });

    assert(i === 5, `Retrieved ${i} times`);
  });

  it('Iterator should iterate 5 times', async () => {
    const iterable: Iterable<number> = {
      *[Symbol.iterator]() {
        for (let i = 0; i < list.length; ++i) {
          yield list[i];
        }
      }
    };

    let i = 0;

    for await (const _ of values(iterable)) {
      i++;
    }

    assert(i === 5, `Iterated ${i} times`);

    i = 0;

    await retrieve(values(iterable), () => {
      i++;
    });

    assert(i === 5, `Retrieved ${i} times`);
  });

  it('Async Iterator should iterate 5 times', async () => {
    const iterable: AsyncIterable<number> = {
      [Symbol.asyncIterator]: async function*() {
        for (let i = 0; i < list.length; ++i) {
          yield list[i];
        }
      }
    };

    let i = 0;

    for await (const _ of values(iterable)) {
      i++;
    }

    assert(i === 5, `Iterated ${i} times`);

    i = 0;

    await retrieve(values(iterable), () => {
      i++;
    });

    assert(i === 5, `Retrieved ${i} times`);
  });

  it('Object should iterate 5 times', async () => {
    const obj = {hey: 1, 0: 2, 123: 3, test: undefined, null: null};
    let i = 0;

    for await (const _ of values(obj)) {
      i++;
    }

    assert(i === 5, `Iterated ${i} times`);

    i = 0;

    await retrieve(values(obj), () => {
      i++;
    });

    assert(i === 5, `Retrieved ${i} times`);
  });

  it('Method should iterate 5 times', async () => {
    let iter = values((index: number) => list[index]);
    let i = 0;

    for await (const _ of values(iter)) {
      i++;
    }

    assert(i === 5, `Iterated ${i} times`);

    iter = values((index: number) => list[index]);
    i = 0;

    await retrieve(values(iter), () => {
      i++;
    });

    assert(i === 5, `Retrieved ${i} times`);
  });

  it('Async Method should iterate 5 times', async () => {
    let iter = values(async (index: number) => {
      await new Promise(r => setTimeout(r, 25));
      return list[index];
    });
    let i = 0;

    for await (const _ of values(iter)) {
      i++;
    }

    assert(i === 5, `Iterated ${i} times`);

    iter = values(async (index: number) => {
      await new Promise(r => setTimeout(r, 25));
      return list[index];
    });
    i = 0;

    await retrieve(values(iter), () => {
      i++;
    });

    assert(i === 5, `Retrieved ${i} times`);
  });

  it('Generator should iterate 5 times', async () => {
    function* gen() {
      for (let i = 0, iMax = list.length; i < iMax; ++i) {
        yield list[i];
      }
    }
    let i = 0;

    for await (const _ of values(gen())) {
      i++;
    }

    assert(i === 5, `Iterated ${i} times`);

    i = 0;

    await retrieve(values(gen()), () => {
      i++;
    });

    assert(i === 5, `Retrieved ${i} times`);
  });

  it('Async generator should iterate 5 times', async () => {
    async function* gen() {
      for (const v of list) {
        await new Promise(r => setTimeout(r, 15));
        yield v;
      }
    }
    let i = 0;

    for await (const _ of values(gen())) {
      i++;
    }

    assert(i === 5, `Iterated ${i} times`);

    i = 0;

    await retrieve(values(gen()), () => {
      i++;
    });

    assert(i === 5, `Retrieved ${i} times`);
  });
});
