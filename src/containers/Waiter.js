import React, { Component } from 'react';
import BurgerImage from '../components/BurgerImage/burgerImage';

class Waiter extends Component {
  render() {
    return (
      <div>
        <h1>Waiter and chef!</h1>
        <p>Awesome users on board!</p>
        <BurgerImage />
      </div>
    );
  }
}

export default Waiter;
