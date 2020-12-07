import React from 'react';

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

const WaiterForm = ({ onNameChange, onTableOptionChange }) => (
  <form className="row margin-t-one">
    <div className=" first-container first-component col-12 col-8-md padding-r-md-two d-flex align-items-center">
      <label htmlFor="user-name" id="user-name" className="letter">
        Name:
      </label>
      <input
        type="name"
        name="user-name"
        className="name-input"
        aria-labelledby="user-name"
        onChange={onNameChange}
      />
    </div>
    <div className=" second-container first-component col-12 col-4-md margin-t-two margin-t-md-zero d-flex align-items-center">
      <label
        htmlFor="table-name"
        id="table-name"
        className="first-component letter"
      >
        Table:
      </label>
      <select
        className="select-input w100"
        name="table-name"
        aria-labelledby="table-name"
        onChange={onTableOptionChange}
      >
        {tableOptions.map(({ value, text }) => (
          <option key={value} value={value}>
            {text}
          </option>
        ))}
      </select>
    </div>
  </form>
);

export default WaiterForm;
