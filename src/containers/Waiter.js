import React, { useState } from 'react';

// Components
import Container from '../components/Container';
import MenuSelector from '../components/MenuSelector/MenuSelector';
import OrdersSelectedTable from '../components/OrdersSelected/OrdersSelectedTable';
import Button from '../components/Button';

const tableOptions = [
  {
    value: 1,
    text: '1',
  },
  {
    value: 2,
    text: '2',
  },
  {
    value: 3,
    text: '3',
  },
  {
    value: 4,
    text: '4',
  },
  {
    value: 5,
    text: '5',
  },
];

const Waiter = () => {
  const [ordersSelected, setOrdersSelected] = useState([]);

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

  return (
    <Container>
      <section className="inner-page">
        <div className="first-component margin-t-three">
          <h1>CHOOSE YOUR OPTION</h1>
        </div>
        <form className="row margin-t-one">
          <div className=" first-container first-component col-12 col-8-md padding-r-md-two d-flex align-items-center">
            <label htmlFor="user-name" className="letter">
              Name:
            </label>
            <input type="name" name="user-name" className="name-input" />
          </div>
          <div className=" second-container first-component col-12 col-4-md margin-t-two margin-t-md-zero d-flex align-items-center">
            <label htmlFor="table-name" className="first-component letter">
              Table:
            </label>
            <select
              className="select-input w100"
              name="table-name"
              aria-labelledby="table-name"
            >
              {tableOptions.map(({ value, text }) => (
                <option key={value} value={value}>
                  {text}
                </option>
              ))}
            </select>
          </div>
        </form>
        <MenuSelector onAdd={onAdd} />
        <OrdersSelectedTable
          ordersSelected={ordersSelected}
          onDelete={onDelete}
        />
        <div className="w100 d-flex justify-content-center padding-y-one padding-x-one">
          <Button>CREATE ORDER</Button>
        </div>
      </section>
    </Container>
  );
};

export default Waiter;
