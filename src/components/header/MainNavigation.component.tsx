import React from 'react';

// Navigation items
import { NavItems } from '~/config';

// Custom CSS
import * as styles from '../styles/NavItemStyles.module.css';

const MainNavigation = (): JSX.Element => {
  return (
    <nav className="text-center">
      <ul className={`${styles.Nav}`}>
        {NavItems.map(NavItem => (
          <li
            className={`inline-block lg:mx-1.5 sm:mx-1 hover:text-accent active:text-accent ${styles.NavItem}`}
          >
            <a className={`relative ${styles.NavLink}`} href={NavItem.link}>
              {NavItem.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default MainNavigation;
