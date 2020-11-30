import React from 'react';
import Button from '../Button';

const DeliverCard = ({
  className,
  clientName,
  tableNumber,
  orderItems,
  creationDate,
}) => (
  <div className={`col-12 col-6-md col-4-lg padding-all-half ${className}`}>
    <div className="order-box padding-all-one">
      <div className="margin-b-one d-flex justify-content-space-between">
        <span className="margin-r-one">{clientName}</span>
        <span>{`#${tableNumber}`}</span>
      </div>
      <ul className="padding-l-two margin-b-one">
        {orderItems.map(({ id, name, quantity }) => (
          <li key={id}>
            <span className="margin-r-one">{quantity}</span>
            <span>{name}</span>
          </li>
        ))}
      </ul>
      <div className="d-flex justify-content-space-between align-items-center">
        <span className="margin-r-one">
          {new Date(creationDate.toDate()).toLocaleString('en-US')}
        </span>
        <Button className="padding-all-half">
          <i className="fas fa-check text-size-medium" />
        </Button>
      </div>
    </div>
  </div>
);

DeliverCard.defaultProps = {
  className: '',
};

export default DeliverCard;
