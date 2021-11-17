import React from 'react';

type ContainerProps = {
  className?: string;
  children: JSX.Element | JSX.Element[];
  center?: boolean;
  gap?: boolean;
};

const Container = ({ className, children, gap = true, center = false }: ContainerProps): JSX.Element => (
  <div
    className={`flex flex-col lg:flex-row px-4 lg:px-6 justify-center relative ${
      gap ? 'gap-10 lg:gap-20' : ''
    } ${className || ''} ${center ? 'items-center' : ''}`}
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
  <div
    className={`w-full lg:w-${width} lg:py-5 relative flex flex-col ${gap ? 'gap-6' : ''} ${
      className || ''
    } ${center ? 'justify-center' : ''}`}
  >
    {children}
  </div>
);

export default Container;
