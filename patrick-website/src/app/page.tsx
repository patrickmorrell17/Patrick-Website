'use client';
import {Tabs, ScrollArea,Image } from "@mantine/core";
import { useState } from 'react';
import { IconHome,IconMail,IconBrandGithub} from '@tabler/icons-react';
import tabStyle from './tabStyle.module.css';
import WelcomeTab from "./welcomeTab";

export default function Home() {
  const [activeTab, setActiveTab] = useState<string | null>('Home');

  return (
    <>
        
      <div>
          <Image h={100}
            className={tabStyle.image}
            w="auto"
            fit="contain" 
            src="https://raw.githubusercontent.com/patrickmorrell17/picture-website-patrick/refs/heads/main/chrome_BdDrgxhXya.png"
          />
          <Tabs value={activeTab} onChange={setActiveTab}  color="blue" orientation="vertical" classNames={tabStyle}>
            <Tabs.List>
              <Tabs.Tab  value="Home" leftSection={<IconHome size={30}/>}>Home</Tabs.Tab>
              <Tabs.Tab value="Projects" leftSection={<IconBrandGithub size={30}/>}>Projects and Skills</Tabs.Tab>
              <Tabs.Tab value="Contact" leftSection={<IconMail size={30}/>}>Contact</Tabs.Tab>
            </Tabs.List>
            <Tabs.Panel value="Home">
                <ScrollArea h={900} type={"hover"}>
                  <WelcomeTab/>
                </ScrollArea>
            </Tabs.Panel>
            <Tabs.Panel value="Projects">Messages tab content</Tabs.Panel>
            <Tabs.Panel value="Contact">Settings tab content</Tabs.Panel>
          </Tabs>
      </div>
    </>
  );
}
