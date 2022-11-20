import MenuBar from "../components/MenuBar";
import {AboutContainer, Title, Byline, Text, StandardText, Header, Button} from "../styles/global";

export default function About() {
	const description = "Hi, I am Charlie";
	return (
		<>
			<AboutContainer>
				<MenuBar />
				<Title>About</Title>
				<Byline>{description}</Byline>
				<Text>
					<StandardText>
						In high school I was known as the girl who wrote, and I wanted to stay known for that, preferably for the rest of my life.
						<p>I studied Journalism and Creative Writing. I published my work on various media platforms and outlets, and every now and then I performed my work during literature events. I worked on project basis as a freelance Content– and Copy Writer, Journalist, and Social Media Marketeer for a mix of clients (e.g. VPRO, Nu.nl, and PARK Magazine) </p>
						<p>With the years I developed an interest in tech. Gradually, I came to the conclusion that, maybe I didn't want to be the girl who wrote for the rest of my life. </p>
						<p> In 2020 I applied for Codaisseur, a bootcamp of 11 weeks where I learned the basics of coding. Even though I had no idea what I was doing, a new passion was born.</p>
						<p>I am currently working as a Software Engineer at HackerOne. HackerOne is a bug bounty platform that connects businesses with ethical hackers. Customers include Google, Spotify, TikTok, Goldman Sachs and The U.S. Department of Defense. On a day to day basis, I am mostly working on the Bug Bounty functionality, which is at the core of HackerOne.</p>
					</StandardText>
				</Text>
				{/* <Header>
					Languages and Technical Skills
				</Header>
				<Text>
					<StandardText>
						Javascript(ES6) /
						Typescript / Ruby /
						SQL / CSS
						<br />
						NodeJS / ReactJS /
						React Redux / Ruby
						on Rails / NextJS /
						NestJS /
						ElasticSearch
						<br />
						GraphQL / Backbone/
						Rest API / Express /
						PostgreSQL / Knex.js
						<br />
						TailwindCSS / Styled
						Components
					</StandardText>
				</Text>
				<Header>Soft Skills</Header>
				<Text>
					<StandardText>
						Writing / Public
						Speaking /
						Collaboration /
						Empathy
						<br /> Mentorship /
						Problem Solving /
						Goal-oriented /
						Adaptability /
						Creativity
					</StandardText>
				</Text> */}
				<a href="https://drive.google.com/file/d/1aBq29AbTXdve04w46eCjTom_Ze0XrkWz/view?usp=sharing" target="_blank" rel="noopener noreferrer">
					<Button>My CV</Button>
				</a>
			</AboutContainer>
		</>
	);
}
