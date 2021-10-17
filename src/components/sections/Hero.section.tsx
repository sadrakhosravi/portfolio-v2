import React from 'react';

// Components
import Button from '../Button.component';

// Icons
import RightArrow from '../icons/RightArrow.icons';

const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center">
      <h1 className="font-bold text-white">Hello!</h1>
      <h3 className="font-medium text-white">
        My name is <span className="text-accent">Sadra Khosravi</span> and I am a{' '}
        <span className="text-accent">Full-stack Developer</span>.
      </h3>
      <p className=" text-base w-2/3 mt-1">
        I’m a full-stack developer specializing in designing, architecting, and building data driven
        applications and digital experiences for the web and desktop computers. Currently, I am focused on
        building high-precision and performant medical software.
      </p>
      <div className="mt-1 flex justify-start gap-2">
        <Button href="#" isSecondary>
          <span className="inline-block mr-1">View Projects</span>
          <span className="inline-block align-middle">
            <RightArrow className="w-2 h-3" />
          </span>
        </Button>
        <Button href="#" isSecondary>
          <span className="inline-block mr-1">View Work Experience</span>
          <span className="inline-block align-middle">
            <RightArrow className="w-2 h-3" />
          </span>
        </Button>
      </div>
    </section>
  );
};
export default HeroSection;
