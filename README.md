# Simple Data Provider

Library to help make a uniform interface for synchronous and asynchronous data piping.

## Docs

[Documentation](./docs/intro.md)

## Quick peek

```javascript
const t1 = values({ test: 1, testing: 2});
const t2 = values([1, 2, 3, 4, 5]);
const t3 = values(new Set([1, 2, 3, 4, 5]));
const t4 = values(new Map([[1, 1], [2, 2], [3, 3], [4, 4], [5, 5]]));

function method(i) { return [1, 2, 3, 4, 5][i]; }
const t5 = values(method);

function asyncMethod(i) { return new Promise(r => r([1, 2, 3, 4, 5][i])); }
const t6 = values(method);

function* generator() { for (let i = 0; i < 5; ++i) yield [1, 2, 3, 4, 5][i]; }
const t7 = values(generator());

async function* generator() { for (let i = 0; i < 5; ++i) yield [1, 2, 3, 4, 5][i]; }
const t8 = values(generator());

// All can be iterated the same way
for await (const val of values(...)) {
  // Do something
}

// or
retrieve(values(...), val => {

})
```

## Developing

This project is a simple method library. So it's more appropriate to develop using the unit-tests rather than a browser

```sh
npm run unit-test-dev
```

If you wish to test the bundling procedure and execute the methods in a browser, simply use:

```sh
npm run dev
```

Then follow the instructions in the browser after opening the webpage.
