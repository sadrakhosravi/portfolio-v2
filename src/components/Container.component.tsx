import React from 'react';

type ContainerProps = {
  className?: string;
  children: JSX.Element | JSX.Element[];
  center?: boolean;
  gap?: boolean;
};

const Container = ({ className, children, gap = true, center = false }: ContainerProps): JSX.Element => (
  <div
    className={`flex flex-row relative ${gap ? 'gap-20' : ''} ${className || ''} ${
      center ? 'items-center' : ''
    }`}
  >
    {children}
  </div>
);

Container.Column = ({ className, children, gap = true, center = false }: ContainerProps) => (
  <div
    className={`w-1/2 py-5 relative flex flex-col ${gap ? 'gap-6' : ''} ${className || ''} ${
      center ? 'items-center' : ''
    }`}
  >
    {children}
  </div>
);

export default Container;
