import React from 'react';
import sodaIcon from '../assets/icons/soda-icon.svg';

const icons = {
  soda: {
    path: sodaIcon,
    displayName: 'Soda',
  },
};

const Marks = ({ name, className }) => {
  const icon = icons[name];

  return (
    <img
      className={`marks-icon ${className}`}
      width={32}
      src={icon.path}
      alt={`${icon.displayName} icon`}
    />
  );
};

Marks.defaultProps = {
  className: '',
};

export default Marks;
