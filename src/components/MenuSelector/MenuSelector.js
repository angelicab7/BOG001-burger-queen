import React, { useState } from 'react';
import menuOptionsData from '../../data/menu-options.json';
import MenuTabs from './MenuTabs';
import MenuOption from './MenuOption';

const MenuSelector = ({ onAdd }) => {
  const [selectedMenu, setSelectedMenu] = useState(menuOptionsData[0].menuId);

  console.log(menuOptionsData, '--------------');
  const onSelect = (menuId) => {
    setSelectedMenu(menuId);
  };

  return (
    <div className="menu-box margin-t-three">
      <div className="choice-text letter w100">
        <MenuTabs
          onSelect={onSelect}
          selectedMenu={selectedMenu}
          menuOptionsData={menuOptionsData}
        />
        <ul>
          {menuOptionsData
            .find(({ menuId }) => selectedMenu === menuId)
            .menuOptions.map(({ id, name, price, icon }) => (
              <MenuOption
                key={id}
                name={name}
                price={price}
                onAdd={onAdd}
                icon={icon}
                orderId={id}
              />
            ))}
        </ul>
      </div>
    </div>
  );
};

export default MenuSelector;
