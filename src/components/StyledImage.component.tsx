import React from 'react';

// Styles
import * as styles from './styles/StyledImage.module.css';

type ImageProps = {
  framePosition?: 'left' | 'right';
  className?: string;
  children: JSX.Element | JSX.Element[];
};

const StyledImage = ({ framePosition = 'right', className, children }: ImageProps): JSX.Element => {
  return (
    <div
      className={`relative rounded-md ${className || ''} 
      ${styles.StyledImage} 
      ${framePosition === 'right' && styles.StyledImageFrameRight}
      ${framePosition === 'left' && styles.StyledImageFrameLeft}
      `}
    >
      {children}
    </div>
  );
};
export default StyledImage;
