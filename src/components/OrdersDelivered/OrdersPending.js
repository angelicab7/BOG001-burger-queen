import React, { useState, useEffect, useMemo } from 'react';
import firebase from 'firebase/app';

// Components
import DeliverCard from './DeliverCard';

const OrdersPending = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    getOrders();
  }, []);

  const getOrders = async () => {
    const db = firebase.firestore();
    const querySnapshot = await db.collection('orders').get();
    const items = [];
    querySnapshot.forEach((doc) => {
      items.push({
        id: doc.id,
        ...doc.data(),
      });
    });
    setOrders(items);
  };

  const pendingOrders = useMemo(
    () => orders.filter(({ delivered }) => !delivered),
    [orders],
  );

  const checkOrder = async (orderId) => {
    const db = firebase.firestore();
    await db.collection('orders').doc(orderId).update({
      delivered: true,
    });
    getOrders();
  };

  return (
    <section className="row items-selected margin-t-3 padding-all-one text-color-third">
      <div className="col-12">
        <h3 className="text-centered first-component">
          ORDERS READY TO PREPARE
        </h3>
      </div>
      {pendingOrders.map(
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
            orderId={id}
            clientName={clientName}
            tableNumber={tableNumber}
            totalPrice={totalPrice}
            orderItems={orderItems}
            creationDate={creationDate}
            onClick={checkOrder}
          />
        ),
      )}
    </section>
  );
};

export default OrdersPending;
