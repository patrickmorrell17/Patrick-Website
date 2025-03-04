'use client';
import {Title, Image, Text, List, BackgroundImage} from "@mantine/core";
import welcomeTab from "./welcomeTab.module.css";
import staticText from "../../public/staticText.json";
import { IconChevronsRight, IconRocket } from '@tabler/icons-react';

export default function WelcomeTab() {
  return (
    <>
    <BackgroundImage h={350} w="auto" src="">
        <Title className={welcomeTab.title} order={1}>{staticText.title}</Title>
        <div className={welcomeTab.picture}>
            <Image h={350}
                   w="auto"
                   fit="contain" radius="xl" 
                   src="https://github.com/patrickmorrell17/picture-website-patrick/blob/main/PatrickPic.jpg?raw=true"
            />
        </div>
        <div className={welcomeTab.details}>
          <Title order={3}>{staticText.header} <IconRocket/></Title>
          <Text size="md">{staticText.introPara}</Text>
        </div>
        <div className={welcomeTab.experience}>
          <Title order={3}>Relevant Experience</Title>
          <Title order={5}>Epic System - Full Stack Software Developer | Feb 2022 - Feb 2025</Title>
          <List icon={<IconChevronsRight size={20} />} spacing={"md"}>
            <List.Item>Spearheaded 10 development projects to improve reporting and clincal workflows for Epic's population health tools, which
            contributed elevating Epic’s Population Health division from 7th to 1st in KLAS ratings.
            </List.Item>
            <List.Item>Engineered a comprehensive reporting tool to summarize system-wide build data, aggregated by care gap type, improving
            reporting accuracy and insights. This resulted in easier implementation and maintenance for care gap related build accross all
            our organizations.
            </List.Item>
            <List.Item>Developed a React-based pop-up feature to enable real-time care gap adjustments for patients, optimizing clinical
            workflows.</List.Item>
            <List.Item>Resolved high-priority Git-related issues by actively participating in Epic’s Git Support Group, enhancing system stability
            and increasing developer productivity when using version control tools.</List.Item>
          </List>
        
          <Title order={5}>Tree Top Inc - Software Developer Intern | | 05/2020 - 08/2021</Title>
          <List icon={<IconChevronsRight size={20} />} spacing={"md"}>
            <List.Item>Accelerated the launch of TreeApp, Tree Top’s new ERP system, by contributing to front-end and back-end development.
            Tree App significantly increased work flow eficiency in shipping and reveiving.
            </List.Item>
            <List.Item>Optimized Tree Top’s web service performance by integrating with Amazon’s Selling Partner API, improving data exchange efficiency.
            </List.Item>
          </List>
        
          <Title order={5}>USDA - Information MAnagement Undergraduate Assistant | 09/2019 - 03/2020</Title>
          <List icon={<IconChevronsRight size={20} />} spacing={"md"}>
            <List.Item>Assisted with various programming-related projects and the creation of bioinformatic tools using python tools, increasing
            researcher efficiency and accuracy.
            </List.Item>
            <List.Item>Published a microbiology data processing tool using python, still actively used by USDA researchers. This tool greatly
            increased efficiency when researchers were using gas chromatigraph equipment.
            </List.Item>
          </List>

          <Title order={5}>USDA - Information MAnagement Undergraduate Assistant | 09/2019 - 03/2020</Title>
          <List icon={<IconChevronsRight size={20} />} spacing={"md"}>
            <List.Item>Assisted with various programming-related projects and the creation of bioinformatic tools using python tools, increasing
            researcher efficiency and accuracy.
            </List.Item>
            <List.Item>Published a microbiology data processing tool using python, still actively used by USDA researchers. This tool greatly
            increased efficiency when researchers were using gas chromatigraph equipment.
            </List.Item>
          </List>

          <Title order={5}>F5 Inc - Senior Design Empployee | 02/2021 - 12/2021</Title>
          <List icon={<IconChevronsRight size={20} />} spacing={"md"}>
            <List.Item>Designed a scalable data pipeline for machine learning using Apache Beam, improving data processing capabilities for F5
            Inc. This resulted in better threat detection across networks for F5s customers.
            </List.Item>
          </List>
        </div>
        </BackgroundImage>
    </>
  );
}