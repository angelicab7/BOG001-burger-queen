import React from 'react';

// Components
import OrdersSelected from './OrdersSelected';

const OrdersSelectedTable = ({ ordersSelected }) => (
  <section className="row items-selected margin-t-three padding-x-one padding-y-one margin-b-3">
    <div className="col-12">
      <h3 className="text-centered first-component">SELECT ITEMS</h3>
    </div>
    <OrdersSelected ordersSelected={ordersSelected} />
    <div className="total-line-divisor" />
    <h3 className="first-component">TOTAL:</h3>
  </section>
);

export default OrdersSelectedTable;
