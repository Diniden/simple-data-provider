import assert from "assert";
import { describe, it } from "mocha";
import { retrieve, values } from "../src";

const list = [-1, 0, 1, 2, 3];

describe("Iterating values", () => {
  it("List should be iterable", async () => {
    for await (const val of values(list)) {
      assert(list.indexOf(val) > -1, `Not found in list ${val}`);
    }

    await retrieve(values(list), (val) => {
      assert(list.indexOf(val) > -1, `Not retrieved in ${val}`);
    });
  });

  it("Set should be iterable", async () => {
    const s = new Set(list);

    for await (const val of values(s)) {
      assert(s.has(val), `Not found in list ${val}`);
    }

    await retrieve(values(s), (val) => {
      assert(list.indexOf(val) > -1, `Not retrieved in ${val}`);
    });
  });

  it("Map should be iterable", async () => {
    const s = new Map(list.map((l) => [l, l]));

    for await (const val of values(s)) {
      assert(s.has(val), `Not found in list ${val}`);
    }

    await retrieve(values(s), (val) => {
      assert(list.indexOf(val) > -1, `Not retrieved in ${val}`);
    });
  });

  it("Iterator should be iterable", async () => {
    const iterable: Iterable<number> = {
      *[Symbol.iterator]() {
        for (let i = 0; i < list.length; ++i) {
          yield list[i];
        }
      },
    };

    for await (const val of values(iterable)) {
      assert(list.indexOf(val) > -1, `Not found in list ${val}`);
    }

    await retrieve(values(iterable), (val) => {
      assert(list.indexOf(val) > -1, `Not retrieved in ${val}`);
    });
  });

  it("Async Iterator should be iterable", async () => {
    const iterable: AsyncIterable<number> = {
      [Symbol.asyncIterator]: async function* () {
        for (let i = 0; i < list.length; ++i) {
          yield list[i];
        }
      },
    };

    for await (const val of values(iterable)) {
      assert(list.indexOf(val) > -1, `Not found in list ${val}`);
    }

    await retrieve(values(iterable), (val) => {
      assert(list.indexOf(val) > -1, `Not retrieved in Iterable ${val}`);
    });
  });

  it("Object should be iterable", async () => {
    const obj = { hey: 1, yo: 2, 123: 3 };

    for await (const val of values(obj)) {
      assert(list.indexOf(val) > -1, `Not found in list ${val}`);
    }

    await retrieve(values(obj), (val) => {
      assert(list.indexOf(val) > -1, `Not retrieved in ${val}`);
    });
  });

  it("Method should be iterable", async () => {
    const iter = (index: number) => list[index];

    for await (const val of values(iter)) {
      assert(list.indexOf(val) > -1, `Not found in list ${val}`);
    }

    await retrieve(values(iter), (val) => {
      assert(list.indexOf(val) > -1, `Not retrieved in ${val}`);
    });
  });

  it("Async Method should be iterable", async () => {
    const iter = async (index: number) => {
      await new Promise((r) => setTimeout(r, 25));
      return list[index];
    };

    for await (const val of values(iter)) {
      assert(list.indexOf(val) > -1, `Not found in list ${val}`);
    }

    await retrieve(values(iter), (val) => {
      assert(list.indexOf(val) > -1, `Not retrieved ${val}`);
    });
  });

  it("Generator should be iterable", async () => {
    function* gen() {
      for (let i = 0, iMax = list.length; i < iMax; ++i) {
        yield list[i];
      }
    }

    for await (const val of values(gen)) {
      assert(list.indexOf(val) > -1, `Not found in list ${val}`);
    }

    await retrieve(values(gen), (val) => {
      assert(list.indexOf(val) > -1, `Not retrieved ${val}`);
    });

    function* gen2(): Generator<number, void, number> {
      let i = 0;

      while (i < list.length) {
        let next = yield list[i];
        if (next === void 0) next = i++;
        i = next;
      }

      return void 0;
    }

    for await (const val of values(gen2)) {
      assert(list.indexOf(val) > -1, `Not found in list ${val}`);
    }

    await retrieve(values(gen2), (val) => {
      assert(list.indexOf(val) > -1, `Not retrieved ${val}`);
    });
  });

  it("Async generator should be iterable", async () => {
    async function* gen() {
      for (const v of list) {
        await new Promise((r) => setTimeout(r, 15));
        yield v;
      }
    }

    for await (const val of values(gen)) {
      assert(list.indexOf(val) > -1, `Not found in list ${val}`);
    }

    await retrieve(values(gen), (val) => {
      assert(list.indexOf(val) > -1, `Not retrieved ${val}`);
    });

    async function* gen2(): AsyncGenerator<number, void, number> {
      let i = 0;

      while (i < list.length) {
        await new Promise((r) => setTimeout(r, 15));
        let next = yield list[i];
        if (next === void 0) next = i++;
        i = next;
      }
    }

    for await (const val of values(gen2)) {
      assert(list.indexOf(val) > -1, `Not found in list ${val}`);
    }

    await retrieve(values(gen2), (val) => {
      assert(list.indexOf(val) > -1, `Not retrieved ${val}`);
    });
  });

  it("Primitive should be iterable", async () => {
    let didIterate = false;

    for await (const v of values(10)) {
      didIterate = true;
      assert(v === 10, "Iterating a primitive did not return the primitive");
    }

    assert(didIterate, "Did not iterate");

    didIterate = false;

    await retrieve(values(10), (val) => {
      didIterate = true;
      assert(val === 10, `Not retrieved ${val}`);
    });

    assert(didIterate, "Did not retrieve");
  });
});
