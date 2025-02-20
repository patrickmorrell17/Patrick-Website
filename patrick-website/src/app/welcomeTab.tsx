'use client';
import {Title, Image, Text} from "@mantine/core";
import welcomeTab from "./welcomeTab.module.css";

export default function WelcomeTab() {
  return (
    <>
        <Title className={welcomeTab.title} order={1}>Patrick Morrell Full Stack Web Developer</Title>
        <div className={welcomeTab.picture}>
            <Image h={350}
                   w="auto"
                   fit="contain" radius="xl" 
                   src="https://github.com/patrickmorrell17/picture-website-patrick/blob/main/PatrickPic.jpg?raw=true"
            />
        </div>
        <div className={welcomeTab.details}>
          <Title order={3}>Welcome to My Website</Title>
          <Text size="md">Thank you for visiting my website! 
            I’m a results-driven and innovative full stack Software Developer with 3+ years experience in designing, developing, and maintaining innovative software solutions. 
            Skilled in problem-solving, debugging, and optimizing code to enhance performance and user experience. If you’re interested in my resume, you can download it below! 
            If you want to reach out to me see the contact tab - doesn’t have to be about a job:)  
            Always looking to chat with other folks in the industry and discuss cool projects.</Text>
        </div>
    </>
  );
}