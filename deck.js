class DeckCards {
  constructor() {
    this.deck = [];
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

    for (let suit in suits) {
      for (let value in values) {
        this.deck.push({ suit: value });
      }
    }
  }
}
