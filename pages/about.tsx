import MenuBar from "../components/MenuBar";
import {
	AboutContainer,
	Title,
	Byline,
	Text,
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
					{" "}
					I am a software engineer, with
					a background in Journalism,
					Content Marketing and
					Literature. As a teenager I
					wanted to become a writer. As
					an adult I learned that, want
					I really wanted, was to paid.
				</Text>
				<Header>
					Languages and Technical Skills
				</Header>
				<Text>
					Javascript(ES6) / Typescript /
					Ruby / SQL / CSS
					<br />
					NodeJS / ReactJS / React Redux
					/ Ruby on Rails / NextJS /
					NestJS / ElasticSearch
					<br />
					GraphQL / Backbone/ Rest API /
					Express / PostgreSQL / Knex.js
					<br />
					TailwindCSS / Styled
					Components
				</Text>
				<Header>Soft Skills</Header>
				<Text>
					Problem Solving / Presentation
					Skills / Collaboration /
					Goal-Oriented
				</Text>
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
