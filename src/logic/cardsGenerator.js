const randomizer = Math.random;

const cardsTypes = [
  { type: "hearts", symbol: "&#9829;" }, // symbol: '♥'
  { type: "diamonds", symbol: "&#9830;" }, // symbol: '♦'
  { type: "spades", symbol: "&#9824;" }, // symbol: '♠'
  { type: "clubs", symbol: "&#9827;" }, // symbol: '♣'
];

const cardsSuits = [
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K",
  "A",
];

/**
 * Generate all cards of the game, randomize them and return an
 * array with the 26 shuffled cards for player 1 in pos0 and 26 shuffled cards for player 2 in pos1.
 *
 */
export function cardsShuffled() {
  const cardsDeck = generateCardsDeck();
  const shuffleDeck = shuffle(cardsDeck);
  return [shuffleDeck.slice(0, 26), shuffleDeck.slice(26)];
}

/**
 * Generate the deck of 52 cards with the corresponding value Eg: A > K > Q > J etc...
 */
const generateCardsDeck = () => {
  //Giving the value to each card. Eg A: value: 12  K: value: 11 Q: value: 10 ...
  const cardNames = cardsSuits.map((card, index) => ({ card, value: index }));
  //Generate an ordered array of objects with the 52 possible cards of the game
  const createOrderedDeck = (cardsTypes, cardNames) =>
    cardsTypes.reduce((deck, cardSuite) => {
      const cardsWithValueAndSuite = cardNames.map((cardWValue) => ({
        ...cardWValue,
        ...cardSuite,
      }));
      return deck.concat(cardsWithValueAndSuite);
    }, []);
  return createOrderedDeck(cardsTypes, cardNames);
};

/**
 * Shuffle a board of cards.
 * @param {[]cards} cards
 */
export const shuffle = (cards) => {
  //adding a randomizer value to each card
  const cardsWithRandomizer = cards.map((card) => ({
    ...card,
    randomizer: randomizer(),
  }));
  const sortByRandom = cardsWithRandomizer.sort(
    (a, b) => a.randomizer - b.randomizer
  );
  return sortByRandom;
};

export default {
  cardsShuffled,
  shuffle,
};
