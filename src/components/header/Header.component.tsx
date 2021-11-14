import React, { useEffect, useState } from 'react';

// Components
import Logo from 'components/Logo.component';
import MainNavigation from './MainNavigation.component';
import Button from 'components/Button.component';

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
      className={`fixed inset-0 z-20 w-full flex justify-between items-center px-4 lg:px-10 py-9 transition-all duration-300 ${
        !isScrolled && 'h-10'
      } ${isScrolled && 'bg-navy bg-opacity-60 h-8 drop-shadow-2xl'} ${isScrolled && 'blur'}`}
    >
      <div className="w-1/2 lg:w-2/6 ">
        <Logo />
      </div>

      <div className="w-1/2 lg:w-4/6 justify-end text-right flex items-center gap-3">
        <MainNavigation />

        <span className="hidden xl:block">
          <Button href="#" text="Resume" />
        </span>
      </div>
    </header>
  );
};
export default Header;
