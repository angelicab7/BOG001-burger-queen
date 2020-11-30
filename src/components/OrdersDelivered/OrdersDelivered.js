import React, { useState, useEffect } from 'react';
import firebase from 'firebase/app';

// Components
import DeliverCard from './DeliverCard';

const OrdersDelivered = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const db = firebase.firestore();
    db.collection('orders')
      .get()
      .then((querySnapshot) => {
        const items = [];
        querySnapshot.forEach((doc) => {
          items.push({
            id: doc.id,
            ...doc.data(),
          });
        });
        setOrders(items);
      });
  }, []);

  return (
    <section className="row items-selected margin-t-3 padding-all-one text-color-third">
      <div className="col-12">
        <h3 className="text-centered first-component">ORDERS DELIVERED</h3>
      </div>
      {orders.map(
        ({
          id,
          clientName,
          tableNumber,
          totalPrice,
          orderItems,
          creationDate,
        }) => (
          <DeliverCard
            key={id}
            clientName={clientName}
            tableNumber={tableNumber}
            totalPrice={totalPrice}
            orderItems={orderItems}
            creationDate={creationDate}
          />
        ),
      )}
    </section>
  );
};

export default OrdersDelivered;
