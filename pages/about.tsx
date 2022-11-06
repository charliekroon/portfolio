import Link from "next/link";
import styled from "styled-components";

export const AboutContainer = styled.div`
	min-height: 100vh;
	background-color: #eee7e1;
	display: flex;
	flex-direction: column;
	gap: 1rem;
`;

export const Title = styled.p`
	font-family: Grandslang roman;
	font-weight: 100;
	font-style: light-weight;
	color: #1a1919;
	font-size: 200px;
	letter-spacing: 3.5px;
	margin-left: 10%;
	flex-grow: 1;
	margin-bottom: 0%;
	background: blue;
	margin-top: 10%;
`;

export const Byline = styled.p`
	font-family: Grandslang roman;
	font-weight: 50;
	font-style: light-weight;
	color: #1a1919;
	font-size: 50px;
	letter-spacing: 2px;
	background: red;
	margin-left: 10%;
	margin-right: 20%;
	padding-bottom: 0%;
	align-items: flex-start;
	margin-top: -17%;
`;

export const Text = styled.text`
	font-family: var(--montserrat-font);
	font-weight: 300;
	letter-spacing: 1px;
	font-size: 15px;
	max-width: 80%;
	color: #1a1919;
	line-height: 1.9em;
	display: grid;
	margin-left: 10%;
	flex-grow: 1;
	margin-top: 0%;
	margin-right: 40%;

	background: yellow;
`;

export default function About() {
	const description = "Hi, I am Charlie";
	return (
		<>
			<AboutContainer>
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
				<Link href="/">home</Link>
			</AboutContainer>
		</>
	);
}
