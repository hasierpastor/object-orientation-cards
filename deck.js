//Class that represents a deck of cards - deck is represented by array of objects
//When new instance is create a new deck of shuffled cards will be created
class DeckCards {
  constructor() {
    this.deck = [];
    this.createDeck();
    this.shuffle();
  }

  //method to create deck of cards
  createDeck() {
    const suits = ['Hearts', 'Spades', 'Clubs', 'Diamonds'];
    const values = [
      'Ace',
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
      'Jack',
      'Queen',
      'King'
    ];

    for (let suit of suits) {
      console.log(suit);
      for (let value of values) {
        this.deck.push({ [suit]: value });
      }
    }
  }

  //method to shuffle deck of cards
  shuffle() {
    let { deck } = this;
    //implementation of Fisher Yates Shuffle from https://bost.ocks.org/mike/shuffle/
    let i = deck.length;
    let j;
    while (i) {
      j = Math.floor(Math.random() * i--);
      [deck[i], deck[j]] = [deck[j], deck[i]];
    }
    return deck;
  }

  //method to deal card
  dealCard() {
    let card = this.deck.pop();
    return card;
  }
}

let testdeck = new DeckCards();
console.log(testdeck);
console.log(testdeck.dealCard());
