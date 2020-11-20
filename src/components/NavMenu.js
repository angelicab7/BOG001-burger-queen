import React from 'react';
import Container from './Container';

const menuItems = [
  {
    url: '/',
    id: 'home',
    text: 'Home',
    icon: 'fas fa-home',
  },
  {
    url: '/Waiter',
    id: 'waiter',
    text: 'Waiter',
    icon: 'fas fa-utensils',
  },
  {
    url: '/Chef',
    id: 'chef',
    text: 'Chef',
    icon: 'fas fa-concierge-bell',
  },
];

const NavMenu = () => (
  <footer className="navigation-bar padding-y-half margin-t-two">
    <Container>
      <nav>
        <ul className="d-flex">
          {menuItems.map((item) => (
            <li key={item.id} className="grow-1 d-flex justify-content-center">
              <a
                href={item.url}
                className="d-flex-column justify-content-space-between align-items-center text-color-third"
              >
                <i className={`${item.icon} text-size-medium`} />
                <span className="margin-t-half">{item.text}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </Container>
  </footer>
);

export default NavMenu;
