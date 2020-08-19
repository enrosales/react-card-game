import deepEqual from "./deepEqual";

test('comparing {name: "eduardo"} with {name: "eduardo"} must be true', () => {
  const obj1 = { name: "eduardo" };
  const obj2 = { name: "eduardo" };
  expect(deepEqual(obj1, obj2)).toBeTruthy();
});

test('comparing {name: "eduardo", edad: 30} with {name: "eduardo"} must be falsy', () => {
  const obj1 = { name: "eduardo", edad: 30 };
  const obj2 = { name: "eduardo" };
  expect(deepEqual(obj1, obj2)).toBeFalsy();
});

test('comparing {name: "eduardo", edad: 30} with {name: "eduardo", edad: 28} must be falsy', () => {
  const obj1 = { name: "eduardo", edad: 30 };
  const obj2 = { name: "eduardo", edad: 28 };
  expect(deepEqual(obj1, obj2)).toBeFalsy();
});

test(`comparing
{name: "eduardo", edad: 30, direccion: {
    calle: "Calle 1",
    reparto: "Marahabana"
}}
 with
 {name: "eduardo", edad: 28}
 must be falsy`, () => {
  const obj1 = {
    name: "eduardo",
    edad: 30,
    direccion: {
      calle: "Calle 1",
      reparto: "Marahabana",
    },
  };
  const obj2 = { name: "eduardo", edad: 28 };
  expect(deepEqual(obj1, obj2)).toBeFalsy();
});

test(`comparing
{name: "eduardo", edad: 30, direccion: {
    calle: "Calle 1",
    reparto: "Marahabana"
}}
 with
 {name: "eduardo", edad: 30, direccion: {
    calle: "Calle 11",
    reparto: "Marahabana"
}}
 must be falsy`, () => {
  const obj1 = {
    name: "eduardo",
    edad: 30,
    direccion: {
      calle: "Calle 1",
      reparto: "Marahabana",
    },
  };
  const obj2 = {
    name: "eduardo",
    edad: 30,
    direccion: {
      calle: "Calle 11",
      reparto: "Marahabana",
    },
  };
  expect(deepEqual(obj1, obj2)).toBeFalsy();
});

test(`comparing
{name: "eduardo", edad: 30, direccion: {
    calle: "Calle 1",
    reparto: "Marahabana"
}}
 with
 {name: "eduardo", edad: 30, direccion: {
    calle: "Calle 1",
    reparto: "Marahabana"
}}
 must be truthy`, () => {
  const obj1 = {
    name: "eduardo",
    edad: 30,
    direccion: {
      calle: "Calle 1",
      reparto: "Marahabana",
    },
  };
  const obj2 = {
    name: "eduardo",
    edad: 30,
    direccion: {
      calle: "Calle 1",
      reparto: "Marahabana",
    },
  };
  expect(deepEqual(obj1, obj2)).toBeTruthy();
});
