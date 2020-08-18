//import React from 'react';
//import { render } from '@testing-library/react';
import { cardsShuffled, shuffle, generateCardsDeck } from "./cardsGenerator";

const cards = [{ card: "card1" }, { card: "card2" }, { card: "card3" }];

test("cardsShuffled function to be defined", () => {
  expect(cardsShuffled).toBeDefined();
});

test("cardsShuffled to be a function", () => {
  expect(typeof cardsShuffled).toEqual("function");
});

test("suffle function to be defined", () => {
  expect(shuffle).toBeDefined();
});

test("shuffle to be a function", () => {
  expect(typeof shuffle).toEqual("function");
});

test("shuffle return an array", () => {
  const cards = [{ card: "card1" }, { card: "card2" }, { card: "card3" }];
  expect(typeof shuffle(cards)).toEqual("object");
});

test("shuffle add property 'randomizer' to the array of object passed", () => {
  const result = shuffle(cards);
  const keys1 = Object.keys(result[0]);
  const keys2 = Object.keys(result[1]);
  const keys3 = Object.keys(result[2]);
  expect(keys1).toContain("randomizer");
  expect(keys2).toContain("randomizer");
  expect(keys3).toContain("randomizer");
});

test("shuffle return an array of the same length as the array passed", () => {
    const result = shuffle(cards);
    expect(result.length).toBe(cards.length);
});

test("generateCardsDeck must be defined", () => {
    expect(generateCardsDeck).toBeDefined();
});

test("generateCardsDeck must be a function", () => {
    expect(typeof generateCardsDeck).toEqual("function");
});

test("generateCardsDeck must be return an array", () => {
    expect(typeof generateCardsDeck()).toEqual("object");
});

test("generateCardsDeck must be return an array of 52 cards", () => {
    expect(generateCardsDeck().length).toBe(52);
});