import React from 'react';

const OrdersSelected = ({ ordersSelected, onDelete }) => (
  <ul className="orders-selected row">
    {ordersSelected.map(({ name, price, id, quantity }) => (
      <li
        className="row col-12 align-items-stretch padding-y-one orders-selected-item"
        key={id}
      >
        <div className="col-7 padding-l-md-two d-flex align-items-center">
          <span className="margin-r-one">{quantity}</span>
          <span>{name}</span>
        </div>
        <span className="col-3 d-flex align-items-center">
          {new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
          }).format(price)}
        </span>
        <i
          className="fas fa-trash col-2 d-flex align-items-center"
          role="button"
          tabIndex={0}
          aria-label="Delete item"
          onClick={() => onDelete(id)}
          onKeyPress={() => onDelete(id)}
        ></i>
      </li>
    ))}
  </ul>
);
export default OrdersSelected;
