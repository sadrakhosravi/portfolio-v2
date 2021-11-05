import React from 'react';

type MailIconProps = {
  width?: string;
  height?: string;
  className?: string;
};

const MailIcon = ({ width = '32', height = '32', className = '' }: MailIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="currentColor"
      className={`${className}`}
      viewBox="0 0 24 24"
    >
      <path
        className={className}
        d="M0.075 2.3325C0.226227 1.66986 0.597983 1.07822 1.12938 0.654463C1.66078 0.230706 2.32033 -4.57416e-05 3 6.80121e-09H21C21.6797 -4.57416e-05 22.3392 0.230706 22.8706 0.654463C23.402 1.07822 23.7738 1.66986 23.925 2.3325L12 9.621L0.075 2.3325ZM0 4.0455V14.7015L8.7045 9.3645L0 4.0455ZM10.1415 10.245L0.2865 16.2855C0.52999 16.7989 0.91429 17.2326 1.39467 17.5362C1.87505 17.8397 2.43176 18.0005 3 18H21C21.5681 18.0001 22.1246 17.8389 22.6048 17.5351C23.0849 17.2313 23.4688 16.7975 23.712 16.284L13.857 10.2435L12 11.379L10.1415 10.2435V10.245ZM15.2955 9.366L24 14.7015V4.0455L15.2955 9.3645V9.366Z"
        fill="#ABB9DB"
      />
    </svg>
  );
};
export default MailIcon;
