import React from 'react';

// Navigation items
import { NavItems } from '~/config';

// Custom CSS
import * as styles from './NavItemStyles.module.css';

const MainNavigation: React.FC = () => {
  return (
    <nav className="text-center">
      <ul className={`${styles.Nav}`}>
        {NavItems.map(NavItem => (
          <li className={`inline-block px-2 hover:text-accent active:text-accent ${styles.NavItem}`}>
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
