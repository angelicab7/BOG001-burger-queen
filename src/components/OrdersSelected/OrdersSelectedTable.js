import React from 'react';

// Components
import OrdersSelected from './OrdersSelected';

const OrdersSelectedTable = ({ ordersSelected }) => (
  <section className="row items-selected margin-t-three padding-x-one padding-y-one">
    <div className="col-12">
      <h3 className="text-centered">Selected items</h3>
    </div>
    <OrdersSelected ordersSelected={ordersSelected} />
    <div className="total-line-divisor" />
  </section>
);

export default OrdersSelectedTable;
