//import React from 'react';
//import { render } from '@testing-library/react';
import { cardsShuffled, shuffle } from "./cardsGenerator";

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
