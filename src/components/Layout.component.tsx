import React from 'react';

// Components
import Header from './header/Header.component';
import Footer from './footer/Footer.component';

type LayoutProps = {
  children: JSX.Element | JSX.Element[];
  style?: React.CSSProperties | undefined;
};

const Layout = ({ children, style }: LayoutProps): JSX.Element => {
  return (
    <main style={style}>
      <Header />
      {children}
      <Footer />
    </main>
  );
};
export default Layout;
