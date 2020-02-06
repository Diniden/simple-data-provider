# Simple Data Provider

This project is intended to help with a simple concept of passing data from one location to another.

There is nothing special about things that provide data (or Data providers). They come in all shapes and sizes. We
normalize these shapes and sizes with a simple method of values().

Let's take a look at what this means for you!

## Uniform Interface

This library provides a uniform interface for handling data in a list or data provided from methods or
generators or other common data structures that have a list structure.

### DataProvider<T>

This is not a specific object or class. In typescript, it's a powerful 'type' that depicts different javascript data
structures. Outside of typescript, it's simply various Javascript objects that have the ability to produce rows of data.

### values(dataProvider)

This method will ALWAYS create an async generator for you no matter the source of the data.

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
```

### retrieve(asyncGenerator, callback)

This provides an easy to remember uniform way to access the data. It's suggested to use a 'for await of' loop, but in
some cases, that loop may not be available. Thus this method provides a nice wrapper to analyze the values() generator.

This method will return a Promise thus making it properly asynchronous in nature as well.

```javascript
await retrieve(values(...), val => {
  // Do something
});
```
