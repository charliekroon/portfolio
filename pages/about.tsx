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
						software development in 2020.
					</p>
					<p>
						Since October 2024, I’m a Software Engineer at GitLab, where I am a part of the Threat Insights team.
					</p>
					<p> Before working at GitLab, I was as a Software Engineer at HackerOne, a bug bounty platform that bridges businesses and ethical hackers.</p>
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
