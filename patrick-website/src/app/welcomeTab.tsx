'use client';
import {Title, Image, Text} from "@mantine/core";
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
    </>
  );
}