import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

// Components
import Logo from 'components/Logo.component';
import MainNavigation from './MainNavigation.component';
import Button from 'components/Button.component';

const Header = (): JSX.Element => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  console.log(isMenuOpen);

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
      className={`fixed top-0 left-0 h-60px z-50 w-full flex justify-between items-center px-4 lg:px-10 transition-all duration-300 border-b-[1.5px] border-light-blue border-opacity-10 ${
        !isScrolled ? '' : 'bg-navy header-shadow'
      } `}
    >
      <div className="w-1/2 lg:w-2/6 z-20">
        <Logo />
      </div>

      <div className="w-1/2 lg:w-4/6 justify-end text-right flex items-center gap-3 h-full">
        <MainNavigation isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        <motion.span
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            delay: 0.8,
            type: 'spring',
            stiffness: 120,
            damping: 20,
          }}
          className="hidden xl:block"
        >
          <Button href="#" text="Resume" />
        </motion.span>
      </div>
    </header>
  );
};
export default Header;
