import Logo from 'components/Logo.component';
import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full flex flex-col lg:flex-row gap-3 items-center lg:justify-between sm:px-3 lg:px-10 py-10">
      <div className="w-full lg:w-1/4 flex justify-center">
        <Logo />
      </div>
      <div className="w-full lg:w-2/4 text-center mx-auto">
        <p className="mb-0">Website Code Available on Github - With attribution</p>
      </div>
      <div className="w-full text-center lg:w-1/4 lg:text-right">
        <a className="mx-2">Instagram</a>
        <a className="mx-2">Github</a>
        <a className="mx-2">LinkedIn</a>
      </div>
    </footer>
  );
};
export default Footer;
