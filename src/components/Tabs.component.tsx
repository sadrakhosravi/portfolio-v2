import React, { useEffect, useState } from 'react';

// Icons
import LinkIcon from './icons/Link.icon';

// Styles
import * as styles from './styles/Tabs.module.css';

type ExperienceData = {
  id: string;
  frontmatter: {
    company: string;
    companyURL: string;
    date: string;
    id: number;
    title: string;
  };
  html: string;
};

const Tabs = ({ data }: { data: ExperienceData[] }): JSX.Element => {
  const [activeTab, setActiveTab] = useState<string>('tab-0');
  const numOfTabs = data.length;

  return (
    <div
      className={`text-left mt-6 relative min-w-[50%] lg:max-w-[66.7%] lg:flex lg:flex-col lg:items-center lg:mx-auto`}
    >
      <div className="overflow-x-auto flex relative w-full">
        {data.map((experience, index) => (
          <Tabs.Button
            text={experience.frontmatter.company}
            id={`tab-${index}`}
            isActive={activeTab === `tab-${index}`}
            onClick={() => {
              setActiveTab(`tab-${index}`);
            }}
          />
        ))}
        <Tabs.Indicator numOfTabs={numOfTabs} activeTab={activeTab} />
      </div>
      {data.map((experience, index) => (
        <Tabs.Content
          data={experience}
          id={`tab-${index}-content`}
          isHidden={`tab-${index}-content` !== activeTab + '-content'}
        />
      ))}
    </div>
  );
};

type TabsButtonProps = {
  text: string;
  id: string | undefined;
  isActive?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
};

Tabs.Button = ({ text, id, isActive = false, onClick }: TabsButtonProps) => {
  return (
    <button
      id={id}
      className={`px-4 pb-3 pt-3 rounded-t-sm min-w-[10rem] ${
        isActive && 'text-white bg-accent bg-opacity-5'
      } hover:text-white `}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

Tabs.Indicator = ({ activeTab = 'tab-0', numOfTabs }: { activeTab: string; numOfTabs: number }) => {
  const [styles, setStyles] = useState({ offsetWidth: 0, offsetLeft: 0 });

  const setElementStyles = () => {
    const { clientWidth, offsetLeft } = document.getElementById(activeTab) as HTMLElement;
    requestAnimationFrame(() => {
      setStyles({ offsetWidth: clientWidth, offsetLeft: offsetLeft - 8 });
    });
  };

  useEffect(() => {
    setElementStyles();
  }, [activeTab]);

  return (
    <div
      className={`absolute bottom-0 left-0 h-1 bg-white bg-opacity-30 lg:w-full`}
      style={{ minWidth: `calc(${numOfTabs} * 10rem)` }}
    >
      <span
        className="absolute top-0 left-0 h-1 bg-accent transition-all duration-300 ml-[8px]"
        style={{ width: styles.offsetWidth, left: styles.offsetLeft }}
      />
    </div>
  );
};

type TabsContentProps = {
  data: ExperienceData;
  id: string;
  isHidden?: boolean;
};

Tabs.Content = ({ data, id, isHidden = true }: TabsContentProps) => {
  return (
    <div
      id={id}
      className="w-full text-left px-4 py-6 lg:p-6 min-h-1/2 "
      role="tab-content"
      hidden={isHidden}
    >
      <h4 className="text-white">
        {data.frontmatter.title} -
        <a
          href={data.frontmatter.companyURL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent"
        >
          <span> {data.frontmatter.company}</span>
          <span className="inline-block ml-1">
            <LinkIcon fill="fill-accent" />
          </span>
        </a>
      </h4>
      <p className="text-accent text-opacity-70">{data.frontmatter.date}</p>
      <div className={`mt-4 ${styles.TabContent}`} dangerouslySetInnerHTML={{ __html: data.html }}></div>
    </div>
  );
};

export default Tabs;
