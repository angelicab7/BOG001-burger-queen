import React from 'react';

const MenuOption = ({ name, price, onAdd }) => (
  <li className="row menu-option">
    <span className="col-7 padding-r-one">{name}</span>
    <span className="col-3 padding-r-one">
      {new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      }).format(price)}
    </span>
    <i
      className="fas fa-plus col-2"
      onClick={onAdd}
      onKeyPress={onAdd}
      role="button"
      tabIndex={0}
      aria-label={`Add ${name} to the list`}
    ></i>
  </li>
);

export default MenuOption;
