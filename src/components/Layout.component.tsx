import React from 'react';

// Components
import Header from './header/Header.component';

type LayoutProps = {
  children: JSX.Element | JSX.Element[];
};

const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <main>
      <Header />
      {children}
    </main>
  );
};
export default Layout;
