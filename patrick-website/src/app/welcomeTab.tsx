"use client";
import {
  Title,
  Image,
  Text,
  List,
  Card,
  Blockquote,
  Center,
  Table,
  Timeline,
  Space,
} from "@mantine/core";
import welcomeTab from "./welcomeTab.module.css";
import staticText from "../../public/staticText.json";
import { IconChevronsRight, IconRocket } from "@tabler/icons-react";
import {motion} from "framer-motion";

export default function WelcomeTab() {
  return (
    <>
      <motion.table animate={{scale:1, opacity:1}} initial={{scale:0}} className={welcomeTab.homeBackground}>
        <tbody>
          <tr>
            <motion.td whileHover={{ scale: 1.1 }} width={"33%"} className={welcomeTab.cellBorder}>
              <Center>
                <Image
                  className={welcomeTab.picture}
                  h={350}
                  w="auto"
                  fit="contain"
                  radius="xl"
                  src="https://patrickstorage17.blob.core.windows.net/patrickblob/chrome_BdDrgxhXya.png"
                />
              </Center>
            </motion.td>
            <motion.td whileHover={{ scale: 1.1 }} width={"34%"} className={welcomeTab.cellBorder}>
              <Center>
                <Text c="blue" fw={700} size="xl">
                  {staticText.header}{" "}
                </Text>
              </Center>
              <Center mt="md">
                <Text w="75%" >
                  {staticText.introPara}
                </Text>
              </Center>
            </motion.td>
            <motion.td whileHover={{ scale: 1.1 }} width={"33%"} className={welcomeTab.timelineCell}>
              <Timeline active={3} bulletSize={24} lineWidth={2}>
                <Timeline.Item title="Epic System - Full Stack Software Developer | Feb 2022 - Feb 2025">
                  <Text c="dimmed" size="sm">
                    Full Stack Web Development in the Population Health Division
                  </Text>
                </Timeline.Item>

                <Timeline.Item title="BS in Computer Science | 2017 - 2021 | Washington State University">
                  <Text c="dimmed" size="sm">
                    Graduated with a 3.8 GPA
                  </Text>
                </Timeline.Item>

                <Timeline.Item title="Tree Top Inc - Software Developer Intern | 05/2020 - 08/2021">
                  <Text c="dimmed" size="sm">
                    Two internships with Tree Top Inc as an intern
                  </Text>
                </Timeline.Item>
              </Timeline>
            </motion.td>
          </tr>
        </tbody>
      </motion.table>
      <table className={welcomeTab.homeBackground}>
        <tbody>
          <tr className={welcomeTab.spaceUnder}>
            <motion.td whileHover={{ scale: 1.1 }}>
              <Center>
                <Card
                  color={"blue"}
                  withBorder
                  shadow="lg"
                  padding="xl"
                  w={"50%"}
                >
                  <Text fw={500} size="lg" mt="md">
                    Epic System - Full Stack Software Developer | Feb 2022 - Feb
                    2025
                  </Text>
                  <Space h="md" />
                  <List icon={<IconChevronsRight size={20} />} spacing={"md"}>
                    <List.Item>
                      Spearheaded 10 development projects to improve reporting
                      and clincal workflows for Epic's population health tools,
                      which contributed elevating Epic’s Population Health
                      division from 7th to 1st in KLAS ratings.
                    </List.Item>
                    <List.Item>
                      Engineered a comprehensive reporting tool to summarize
                      system-wide build data, aggregated by care gap type,
                      improving reporting accuracy and insights. This resulted
                      in easier implementation and maintenance for care gap
                      related build accross all our organizations.
                    </List.Item>
                    <List.Item>
                      Developed a React-based pop-up feature to enable real-time
                      care gap adjustments for patients, optimizing clinical
                      workflows.
                    </List.Item>
                    <List.Item>
                      Resolved high-priority Git-related issues by actively
                      participating in Epic’s Git Support Group, enhancing
                      system stability and increasing developer productivity
                      when using version control tools.
                    </List.Item>
                  </List>
                </Card>
              </Center>
            </motion.td>
          </tr>
          <tr className={welcomeTab.spaceUnder}>
            <motion.td whileHover={{ scale: 1.1 }}>
              <Center>
                <Card withBorder shadow="lg" padding="xl" w={"50%"}>
                  <Text fw={500} size="lg" mt="md">
                    Tree Top Inc - Software Developer Intern | 05/2020 - 08/2021
                  </Text>
                  <Space h="md" />
                  <List icon={<IconChevronsRight size={20} />} spacing={"md"}>
                    <List.Item>
                      Accelerated the launch of TreeApp, Tree Top’s new ERP
                      system, by contributing to front-end and back-end
                      development. Tree App significantly increased work flow
                      eficiency in shipping and reveiving.
                    </List.Item>
                    <List.Item>
                      Optimized Tree Top’s web service performance by
                      integrating with Amazon’s Selling Partner API, improving
                      data exchange efficiency.
                    </List.Item>
                  </List>
                </Card>
              </Center>
            </motion.td>
          </tr>
          <tr className={welcomeTab.spaceUnder}>
            <motion.td whileHover={{ scale: 1.1 }}>
              <Center>
                <Card h="100%" withBorder shadow="lg" padding="xl" w={"50%"}>
                  <Text fw={500} size="lg" mt="md">
                    USDA - Information Management Undergraduate Assistant |
                    09/2019 - 03/2020
                  </Text>
                  <Space h="md" />
                  <List icon={<IconChevronsRight size={20} />} spacing={"md"}>
                    <List.Item>
                      Assisted with various programming-related projects and the
                      creation of bioinformatic tools using python tools,
                      increasing researcher efficiency and accuracy.
                    </List.Item>
                    <List.Item>
                      Published a microbiology data processing tool using
                      python, still actively used by USDA researchers. This tool
                      greatly increased efficiency when researchers were using
                      gas chromatigraph equipment.
                    </List.Item>
                  </List>
                </Card>
              </Center>
            </motion.td>
          </tr>
          <tr className={welcomeTab.spaceUnder}>
            <motion.td whileHover={{ scale: 1.1 }}>
              <Center>
                <Card withBorder shadow="lg" padding="xl" w={"50%"}>
                  <Text fw={500} size="lg" mt="md">
                    F5 Inc - Senior Design Empployee | 02/2021 - 12/2021
                  </Text>
                  <Space h="md" />
                  <List icon={<IconChevronsRight size={20} />} spacing={"md"}>
                    <List.Item>
                      Designed a scalable data pipeline for machine learning
                      using Apache Beam, improving data processing capabilities
                      for F5 Inc. This resulted in better threat detection
                      across networks for F5s customers.
                    </List.Item>
                  </List>
                </Card>
              </Center>
            </motion.td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
