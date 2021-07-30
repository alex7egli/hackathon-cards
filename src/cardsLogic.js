class CardLogic {
  static shuffle(deck) {
    //Fisher yates shuffle
    let i = deck.length;
    if (i == 0) return;
    while (--i) {
      var j = Math.floor(Math.random() * (i + 1));
      var tempi = deck[i];
      var tempj = deck[j];
      deck[i] = tempj;
      deck[j] = tempi;
    }
  }
}

export default CardLogic;