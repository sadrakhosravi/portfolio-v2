import React from 'react';

// Navigation items
import { NavItems } from 'config';

// Custom CSS
import * as styles from '../styles/NavItemStyles.module.css';

const MainNavigation = (): JSX.Element => {
  return (
    <nav className="text-center">
      <ul className={`${styles.Nav}`}>
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
    </nav>
  );
};
export default MainNavigation;
