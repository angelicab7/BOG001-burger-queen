import React from 'react';
import Container from '../components/Container';

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

const Waiter = () => (
  <Container>
    <section className="inner-page">
      <div className="first-component margin-t-three">
        <h1>CHOOSE YOUR OPTION</h1>
      </div>
      <form className="row margin-t-one">
        <div className=" first-container first-component col-12 col-8-md padding-r-md-two">
          <label htmlFor="user-name" className="letter">
            Name:
          </label>
          <input type="name" name="user-name" className="name-input" />
        </div>
        <div className=" second-container first-component col-12 col-4-md margin-t-two margin-t-md-zero">
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
      <div className="menu-box margin-t-three">
        <div className="choice-text letter">
          <h3>Breakfast</h3>
          <ul>
            <li className="row">
              <span className="col-8">American Coffe</span>
              <span className="col-4">$5</span>
            </li>
            <li className="row">
              <span className="col-8">Milk Coffe</span>
              <span className="col-4">$7</span>
            </li>
            <li className="row">
              <span className="col-8">Ham and cheese sandwich</span>
              <span className="col-4">$10</span>
            </li>
            <li className="row">
              <span className="col-8">Natural juice fruit</span>
              <span className="col-4">$7</span>
            </li>
          </ul>
        </div>
        <div className="choice-text letter">
          <h3>Lunch/Dinner</h3>
        </div>
      </div>
    </section>
  </Container>
);

export default Waiter;
