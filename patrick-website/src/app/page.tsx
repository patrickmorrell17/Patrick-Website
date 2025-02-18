'use client';
import { Tabs } from "@mantine/core";
import { useState } from 'react';
import { IconHome,IconMail,IconBrandGithub} from '@tabler/icons-react';
import tabStyle from './tabStyle.module.css';

export default function Home() {
  const [activeTab, setActiveTab] = useState<string | null>('first');

  return (
    <div>
        <Tabs value={activeTab} onChange={setActiveTab}  color="blue" orientation="vertical" classNames={tabStyle}>
          <Tabs.List className={tabStyle.tabDiv}>
            <Tabs.Tab  value="Home" leftSection={<IconHome size={30}/>}>Home</Tabs.Tab>
            <Tabs.Tab value="Projects" leftSection={<IconBrandGithub size={30}/>}>Projects and Skills</Tabs.Tab>
            <Tabs.Tab value="Contact" leftSection={<IconMail size={30}/>}>Contact</Tabs.Tab>
          </Tabs.List>
          <Tabs.Panel value="Home">Gallery tab content</Tabs.Panel>
          <Tabs.Panel value="Projects">Messages tab content</Tabs.Panel>
          <Tabs.Panel value="Contact">Settings tab content</Tabs.Panel>
        </Tabs>
    </div>
  );
}
