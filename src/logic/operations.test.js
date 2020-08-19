import { play, reset, collect } from "./operations";
import deepEqual from "../helpers/deepEqual";


test("play must to be defined", () => {
  expect(play).toBeDefined();
});

test("play must be a function", () => {
  expect(typeof play).toEqual("function");
});

test("reset must to be defined", () => {
  expect(reset).toBeDefined();
});

test("reset must be a function", () => {
  expect(typeof reset).toEqual("function");
});

test("collect must to be defined", () => {
  expect(collect).toBeDefined();
});

test("collect must be a function", () => {
  expect(typeof collect).toEqual("function");
});

test("reset function return 26 cards on cardsA property", () => {
  const result = reset();
  expect(result.cardsA.length).toBe(26);
});

test("reset function return 26 cards on cardsB property", () => {
  const result = reset();
  expect(result.cardsB.length).toBe(26);
});

test("reset function return 0 cards on cardsOnBoardToFightPlayerA property", () => {
  const result = reset();
  expect(result.cardsOnBoardToFightPlayerA.length).toBe(0);
});

test("reset function return 0 cards on cardsOnBoardToFightPlayerB property", () => {
  const result = reset();
  expect(result.cardsOnBoardToFightPlayerA.length).toBe(0);
});

test('play function, if there are cards in the "battle board" with diferents values, cannot play again. Return the same state', () => {
  const cardsOnBoardToFightPlayerA = [{ card: "card1", value: 10 }];
  const cardsOnBoardToFightPlayerB = [{ card: "card1", value: 8 }];
  const cardsA = [
    { card: "cardA", value: 2 },
    { card: "cardAA", value: 3 },
  ];
  const cardsB = [
    { card: "cardB", value: 4 },
    { card: "cardBB", value: 5 },
  ];
  const newObject = {cardsOnBoardToFightPlayerA, cardsOnBoardToFightPlayerB, cardsA, cardsB};

  const result = play(newObject);

  expect(deepEqual(result, newObject)).toBeTruthy();
});

test('play function, return a diferent set of cards after play each player with "no cards in board battle"', () => {
  const cardsOnBoardToFightPlayerA = [];
  const cardsOnBoardToFightPlayerB = [];
  const cardsA = [
    { card: "cardA", value: 2 },
    { card: "cardAA", value: 3 },
  ];
  const cardsB = [
    { card: "cardB", value: 4 },
    { card: "cardBB", value: 5 },
  ];
  const newObject = {cardsOnBoardToFightPlayerA, cardsOnBoardToFightPlayerB, cardsA, cardsB};

  const result = play(newObject);

  expect(deepEqual(result, newObject)).toBeFalsy();
});

test('play function, return a diferent set of cards after play each player with "CARDS in board battle"', () => {
  const cardsOnBoardToFightPlayerA = [{ card: "card1", value: 8 }];
  const cardsOnBoardToFightPlayerB = [{ card: "card1", value: 8 }];
  const cardsA = [
    { card: "cardA", value: 2 },
    { card: "cardAA", value: 3 },
  ];
  const cardsB = [
    { card: "cardB", value: 4 },
    { card: "cardBB", value: 5 },
  ];
  const newObject = {cardsOnBoardToFightPlayerA, cardsOnBoardToFightPlayerB, cardsA, cardsB};

  const result = play(newObject);

  expect(deepEqual(result, newObject)).toBeFalsy();
});

test('collect function, return a diferent set of cards after play each player', () => {
  const cardsOnBoardToFightPlayerA = [{ card: "card1", value: 8 }];
  const cardsOnBoardToFightPlayerB = [{ card: "card1", value: 8 }];
  const cardsA = [
    { card: "cardA", value: 2 },
    { card: "cardAA", value: 3 },
  ];
  const cardsB = [
    { card: "cardB", value: 4 },
    { card: "cardBB", value: 5 },
  ];
  const newObject = {cardsOnBoardToFightPlayerA, cardsOnBoardToFightPlayerB, cardsA, cardsB};

  const result = play(newObject);

  expect(deepEqual(result, newObject)).toBeFalsy();
});