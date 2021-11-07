import React from 'react';

type PrimaryButtonProps = {
  text?: string;
  href: string;
  isSecondary?: boolean;
  children?: JSX.Element | JSX.Element[] | string;
};

const PrimaryButton = ({ text, href, isSecondary = false, children }: PrimaryButtonProps): JSX.Element => {
  const primaryStyles =
    'px-5 py-1.5 border-2 rounded-md border-accent hover:bg-light-blue hover:text-accent hover:bg-opacity-10 active:bg-opacity-20 duration-300';

  return (
    <a
      href={href}
      className={`relative text-sm inline-block ${isSecondary ? 'link-underline' : primaryStyles}`}
    >
      {text || children}
    </a>
  );
};
export default PrimaryButton;
