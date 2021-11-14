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

  return (
    <div className="text-center">
      <div className={`text-left inline-block mt-6 px-2 relative ${styles.TabsContainer}`}>
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
        <Tabs.Indicator activeTab={activeTab} />
        {data.map((experience, index) => (
          <Tabs.Content
            data={experience}
            id={`tab-${index}-content`}
            isHidden={`tab-${index}-content` !== activeTab + '-content'}
          />
        ))}
      </div>
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
      className={`px-4 pb-3 pt-3 rounded-t-sm ${
        isActive && 'text-white bg-accent bg-opacity-5'
      } hover:text-white ${styles.TabButton}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

Tabs.Indicator = ({ activeTab = 'tab-0' }: { activeTab: string }) => {
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
    <div className="w-full h-1 bg-white bg-opacity-30 relative">
      <span
        className="absolute top-0 left-0 h-1 bg-accent transition-all duration-300"
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
    <div id={id} className="w-full text-left p-6 min-h-1/2 " role="tab-content" hidden={isHidden}>
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
