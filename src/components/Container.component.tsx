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

type ColumnProps = {
  width?: 'full' | '1/2' | '1/3' | '1/4' | '1/6';
};

Container.Column = ({
  className,
  width = '1/2',
  children,
  gap = true,
  center = false,
}: ContainerProps & ColumnProps) => (
  <div
    className={`w-${width} py-5 relative flex flex-col ${gap ? 'gap-6' : ''} ${className || ''} ${
      center ? 'items-center' : ''
    }`}
  >
    {children}
  </div>
);

export default Container;