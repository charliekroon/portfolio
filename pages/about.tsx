import MenuBar from "../components/MenuBar";
import {
	AboutContainer,
	Title,
	Byline,
	Text,
	Header,
	Button,
} from "./background";

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
				{/* <Header>Experience</Header>
				<Text>
					{" "}
					<ul>
						<li>Codaisseur</li>
						<li>
							BA News
							and Media,
							Hogeschool
							van
							Amsterdam
						</li>
					</ul>{" "}
				</Text> */}
				<Header>Technical Skills</Header>
				<Text>
					Javascript(ES6) / Typescript /
					Ruby / Ruby on Rails
					<br />
					React / Redux / NextJS
					<br />
					Rest API / GraphQL / Backbone
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
				<Button>My CV</Button>
			</AboutContainer>
		</>
	);
}
