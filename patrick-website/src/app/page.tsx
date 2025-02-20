'use client';
import {Divider, Tabs, BackgroundImage } from "@mantine/core";
import { useState } from 'react';
import { IconHome,IconMail,IconBrandGithub} from '@tabler/icons-react';
import tabStyle from './tabStyle.module.css';
import WelcomeTab from "./welcomeTab";

export default function Home() {
  const [activeTab, setActiveTab] = useState<string | null>('first');

  return (
    <>
      <BackgroundImage
        src="https://github.com/patrickmorrell17/picture-website-patrick/blob/main/VE5OiO.gif?raw=true"
        radius="sm"
      >
      <div className={tabStyle.customClass}>
          <Tabs value={activeTab} onChange={setActiveTab}  color="blue" orientation="vertical" classNames={tabStyle}>
            <Tabs.List className={tabStyle.tabDiv}>
              <Tabs.Tab  value="Home" leftSection={<IconHome size={30}/>}>Home</Tabs.Tab>
              <Tabs.Tab value="Projects" leftSection={<IconBrandGithub size={30}/>}>Projects and Skills</Tabs.Tab>
              <Tabs.Tab value="Contact" leftSection={<IconMail size={30}/>}>Contact</Tabs.Tab>
            </Tabs.List>
            <Divider orientation="vertical"/>
            <Tabs.Panel value="Home">
              <WelcomeTab/>
            </Tabs.Panel>
            <Tabs.Panel value="Projects">Messages tab content</Tabs.Panel>
            <Tabs.Panel value="Contact">Settings tab content</Tabs.Panel>
          </Tabs>
      </div>
      </BackgroundImage>
    </>
  );
}
