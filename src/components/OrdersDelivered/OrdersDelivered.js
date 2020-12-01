import React, { useState, useEffect, useMemo } from 'react';
import firebase from 'firebase/app';

// Components
import DeliverCard from './DeliverCard';

const OrdersDelivered = () => {
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

  const ordersDelivered = useMemo(
    () => orders.filter(({ delivered }) => delivered),
    [orders],
  );

  const deleteOrder = async (orderId) => {
    const db = firebase.firestore();
    await db.collection('orders').doc(orderId).delete();
    getOrders();
  };

  return (
    <section className="row items-selected margin-t-3 padding-all-one text-color-third">
      <div className="col-12">
        <h3 className="text-centered first-component">ORDERS DELIVERED</h3>
      </div>
      {ordersDelivered.map(
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
            delivered
            onClick={deleteOrder}
          />
        ),
      )}
    </section>
  );
};

export default OrdersDelivered;
