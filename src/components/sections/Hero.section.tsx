import React from 'react';

// Components
import Container from 'components/Container.component';
import Button from '../Button.component';

// Icons
import RightArrow from 'components/icons/RightArrow.icon';

const HeroSection = () => {
  return (
    <section className="mt-[60px] h-[calc(100vh-60px)] relative">
      <Container className="h-full" center>
        <Container.Column width="full" gap={false}>
          <h1 className="font-bold text-white">Hello!</h1>
          <h3 className="mt-0 lg:-mt-3 font-medium text-white">
            My name is <span className="text-accent">Sadra Khosravi</span> and I am a{' '}
            <span className="text-accent">Full-stack Developer</span>.
          </h3>
          <p className="w-full lg:w-2/3 my-6">
            I’m a full-stack developer specializing in designing, architecting, and building data driven
            applications and digital experiences for the web and desktop computers. Currently, I am focused on
            building high-precision and performant medical software.
          </p>
          <div className="mt-1 flex justify-start gap-5">
            <Button href="#" isSecondary>
              <span className="inline-block lg:mr-3">View Projects</span>
              <span className="inline-block align-middle">
                <RightArrow className="hidden lg:block w-5 h-6" />
              </span>
            </Button>
            <Button href="#" isSecondary>
              <span className="inline-block lg:mr-1">View Work Experience</span>
              <span className="inline-block align-middle">
                <RightArrow className="w-5 h-6 hidden lg:block" />
              </span>
            </Button>
          </div>
        </Container.Column>
      </Container>
    </section>
  );
};
export default HeroSection;
