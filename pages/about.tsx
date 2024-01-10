import React, {useEffect} from "react";
import MenuBar from "../src/components/MenuBar";
import {MainComponent, TitleComponent, TextComponent} from "../src/styles/Global.styles";
import {SkillsComponent, QuoteComponent, HeaderComponent, ButtonComponent} from "../src/styles/About.styles";

export default function About() {
	const description = "Hi, I am Charlie";

	useEffect(() => {
		document.title = "About";
	}, []);

	return (
		<>
			<MenuBar />
			<MainComponent>
				<TitleComponent>About</TitleComponent>
				<QuoteComponent>{description}</QuoteComponent>
				<TextComponent>
					In high school I was known as the girl who wrote, and I wanted to stay known for that, preferably for the rest of my life.
					<p>After studying journalism, I worked as a freelance content and copywriter, journalist, and social media marketer for various clients on a project basis.</p>
					<p>As a twelve-year-old, I worked tirelessly on my own Kindertent blog (a Dutch Wordpress for children). In my early twenties I would lose myself trying to edit custom Tumblr Themes with CSS and HTML. With the years my interest in tech grew, and gradually I came to the conclusion that, maybe I did not want to be the girl who wrote for the rest of my life.</p>
					<p>In 2020, I applied for Codaisseur, a 11-week bootcamp where I learned the basics of coding. While I had no idea what I was doing, my passion for creating webapps was reborn.</p>
					<p>I am currently working as a Software Engineer at HackerOne. HackerOne is a bug bounty platform that connects businesses with ethical hackers. Customers include Google, Spotify, TikTok, Goldman Sachs and The U.S. Department of Defense. On a daily basis, I primarily work on the core functionality of the platform - the bug bounty program.</p>
				</TextComponent>
				<HeaderComponent>Languages and Technical Skills</HeaderComponent>
				<SkillsComponent>
					Javascript(ES6) / Typescript / Ruby / SQL / CSS
					<br />
					NodeJS / ReactJS / React Redux / Ruby on Rails / NextJS / NestJS / ElasticSearch
					<br />
					GraphQL / Backbone / Rest API / Express / PostgreSQL / Knex.js
					<br />
					TailwindCSS / Styled Components
				</SkillsComponent>
				{/* <a href="https://drive.google.com/file/d/1Q3PoO2p0EHimg5uGp6j16kZWzaubzLJ5/view?usp=sharing" target="_blank" rel="noopener noreferrer">
					<ButtonComponent>My CV</ButtonComponent>
				</a> */}
			</MainComponent>
		</>
	);
}
