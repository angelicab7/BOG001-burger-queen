import React from 'react';

const Button = ({ onClick, children, color, className }) => {
  return (
    <button
      type="button"
      className={`btn ${color} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

Button.defaultProps = {
  color: 'primary',
  className: '',
};

export default Button;
