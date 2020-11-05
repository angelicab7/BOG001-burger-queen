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
      <div className="first-component margin-t-3">
        <h1>CHOOSE YOUR OPTION</h1>
      </div>
      <form>
        <div className=" input-name margin-t-3 first-component">
          <label htmlFor="user-name" className="letter">
            Name:
          </label>
          <input type="name" name="user-name" className="name-input" />
        </div>
        <div className=" input-number first-component">
          <label htmlFor="table-name" className="first-component letter">
            Table Number:
          </label>
          <select
            className="select-input"
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
    </section>
  </Container>
);

export default Waiter;
