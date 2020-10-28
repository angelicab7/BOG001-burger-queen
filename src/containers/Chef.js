import React, { Component } from 'react';

import BurgerImage from '../components/BurgerImage/burgerImage';
class Chef extends Component {
  render() {
    return (
      <div>
        <h1>Tasty Burger</h1>
        <BurgerImage />
      </div>
    );
  }
}

export default Chef;
