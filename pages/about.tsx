import {useEffect} from "react";
import MenuBar from "../src/components/MenuBar";
import {HeaderComponent, QuoteComponent, SkillsComponent} from "../src/styles/About.styles";
import {MainComponent, TextComponent, TitleComponent} from "../src/styles/Global.styles";

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
					<p>
						I am a Software Engineer based in The Netherlands with a background in content writing, journalism, and social media marketing. After several years of freelancing across these fields, I transitioned to
						software development in 2020 by completing an 11-week intensive Full Stack Developer bootcamp.
					</p>
					<p>
						Currently, I’m a Software Engineer at HackerOne, a bug bounty platform that bridges businesses and ethical hackers. My work involves enhancing the core functionality of the bug bounty program, collaborating
						with clients like Google, Spotify, TikTok, Goldman Sachs, and the U.S. Department of Defense.
					</p>
					<p>In September 2024, I'll be joining GitLab as a Software Engineer.</p>
				</TextComponent>
				<HeaderComponent>Languages and Technical Skills</HeaderComponent>
				<SkillsComponent>
					Javascript(ES6) / Typescript / Ruby / SQL / CSS
					<br />
					NodeJS / ReactJS / Ruby on Rails / NextJS / NestJS / ElasticSearch
					<br />
					GraphQL / Backbone / Rest API / PostgreSQL
					<br />
					TailwindCSS / Styled Components
				</SkillsComponent>
			</MainComponent>
		</>
	);
}
