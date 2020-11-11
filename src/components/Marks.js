import React from 'react';
import sodaIcon from '../assets/icons/soda-icon.svg';
import waterIcon from '../assets/icons/Water-icon.svg';
import friesIcon from '../assets/icons/fries-icon.svg';

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
