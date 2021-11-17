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
        className={`flex flex-col lg:hidden px-3 h-60px w-8 items-center justify-center text-right z-20 ${
          styles.MobileMenu
        } ${isMenuOpen ? styles.MobileMenuActive : ''}`}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <span></span>
        <span></span>
      </div>
      <div
        className={`fixed top-[58.5px] left-0 w-full duration-700 transition-all ${
          isMenuOpen ? 'h-[calc(100vh-58.5px)]' : 'h-0'
        }`}
      >
        <div
          className={`relative border-light-blue border-b-[1.5px] duration-1000 ${
            isMenuOpen ? 'w-full' : 'w-0'
          }`}
        />
        <div className="bg-navy h-full relative duration-150">
          <ul className="py-10 px-8 space-y-6 transition duration-500" hidden={!isMenuOpen}>
            {NavItems.map(NavItem => (
              <li
                key={NavItem.text}
                className={`text-left border-b-[1.25px] border-light-blue border-opacity-60`}
              >
                <a className={`relative font-medium text-lg`} href={NavItem.link}>
                  {NavItem.text}
                </a>
              </li>
            ))}
          </ul>
          <div className="absolute bottom-4 left-0 w-full" hidden={!isMenuOpen}>
            <span className="mx-2">Email</span>
            <span className="mx-2">Github</span>
            <span className="mx-2">LinkedIn</span>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default MainNavigation;
