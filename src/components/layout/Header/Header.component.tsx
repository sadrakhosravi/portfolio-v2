import React from 'react';

// Components
import Logo from '@components/Logo/Logo.component';
import MainNavigation from './Navigation/MainNavigation.component';
import PrimaryButton from '~/components/buttons/PrimaryButton.component';

const Header: React.FC = () => {
  return (
    <header className="flex justify-between items-center lg:px-6 sm:px-3 py-3">
      <div className="lg:w-2/6 sm:w-1/2 ">
        <Logo />
      </div>

      <div className="sm:w-1/2 lg:w-4/6 justify-end text-right flex items-center gap-1">
        <MainNavigation />

        <span className="md:hidden lg:block">
          <PrimaryButton text="Resume" />
        </span>
      </div>
    </header>
  );
};
export default Header;
