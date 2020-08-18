import { cardsShuffled, shuffle } from "../logic/cardsGenerator";

export function play({
  cardsOnBoardToFightPlayerA,
  cardsOnBoardToFightPlayerB,
  cardsA,
  cardsB,
}) {
  let topCardToFightA = cardsOnBoardToFightPlayerA.slice(-1)[0];
  let topCardToFightB = cardsOnBoardToFightPlayerB.slice(-1)[0];
  //if there are cards in the "battle board" with diferents values, cannot play again. Return the same state, 'cause you must collect first and play after.
  if (topCardToFightA && topCardToFightA.value !== topCardToFightB.value) {
    return {
      cardsOnBoardToFightPlayerA,
      cardsOnBoardToFightPlayerB,
      cardsA,
      cardsB,
    };
  }
  //card to play for player1
  let cardAToPlay = cardsA.slice(-1)[0];

  //adding the card of player one to the array of fight
  cardsOnBoardToFightPlayerA.push(cardAToPlay);

  //card to play for player2
  let cardBToPlay = cardsB.slice(-1)[0];

  //adding the card of player two to the array of fight
  cardsOnBoardToFightPlayerB.push(cardBToPlay);

  //keeping the rest of cards of the player one waiting...
  let restOfCardsA = cardsA.slice(0, -1);

  //keeping the rest of cards of the player two waiting...
  let restOfCardsB = cardsB.slice(0, -1);

  return {
    cardsOnBoardToFightPlayerA,
    cardsOnBoardToFightPlayerB,
    cardsA: restOfCardsA,
    cardsB: restOfCardsB,
  };
}

export function collect({
  cardsOnBoardToFightPlayerA,
  cardsOnBoardToFightPlayerB,
  cardsA,
  cardsB,
}) {
  //selecting the top card of the array of card's fighting for player one
  let topFightCardA = cardsOnBoardToFightPlayerA.slice(-1)[0];

  //selecting the top card of the array of card's fighting for player two
  let topFightCardB = cardsOnBoardToFightPlayerB.slice(-1)[0];

  if (topFightCardA && topFightCardA.value > topFightCardB.value) {
    // playerA won the battle and add all the cards on the board going to his stack (shuffled)
    cardsOnBoardToFightPlayerA = shuffle(cardsOnBoardToFightPlayerA);
    cardsOnBoardToFightPlayerB = shuffle(cardsOnBoardToFightPlayerB);
    cardsA.unshift(
      ...cardsOnBoardToFightPlayerB,
      ...cardsOnBoardToFightPlayerA
    );
    //cleaning the board...
    cardsOnBoardToFightPlayerA = [];
    cardsOnBoardToFightPlayerB = [];
  } else if (topFightCardB && topFightCardB.value > topFightCardA.value) {
    // playerB won the battle and add all the cards on the board going to his stack (shuffled)
    cardsOnBoardToFightPlayerA = shuffle(cardsOnBoardToFightPlayerA);
    cardsOnBoardToFightPlayerB = shuffle(cardsOnBoardToFightPlayerB);
    cardsB.unshift(
      ...cardsOnBoardToFightPlayerB,
      ...cardsOnBoardToFightPlayerA
    );
    //cleaning the board...
    cardsOnBoardToFightPlayerA = [];
    cardsOnBoardToFightPlayerB = [];
  }
  return {
    cardsA,
    cardsB,
    cardsOnBoardToFightPlayerA,
    cardsOnBoardToFightPlayerB,
  };
}

/**
 * Reset the game. Start a new card game with the cards shuffled.
 */
export function reset() {
  const randomCards = cardsShuffled();
  return {
    cardsA: randomCards[0],
    cardsB: randomCards[1],
    cardsOnBoardToFightPlayerA: [],
    cardsOnBoardToFightPlayerB: [],
  };
}

export default {
  play,
  reset,
  collect,
};
