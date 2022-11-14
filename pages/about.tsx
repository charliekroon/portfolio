import MenuBar from "../components/MenuBar";
import {
	AboutContainer,
	Title,
	Byline,
	Text,
	StandardText,
	Header,
	Button,
} from "../styles/global";

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
						{" "}
						In high school I was
						known as the girl
						who wrote, and I
						wanted to stay known
						for that, preferably
						for the rest of my
						life. And thus when
						I had to apply to a
						college I applied
						for a Journalism
						study. It was not
						exactly a real Art
						School study, where
						I would learn how to
						become a <i>
							real
						</i>{" "}
						writer. But, there
						was no University
						where I could study
						Creative Writing, so
						it was as close as I
						could get.
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
				<a
					href="https://pdfhost.io/v/G4J~pCV6v_CK_Resume_2022"
					target="_blank"
					rel="noopener noreferrer">
					<Button>My CV</Button>
				</a>
			</AboutContainer>
		</>
	);
}
