class DeckCards {
  constructor() {
    this.deck = [];
    this.createDeck();
  }

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
}

let testdeck = new DeckCards();
console.log(testdeck);
