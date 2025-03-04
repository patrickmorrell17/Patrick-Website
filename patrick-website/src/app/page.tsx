'use client';
import {Tabs, ScrollArea,Title } from "@mantine/core";
import { useState } from 'react';
import { IconHome,IconMail,IconBrandGithub ,IconGolf} from '@tabler/icons-react';
import tabStyle from './tabStyle.module.css';
import WelcomeTab from "./welcomeTab";

export default function Home() {
  const [activeTab, setActiveTab] = useState<string | null>('Home');

  return (
    <>
      <div>
        <Tabs value={activeTab} onChange={setActiveTab}   classNames={tabStyle}>
          <div className={tabStyle.topBar}>
            <Title className={tabStyle.logo}>PDM<IconGolf color="Green" size={30}/></Title>
            <Tabs.List>
              <Tabs.Tab  value="Home" leftSection={<IconHome size={30}/>}>Home</Tabs.Tab>
              <Tabs.Tab value="Projects" leftSection={<IconBrandGithub size={30}/>}>Projects and Skills</Tabs.Tab>
              <Tabs.Tab value="Contact" leftSection={<IconMail size={30}/>}>Contact</Tabs.Tab>
            </Tabs.List>
          </div>
          <Tabs.Panel value="Home">
              <ScrollArea h={"800"} type={"hover"}>
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
