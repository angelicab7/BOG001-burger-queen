import React, { useState, useEffect } from 'react';
import firebase from 'firebase/app';

// Components
import Container from '../components/Container';
import NavMenu from '../components/NavMenu';
import MenuTabs from '../components/MenuSelector/MenuTabs';
import DeliverCard from '../components/DeliverCard';

const menuOptions = [
  {
    menuId: 'status',
    menuName: 'Order Status',
  },
  {
    menuId: 'deliveries',
    menuName: 'Deliveries',
  },
];

const Chef = () => {
  const [selectedMenu, setSelectedMenu] = useState(menuOptions[0].menuId);
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

  const onSelect = (menuId) => {
    setSelectedMenu(menuId);
  };

  return (
    <>
      <Container>
        <MenuTabs
          menuOptionsData={menuOptions}
          selectedMenu={selectedMenu}
          onSelect={onSelect}
        />
        <section className="row items-selected margin-t-3 padding-all-one">
          <div className="col-12">
            <h3 className="text-centered first-component">
              ORDERS READY TO PREPARE
            </h3>
          </div>
          {orders.map(
            ({ id, clientName, tableNumber, totalPrice, orderItems }) => (
              <DeliverCard
                key={id}
                clientName={clientName}
                tableNumber={tableNumber}
                totalPrice={totalPrice}
                orderItems={orderItems}
              />
            ),
          )}
        </section>
      </Container>
      <NavMenu />
    </>
  );
};

export default Chef;
