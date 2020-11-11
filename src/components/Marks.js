import React from 'react';
import sodaIcon from '../assets/icons/soda-icon.svg';
import waterIcon from '../assets/icons/water-icon.svg';
import friesIcon from '../assets/icons/fries-icon.svg';
import burgerIcon from '../assets/icons/burger-icon.svg';
import sandwichIcon from '../assets/icons/sandwich-icon.svg';
import coffeeIcon from '../assets/icons/coffee-icon.svg';
import juiceIcon from '../assets/icons/juice-icon.svg';
import onionsIcon from '../assets/icons/onions-icon.svg';

const icons = {
  soda: {
    path: sodaIcon,
    displayName: 'Soda',
  },
  water: {
    path: waterIcon,
    displayName: 'Water',
  },
  fries: {
    path: friesIcon,
    displayName: 'Fries',
  },
  burger: {
    path: burgerIcon,
    displayName: 'Burger',
  },
  sandwich: {
    path: sandwichIcon,
    displayName: 'Sandwich',
  },
  coffee: {
    path: coffeeIcon,
    displayName: 'Coffee',
  },
  juice: {
    path: juiceIcon,
    displayName: 'Juice',
  },
  onions: {
    path: onionsIcon,
    displayName: 'Onion rings',
  },
};

const Marks = ({ name, className }) => {
  const icon = icons[name];

  return (
    <img
      className={`marks-icon ${className}`}
      width={48}
      src={icon.path}
      alt={`${icon.displayName} icon`}
    />
  );
};

Marks.defaultProps = {
  className: '',
};

export default Marks;
