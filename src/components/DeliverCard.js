import React from 'react';
import Button from './Button';

const DeliverCard = ({ className, clientName, tableNumber, menuOptions }) => (
  <div className={`col-12 col-6-md col-4-lg padding-all-half ${className}`}>
    <div className="order-box padding-all-one">
      <div className="margin-b-one d-flex justify-content-space-between">
        <span className="margin-r-one">jhon sanders</span>
        <span>#7</span>
      </div>
      <ul className="padding-l-two margin-b-one">
        <li>Onion rings</li>
        <li>Burger</li>
        <li>Water 500ml</li>
        <li>Fries</li>
      </ul>
      <div className="d-flex justify-content-end">
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
