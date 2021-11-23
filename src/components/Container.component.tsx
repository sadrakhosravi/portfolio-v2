import React from 'react';
import { motion } from 'framer-motion';
import { FramerContentFadeUp } from 'config';

type ContainerProps = {
  className?: string;
  children: JSX.Element | JSX.Element[];
  center?: boolean;
  gap?: boolean;
};

const Container = ({ className, children, gap = true, center = false }: ContainerProps): JSX.Element => (
  <div
    className={`flex flex-col lg:flex-row lg:px-6 justify-center relative ${gap ? 'gap-10 lg:gap-20' : ''} ${
      className || ''
    } ${center ? 'items-center' : ''}`}
  >
    {children}
  </div>
);

type ColumnProps = {
  width?: 'full' | '1/2' | '1/3' | '2/3' | '1/4' | '3/4' | '1/6' | '5/6';
};

Container.Column = ({
  className,
  width = '1/2',
  children,
  gap = true,
  center = false,
}: ContainerProps & ColumnProps) => (
  <motion.div
    {...FramerContentFadeUp}
    transition={{ duration: 0.5, delay: 0 }}
    className={`w-full lg:w-${width} lg:py-5 relative flex flex-col ${gap ? 'gap-6' : ''} ${
      className || ''
    } ${center ? 'justify-center' : ''}`}
  >
    {children}
  </motion.div>
);

export default Container;
