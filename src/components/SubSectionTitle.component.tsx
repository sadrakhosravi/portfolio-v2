import React from 'react';

const SubSectionTitle = ({ text }: { text: string }): JSX.Element => {
  return (
    <div className="text-center group duration-500">
      <h2 className="font-bold group-hover:text-white duration-500">{text}</h2>
      <span className="w-16 lg:w-24 h-1 bg-accent inline-block rounded-sm group-hover:w-24 lg:group-hover:w-32 duration-500" />
    </div>
  );
};
export default SubSectionTitle;
