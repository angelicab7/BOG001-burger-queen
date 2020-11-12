import React from 'react';

const OrdersSelected = ({ ordersSelected }) => (
  <ul className="orders-selected row">
    {ordersSelected.map(({ name, price, id }) => (
      <li
        className="row col-12 align-items-stretch padding-y-one orders-selected-item"
        key={id}
      >
        <span className="col-7 padding-l-md-two d-flex align-items-center">
          {name}
        </span>
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
        ></i>
      </li>
    ))}
  </ul>
);
export default OrdersSelected;
