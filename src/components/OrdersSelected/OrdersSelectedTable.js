import React from 'react';

// Components
import OrdersSelected from './OrdersSelected';

const OrdersSelectedTable = ({ ordersSelected, onDelete }) => {
  const totalPrice = ordersSelected.reduce(
    (accumulator, orderSelected) =>
      orderSelected.price * orderSelected.quantity + accumulator,
    0,
  );

  return (
    <section className="row items-selected margin-t-three padding-x-one padding-y-one margin-b-3">
      <div className="col-12">
        <h3 className="text-centered first-component">SELECT ITEMS</h3>
      </div>
      <OrdersSelected ordersSelected={ordersSelected} onDelete={onDelete} />
      <div className="total-line-divisor" />
      <h3 className="first-component">{`TOTAL: ${new Intl.NumberFormat(
        'en-US',
        {
          style: 'currency',
          currency: 'USD',
        },
      ).format(totalPrice)}`}</h3>
    </section>
  );
};

export default OrdersSelectedTable;
