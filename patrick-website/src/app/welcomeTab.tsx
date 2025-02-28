'use client';
import {Title, Image, Text, List} from "@mantine/core";
import welcomeTab from "./welcomeTab.module.css";
import staticText from "../../public/staticText.json";

export default function WelcomeTab() {
  return (
    <>
        <Title className={welcomeTab.title} order={1}>{staticText.title}</Title>
        <div className={welcomeTab.picture}>
            <Image h={350}
                   w="auto"
                   fit="contain" radius="xl" 
                   src="https://github.com/patrickmorrell17/picture-website-patrick/blob/main/PatrickPic.jpg?raw=true"
            />
        </div>
        <div className={welcomeTab.details}>
          <Title order={3}>{staticText.header}</Title>
          <Text size="md">{staticText.introPara}</Text>
        </div>
        <div className={welcomeTab.experience}>
          <Title order={3}>Relevant Experience</Title>
          <Title order={5}>Epic System - Full Stack Software Developer | Feb 2022 - Feb 2025</Title>
          <List>
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
        </div>
    </>
  );
}