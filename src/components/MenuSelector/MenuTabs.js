import React from 'react';

const MenuTabs = ({ onSelect, selectedMenu, menuOptionsData }) => {
  const onClick = (menuId) => {
    onSelect(menuId);
  };

  return (
    <div className="row menu-tabs">
      {menuOptionsData.map(({ menuId, menuName }) => (
        <div
          key={menuId}
          className={`col-12 col-6-md menu-tab ${
            selectedMenu === menuId ? 'selected' : ''
          }`}
          role="button"
          tabIndex={0}
          onClick={() => onClick(menuId)}
          onKeyPress={() => onClick(menuId)}
        >
          <h3 className="centered-text uppercase spaced-text">{menuName}</h3>
        </div>
      ))}
    </div>
  );
};

export default MenuTabs;
