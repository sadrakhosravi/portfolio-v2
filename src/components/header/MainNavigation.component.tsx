import React from 'react';

// Navigation items
import { NavItems } from 'config';

// Custom CSS
import * as styles from '../styles/NavItemStyles.module.css';

type MainNavigationProps = {
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const MainNavigation = ({ isMenuOpen, setIsMenuOpen }: MainNavigationProps): JSX.Element => {
  return (
    <nav className={`text-center h-full flex items-center`}>
      <ul className={`${styles.Nav} hidden lg:block`}>
        {NavItems.map(NavItem => (
          <li
            key={NavItem.text}
            className={`inline-block lg:mx-3 sm:mx-2 hover:text-accent active:text-accent ${styles.NavItem}`}
          >
            <a className={`relative text-sm ${styles.NavLink}`} href={NavItem.link}>
              {NavItem.text}
            </a>
          </li>
        ))}
      </ul>
      <div
        className={`flex flex-col px-3 h-full w-10 items-center justify-center text-right z-20 ${
          styles.MobileMenu
        } ${isMenuOpen ? styles.MobileMenuActive : ''}`}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <span></span>
        <span></span>
      </div>
      <div
        className={`fixed top-0 left-0 w-full z-10 bg-navy duration-700 ${
          isMenuOpen ? 'h-screen visible' : 'h-60px invisible'
        }`}
      >
        <div
          className={`relative h-70px border-light-blue border-b-2 z-40 duration-1000 ${
            isMenuOpen ? 'w-full' : 'w-0'
          }`}
        />
        <ul className="py-10 px-8 space-y-6 transition duration-500">
          {NavItems.map(NavItem => (
            <li key={NavItem.text} className={`text-left border-b-2 border-light-blue border-opacity-50`}>
              <a className={`relative text-lg`} href={NavItem.link}>
                {NavItem.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
export default MainNavigation;
