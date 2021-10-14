import React from 'react';

// Components
import Logo from '@components/Logo/Logo.component';
import MainNavigation from './MainNavigation.component';

const Header: React.FC = () => {
  return (
    <header className="flex justify-between items-center px-6 py-2">
      <div className="w-1/4">
        <Logo />
      </div>
      <div className="w-2/4">
        <MainNavigation />
      </div>
      <div className="w-1/4 justify-end text-right">
        <button>Test</button>
      </div>
    </header>
  );
};
export default Header;
