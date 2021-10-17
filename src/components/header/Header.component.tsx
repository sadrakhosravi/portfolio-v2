import React, { useEffect, useState } from 'react';

// Components
import Logo from '~/components/Logo.component';
import MainNavigation from './MainNavigation.component';
import Button from '~/components/Button.component';

// Styles
import * as styles from '../styles/Header.module.css';

const Header = (): JSX.Element => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  // Wait for contents to load then attach listener, improves performance
  useEffect(() => {
    const headerBgOnScroll = () => {
      const pageY = window.scrollY;
      pageY > 0 && setIsScrolled(true);
      pageY === 0 && setIsScrolled(false);
    };
    document.addEventListener('scroll', headerBgOnScroll);
  }, []);

  return (
    <header
      className={`fixed inset-0 z-20 w-full flex justify-between items-center lg:px-6 sm:px-3 py-1 transition-all duration-300 ${
        !isScrolled && 'h-10'
      } ${isScrolled && 'bg-navy bg-opacity-70 h-8 blur-md drop-shadow-2xl'} ${isScrolled && styles.Header}`}
    >
      <div className="lg:w-2/6 sm:w-1/2 ">
        <Logo />
      </div>

      <div className="sm:w-1/2 lg:w-4/6 justify-end text-right flex items-center gap-1">
        <MainNavigation />

        <span className="md:hidden lg:block">
          <Button href="#" text="Resume" />
        </span>
      </div>
    </header>
  );
};
export default Header;
