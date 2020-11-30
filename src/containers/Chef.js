import React, { useState } from 'react';

// Components
import Container from '../components/Container';
import NavMenu from '../components/NavMenu';
import MenuTabs from '../components/MenuSelector/MenuTabs';
import OrdersPending from '../components/OrdersDelivered/OrdersPending';
import OrdersDelivered from '../components/OrdersDelivered/OrdersDelivered';

const menuOptions = [
  {
    menuId: 'status',
    menuName: 'Order Status',
  },
  {
    menuId: 'delivered',
    menuName: 'Delivered',
  },
];

const Chef = () => {
  const [selectedMenu, setSelectedMenu] = useState(menuOptions[0].menuId);

  const onSelect = (menuId) => {
    setSelectedMenu(menuId);
  };

  return (
    <>
      <Container className="margin-t-3">
        <MenuTabs
          menuOptionsData={menuOptions}
          selectedMenu={selectedMenu}
          onSelect={onSelect}
        />
        {selectedMenu === 'status' ? <OrdersPending /> : <OrdersDelivered />}
      </Container>
      <NavMenu />
    </>
  );
};

export default Chef;
