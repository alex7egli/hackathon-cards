import Deck from './cards-ui/deck';
import './App.css';
import c1 from './assets/cards-svg/c1.svg';
import c2 from './assets/cards-svg/c2.svg';
import c3 from './assets/cards-svg/c3.svg';
import c4 from './assets/cards-svg/c4.svg';
import c5 from './assets/cards-svg/c5.svg';
import c6 from './assets/cards-svg/c6.svg';
import c7 from './assets/cards-svg/c7.svg';
import c8 from './assets/cards-svg/c8.svg';
import c9 from './assets/cards-svg/c9.svg';
import c10 from './assets/cards-svg/c10.svg';
import c11 from './assets/cards-svg/c11.svg';
import c12 from './assets/cards-svg/c12.svg';
import c13 from './assets/cards-svg/c13.svg';
import c14 from './assets/cards-svg/c14.svg';
import d1 from './assets/cards-svg/d1.svg';
import d2 from './assets/cards-svg/d2.svg';
import d3 from './assets/cards-svg/d3.svg';
import d4 from './assets/cards-svg/d4.svg';
import d5 from './assets/cards-svg/d5.svg';
import d6 from './assets/cards-svg/d6.svg';
import d7 from './assets/cards-svg/d7.svg';
import d8 from './assets/cards-svg/d8.svg';
import d9 from './assets/cards-svg/d9.svg';
import d10 from './assets/cards-svg/d10.svg';
import d11 from './assets/cards-svg/d11.svg';
import d12 from './assets/cards-svg/d12.svg';
import d13 from './assets/cards-svg/d13.svg';
import d14 from './assets/cards-svg/d14.svg';
import s1 from './assets/cards-svg/s1.svg';
import s2 from './assets/cards-svg/s2.svg';
import s3 from './assets/cards-svg/s3.svg';
import s4 from './assets/cards-svg/s4.svg';
import s5 from './assets/cards-svg/s5.svg';
import s6 from './assets/cards-svg/s6.svg';
import s7 from './assets/cards-svg/s7.svg';
import s8 from './assets/cards-svg/s8.svg';
import s9 from './assets/cards-svg/s9.svg';
import s10 from './assets/cards-svg/s10.svg';
import s11 from './assets/cards-svg/s11.svg';
import s12 from './assets/cards-svg/s12.svg';
import s13 from './assets/cards-svg/s13.svg';
import s14 from './assets/cards-svg/s14.svg';
import h1 from './assets/cards-svg/h1.svg';
import h2 from './assets/cards-svg/h2.svg';
import h3 from './assets/cards-svg/h3.svg';
import h4 from './assets/cards-svg/h4.svg';
import h5 from './assets/cards-svg/h5.svg';
import h6 from './assets/cards-svg/h6.svg';
import h7 from './assets/cards-svg/h7.svg';
import h8 from './assets/cards-svg/h8.svg';
import h9 from './assets/cards-svg/h9.svg';
import h10 from './assets/cards-svg/h10.svg';
import h11 from './assets/cards-svg/h11.svg';
import h12 from './assets/cards-svg/h12.svg';
import h13 from './assets/cards-svg/h13.svg';
import h14 from './assets/cards-svg/h14.svg';
import Card from './cards-ui/card';
import CardsLogic from './cardsLogic';
import React from 'react';

const deck = {
  'h': [h1, h2, h3, h4, h5, h6, h7, h8, h9, h10, h11, h12, h13, h14 ],
  'c': [c1, c2, c3, c4, c5, c6, c7, c8, c9, c10, c11, c12, c13, c14 ],
  'd': [d1, d2, d3, d4, d5, d6, d7, d8, d9, d10, d11, d12, d13, d14 ],
  's': [s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11, s12, s13, s14 ],
};

class App extends React.Component {
  deal() {
    const numCardsToPlayer = 13;
    const currentDeck = [];
    for (let suit in deck) {
      for (let card of deck[suit]) {
        currentDeck.push(card);
      }
    }

    CardsLogic.shuffle(currentDeck);
    console.log(currentDeck);
    
    const playerHand = currentDeck.slice(0, 14);
    // TODO: how to render hand dynamically?
  }

  render() {
    return (
      <div className="App">

        <div className="table" id="table">
          <div id="hand"></div>
        </div>

        <button onClick={() => this.deal()}>Deal</button>
      </div>
    );
  }
}

export default App;
