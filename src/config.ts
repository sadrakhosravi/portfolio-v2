// Navigation Item
export const NavItems = [
  {
    text: 'About',
    link: '#about',
  },
  {
    text: 'Projects',
    link: '#projects',
  },
  {
    text: 'Experience',
    link: '#experience',
  },
  {
    text: 'Skills',
    link: '#skills',
  },
  {
    text: 'Contact',
    link: '#contact',
  },
];

// Skills
export const SkillsList = {
  technologies: [
    'TypeScript',
    'React',
    'Gatsby',
    'GraphQL',
    'NodeJS',
    'Express',
    'Electron',
    'MySQL',
    'SQLite',
    'MongoDB',
  ],
};

/* Animations */

// General Config
export const FramerViewPort = {
  amount: 'all' as 'all',
  once: true,
  margin: '200px 0px 0px 0px',
};

export const FadeUp = {
  visible: { y: 0, opacity: 1 },
  hidden: { y: 50, opacity: 0 },
};

export const FadeDown = {
  visible: { y: 0, opacity: 1 },
  hidden: { y: -50, opacity: 0 },
};

// FadeUp
export const FramerFadeUp = {
  initial: 'hidden',
  whileInView: 'visible',
  viewport: { ...FramerViewPort },
  variants: { ...FadeUp },
};

export const FramerFadeDown = {
  initial: 'hidden',
  whileInView: 'visible',
  viewport: { ...FramerViewPort },
  variants: { ...FadeDown },
};

export const FramerContentFadeUp = {
  initial: 'hidden',
  whileInView: 'visible',
  viewport: { amount: 0.3, once: true },
  variants: { ...FadeUp },
};
