import Logo from 'components/Logo.component';
import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full flex justify-between sm:px-3 lg:px-10 py-10">
      <div className="w-1/4">
        <Logo />
      </div>
      <div className="w-2/4 text-center">
        <p>Website Code Available on Github - With attribution</p>
      </div>
      <div className="w-1/4 text-right">
        <ul>
          <li>Test</li>
        </ul>
      </div>
    </footer>
  );
};
export default Footer;
