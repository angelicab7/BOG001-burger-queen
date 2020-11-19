import React from 'react';
import Container from '../components/Container';
import homeIcon from '../assets/icons/home-icon.svg';
import waiterIcon from '../assets/icons/waiter-icon.svg';
import chefIcon from '../assets/icons/chef-icon.svg';

const menuItems = [
  {
    url: '/',
    id: 'home',
    text: 'Home',
    icon: homeIcon,
  },
  {
    url: '/Waiter',
    id: 'waiter',
    text: 'Waiter',
    icon: waiterIcon,
  },
  {
    url: '/Chef',
    id: 'chef',
    text: 'Chef',
    icon: chefIcon,
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
                className="d-flex-column justify-content-space-between align-items-center"
              >
                <img alt={item.text} src={item.icon} width={48} />
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
