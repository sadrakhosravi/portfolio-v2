import React from 'react';

type PrimaryButtonProps = {
  text: string;
};

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ text }) => (
  <a
    href="#"
    className="px-2 py-0.65 border-2 rounded-md border-accent hover:bg-light-blue hover:text-accent hover:bg-opacity-10 active:bg-opacity-20
    transition-colors duration-200"
  >
    {text}
  </a>
);
export default PrimaryButton;
