import React from 'react';
import cardback_blue from '../assets/cards-svg/cardback_blue.svg';

class Card extends React.Component {
  getFacedownCard() {
    return (
      <img src={cardback_blue} alt="facedown card"></img>
    )
  }

  getFaceupCard() {
    return (
      <img className="card" src={this.props.img} alt="card" />
    )
  }

  render() {
    if (this.props.faceup) {
      return this.getFaceupCard();
    } else {
      return this.getFacedownCard();
    }
  }
}

export default Card;