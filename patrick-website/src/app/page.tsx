'use client';
import { Tabs } from "@mantine/core";
import { IconHome,IconMail,IconBrandGithub} from '@tabler/icons-react';

export default function Home() {
  return (
        <Tabs color="blue" defaultValue="gallery" orientation="vertical">
          <Tabs.List>
            <Tabs.Tab value="Home" leftSection={<IconHome size={12}/>}>Home</Tabs.Tab>
            <Tabs.Tab value="Projects" leftSection={<IconBrandGithub size={12}/>}>Projects and Skills</Tabs.Tab>
            <Tabs.Tab value="Contact" leftSection={<IconMail size={12}/>}>Contact</Tabs.Tab>
          </Tabs.List>
          <Tabs.Panel value="Home">Gallery tab content</Tabs.Panel>
          <Tabs.Panel value="Projects">Messages tab content</Tabs.Panel>
          <Tabs.Panel value="Contact">Settings tab content</Tabs.Panel>
        </Tabs>
  );
}
