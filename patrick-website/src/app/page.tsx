"use client";
import { Tabs, ScrollArea, Text } from "@mantine/core";
import { useState } from "react";
import {
  IconHome,
  IconMail,
  IconBrandGithub,
} from "@tabler/icons-react";
import tabStyle from "./tabStyle.module.css";
import WelcomeTab from "./welcomeTab";
import {motion} from "framer-motion";

export default function Home() {
  const [activeTab, setActiveTab] = useState<string | null>("Home");

  return (
    <>
      <div>
        <Tabs value={activeTab} onChange={setActiveTab} classNames={tabStyle} >
          <table className={tabStyle.topBar}>
            <tbody >
              <tr className="">
                <td width={"33%"} className={tabStyle.logoCell}>
                  <Text className={tabStyle.logo} c="blue" fw={800} size="xl">Patrick Morrell</Text>
                </td>
                <td width={"33%"} className={tabStyle.titleCell}> 
                  <Text className={tabStyle.logo} c="blue" fw={800} size="xl">Software Developer</Text>
                  
                </td>
                <td width={"33%"}>
                 
                    <Tabs.List>
                      <Tabs.Tab value="Home" leftSection={<IconHome size={30}  onClick={() => {}}/>}>
                        Home
                      </Tabs.Tab>
                      <Tabs.Tab
                        value="Projects"
                        leftSection={<IconBrandGithub size={30} />}
                      >
                        Projects and Skills
                      </Tabs.Tab>
                      <Tabs.Tab
                        value="Contact"
                        leftSection={<IconMail size={30} />}
                      >
                        Contact
                      </Tabs.Tab>
                    </Tabs.List>
                </td>
              </tr>
            </tbody>
          </table>
          <Tabs.Panel value="Home">
              <ScrollArea h={"800"} type={"hover"}>
                <WelcomeTab />
              </ScrollArea>
          </Tabs.Panel>
          <Tabs.Panel value="Projects">Messages tab content</Tabs.Panel>
          <Tabs.Panel value="Contact">Settings tab content</Tabs.Panel>
        </Tabs>
      </div>
    </>
  );
}
