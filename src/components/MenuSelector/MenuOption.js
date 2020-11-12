import React from 'react';
import Marks from '../Marks';

const MenuOption = ({ name, price, onAdd, icon, orderId }) => {
  const onClick = () => {
    onAdd({
      name,
      price,
      icon,
      id: orderId,
    });
  };

  return (
    <li className="row menu-option align-items-stretch">
      <div className="col-7 padding-r-one d-flex align-items-center">
        {icon && <Marks name={icon} className="margin-r-one" />}
        <span>{name}</span>
      </div>
      <span className="col-3 padding-r-one d-flex align-items-center">
        {new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD',
        }).format(price)}
      </span>
      <i
        className="fas fa-plus col-2 d-flex align-items-center"
        onClick={onClick}
        onKeyPress={onClick}
        role="button"
        tabIndex={0}
        aria-label={`Add ${name} to the list`}
      ></i>
    </li>
  );
};

export default MenuOption;
