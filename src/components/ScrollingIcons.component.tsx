import React from 'react';

// Icons
import GithubIcon from './icons/Github.icon';
import LinkedInIcon from './icons/LinkedIn.icon';
import MailIcon from './icons/Mail.icon';

const ScrollingIcons = () => {
  return (
    <div className="fixed right-4 top-1/2 transform -translate-y-1/2 hidden lg:block">
      <div className="relative flex flex-col gap-7">
        <GithubIcon width="2rem" height="2rem" />
        <LinkedInIcon width="2rem" height="2rem" />
        <MailIcon width="2rem" height="2rem" />
      </div>
    </div>
  );
};
export default ScrollingIcons;
