import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';

function AboutPage(props){

  return(
    <div>
            <Hero title={props.title} />

            <Content>
            <p>Hello, my name is Augustino. I am a full-stack web developer. I am familiar with HTML, CSS, Javascript, React, Node and Node package modules, Express, Typescript, Git and GitHub, Backend languages, HTTP, REST, and others. I am familiar with Web architecture and complex structures to build applications and perform the necessary computational tasks of web applications.</p>

            <p>My dream is to one day start my own business and become an entrepreneur (currently working on some ideas).</p>

            <p>I'm constantly learning new things. Currently those things include gaining more experience with MongoDB, React, Express JS, Node JS and Python.</p>

            <p>My latest project, Vessel Masters, is a site for master mariners. You can check it out <a href="https://vesselmasters.com" target="_blank" rel="noopener noreferrer">here</a>, or on the homepage. It is built with WordPress. However, I will be rebuilding it using React in the coming months</p>

            <p>If you'd like to check out my Linkedin page, you can take a look <a href="https://www.linkedin.com/in/augustino-przygocki-4aa94a21/" target="_blank" rel="noopener noreferrer">here</a>.</p>

            <p>Thank you for your interest in me!</p>
            </Content>
        </div>
    );

}

export default AboutPage;