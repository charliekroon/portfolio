import MenuBar from "../src/components/MenuBar";
import {MainComponent, TitleComponent, QuoteComponent, TextComponent, HeaderComponent, ButtonComponent} from "../src/styles/Global";

export default function About() {
	const description = "Hi, I am Charlie";

	return (
		<>
			<MenuBar />
			<MainComponent>
				<TitleComponent>About</TitleComponent>
				<QuoteComponent>{description}</QuoteComponent>
				<TextComponent>
					In high school I was known as the girl who wrote, and I wanted to stay known for that, preferably for the rest of my life.
					<p>I studied Journalism and Creative Writing. I published my work on various media platforms and outlets, and every now and then I performed my work during literature events. I worked on project basis as a freelance Content– and Copy Writer, Journalist, and Social Media Marketer for a mix of clients (e.g. VPRO, Nu.nl, and PARK Magazine) </p>
					<p>When I was twelve years old, I would work tirelessly on my own Kindertent blog (a Dutch Wordpress for children). In my early twenties I would lose myself trying to edit custom Tumblr Themes with CSS and HTML. With the years my interest in tech grew, and gradually I came to the conclusion that, maybe I did not want to be the girl who wrote for the rest of my life.</p>
					<p>In 2020 I applied for Codaisseur, a bootcamp of 11 weeks where I learned the basics of coding. Even though I had no idea what I was doing, my passion for creating webapps was reborn.</p>
					<p>I am currently working as a Software Engineer at HackerOne. HackerOne is a bug bounty platform that connects businesses with ethical hackers. Customers include Google, Spotify, TikTok, Goldman Sachs and The U.S. Department of Defense. On a daily basis, I primarily work on the core functionality of the platform - the bug bounty program.</p>
				</TextComponent>
				<HeaderComponent>Languages and Technical Skills</HeaderComponent>
				<TextComponent>
					Javascript(ES6) / Typescript / Ruby / SQL / CSS
					<br />
					NodeJS / ReactJS / React Redux / Ruby on Rails / NextJS / NestJS / ElasticSearch
					<br />
					GraphQL / Backbone / Rest API / Express / PostgreSQL / Knex.js
					<br />
					TailwindCSS / Styled Components
				</TextComponent>
				<a href="https://drive.google.com/file/d/1aBq29AbTXdve04w46eCjTom_Ze0XrkWz/view?usp=sharing" target="_blank" rel="noopener noreferrer">
					<ButtonComponent>My CV</ButtonComponent>
				</a>
			</MainComponent>
		</>
	);
}
