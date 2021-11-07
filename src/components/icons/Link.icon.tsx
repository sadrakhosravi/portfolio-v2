import React from 'react';

type LinkIconProps = {
  width?: string;
  height?: string;
  className?: string;
  fill?: string;
};

const LinkIcon = ({ width = '18', height = '18', className = '', fill = '' }: LinkIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill={'currentColor'}
      className={`${className}`}
      viewBox="0 0 24 24"
    >
      <path
        className={fill}
        d="M13.054 5.25C13.054 5.02457 12.9644 4.80837 12.805 4.64896C12.6456 4.48955 12.4294 4.4 12.204 4.4H2.25C1.62674 4.4 1.02901 4.64759 0.588299 5.0883C0.147589 5.52901 -0.1 6.12674 -0.1 6.75V21.75C-0.1 22.3733 0.147589 22.971 0.588299 23.4117C1.02901 23.8524 1.62674 24.1 2.25 24.1H17.25C17.8733 24.1 18.471 23.8524 18.9117 23.4117C19.3524 22.971 19.6 22.3733 19.6 21.75V11.796C19.6 11.5706 19.5104 11.3544 19.351 11.195C19.1916 11.0356 18.9754 10.946 18.75 10.946C18.5246 10.946 18.3084 11.0356 18.149 11.195C17.9896 11.3544 17.9 11.5706 17.9 11.796V21.75C17.9 21.9224 17.8315 22.0877 17.7096 22.2096C17.5877 22.3315 17.4224 22.4 17.25 22.4H2.25C2.07761 22.4 1.91228 22.3315 1.79038 22.2096C1.66848 22.0877 1.6 21.9224 1.6 21.75V6.75C1.6 6.57761 1.66848 6.41228 1.79038 6.29038C1.91228 6.16848 2.07761 6.1 2.25 6.1H12.204C12.4294 6.1 12.6456 6.01045 12.805 5.85104C12.9644 5.69163 13.054 5.47543 13.054 5.25Z"
        fill="#ABB8DB"
      />
      <path
        className={fill}
        d="M9.14829 13.6483L9.14829 13.6483C9.06927 13.7273 9.00659 13.8211 8.96383 13.9244C8.92106 14.0276 8.89905 14.1383 8.89905 14.25C8.89905 14.3617 8.92106 14.4724 8.96383 14.5756C9.00659 14.6789 9.06927 14.7727 9.14829 14.8517C9.22731 14.9307 9.32111 14.9934 9.42436 15.0362C9.5276 15.0789 9.63825 15.1009 9.75 15.1009C9.86175 15.1009 9.9724 15.0789 10.0756 15.0362C10.1789 14.9934 10.2727 14.9307 10.3517 14.8517L10.2815 14.7815L10.3517 14.8517L22.4 2.80194V8.25C22.4 8.47543 22.4896 8.69163 22.649 8.85104C22.8084 9.01045 23.0246 9.1 23.25 9.1C23.4754 9.1 23.6916 9.01045 23.851 8.85104C24.0104 8.69163 24.1 8.47543 24.1 8.25V0.75C24.1 0.524566 24.0104 0.308365 23.851 0.148959C23.6916 -0.0104467 23.4754 -0.1 23.25 -0.1H15.75C15.5246 -0.1 15.3084 -0.0104467 15.149 0.148959C14.9896 0.308365 14.9 0.524566 14.9 0.75C14.9 0.975434 14.9896 1.19163 15.149 1.35104C15.3084 1.51045 15.5246 1.6 15.75 1.6H21.1981L9.14829 13.6483Z"
        fill="#ABB8DB"
      />
    </svg>
  );
};
export default LinkIcon;
