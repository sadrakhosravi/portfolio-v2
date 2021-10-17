import React from 'react';

// Styles
import * as styles from './styles/StyledImage.module.css';

type ImageProps = {
  className?: string;
  children: JSX.Element | JSX.Element[];
};

const StyledImage = ({ className, children }: ImageProps): JSX.Element => {
  return <div className={`relative rounded-md ${className || ''} ${styles.StyledImage}`}>{children}</div>;
};
export default StyledImage;
