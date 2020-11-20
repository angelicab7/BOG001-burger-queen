import React, { useState, useMemo } from 'react';
import firebase from 'firebase/app';

// Components
import Container from '../components/Container';
import MenuSelector from '../components/MenuSelector/MenuSelector';
import OrdersSelectedTable from '../components/OrdersSelected/OrdersSelectedTable';
import Button from '../components/Button';
import NavMenu from '../components/NavMenu';
import WaiterForm from '../components/WaiterForm';

const Waiter = () => {
  const [ordersSelected, setOrdersSelected] = useState([]);
  const [nameInputValue, setNameInputValue] = useState('');
  const [tableOptionsValue, setTableOptionsValue] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const totalPrice = useMemo(
    () =>
      ordersSelected.reduce(
        (accumulator, orderSelected) =>
          orderSelected.price * orderSelected.quantity + accumulator,
        0,
      ),
    [ordersSelected],
  );

  const onAdd = (order) => {
    const isTheMenuAddedBefore = ordersSelected.some(
      (orderSelected) => orderSelected.id === order.id,
    );
    if (isTheMenuAddedBefore) {
      const newOrdersSelected = ordersSelected.map((orderSelected) => {
        if (orderSelected.id === order.id) {
          return {
            ...orderSelected,
            quantity: orderSelected.quantity + 1,
          };
        }
        return orderSelected;
      });
      setOrdersSelected(newOrdersSelected);
    } else {
      const newOrdersSelected = [...ordersSelected, order];
      setOrdersSelected(newOrdersSelected);
    }
  };

  const onDelete = (id) => {
    const newOrdersSelected = ordersSelected.filter((order) => {
      if (order.id === id) {
        return false;
      }
      return true;
    });

    setOrdersSelected(newOrdersSelected);
  };

  const onNameChange = (event) => {
    setNameInputValue(event.currentTarget.value);
  };

  const onTableOptionChange = (event) => {
    setTableOptionsValue(event.currentTarget.value);
  };

  const onCreateOrder = () => {
    setIsLoading(true);
    const orderToSend = {
      clientName: nameInputValue,
      tableNumber: tableOptionsValue,
      orderItems: ordersSelected,
      totalPrice,
      creationDate: firebase.firestore.Timestamp.now(),
    };

    const db = firebase.firestore();
    db.collection('orders')
      .doc()
      .set(orderToSend)
      .then(() => {
        setIsLoading(false);
      });
  };

  return (
    <>
      <Container>
        <section className="inner-page">
          <div className="first-component margin-t-three">
            <h1>CHOOSE YOUR OPTION</h1>
          </div>
          <WaiterForm
            onNameChange={onNameChange}
            onTableOptionChange={onTableOptionChange}
          />
          <MenuSelector onAdd={onAdd} />
          <OrdersSelectedTable
            ordersSelected={ordersSelected}
            onDelete={onDelete}
            totalPrice={totalPrice}
          />
          <div className="w100 d-flex justify-content-center padding-y-one padding-x-one">
            <Button onClick={onCreateOrder} isLoading={isLoading}>
              CREATE ORDER
            </Button>
          </div>
        </section>
      </Container>
      <NavMenu />
    </>
  );
};

export default Waiter;
