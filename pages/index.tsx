import Head from "next/head";
import Link from "next/link";
import styled from "styled-components";

export const Text = styled.text`
	font-family: var(--montserrat_alternates-font);
	font-weight: 300;
	font-style: italic;
`;

export const Container = styled.span`
	display: flex;
	min-height: 100vh;
	padding: 4rem 0;
	background-color: #eee7e1;
	gap: 4rem;
	flex-direction: row;
	justify-content: center;
`;

export const Description = styled.span`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	margin-left: 20%;
	flex-grow: 1;
	margin-top: 30%;
`;

export const Content = styled.span`
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	flex: 1;
	flex-grow: 1;
	margin: auto;
	margin-right: 20%;
	font-size: 10rem;
`;

//to do:
// - replace <br />
// - replace font
// - modify description
// - add link to hackerone
// - add nightmode

export default function Home() {
	const charlie = "Charlie Kroon";
	const name = charlie.toUpperCase();
	const description =
		"Software Engineer with a background in Journalism. Currently working as a Software Engineer at HackerOne";

	return (
		<>
			<Head>
				<title>Charlie Kroon</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>{" "}
			<Container>
				<Description>
					<Text>
						{name}
						<br />
						<br /> {description}
					</Text>
				</Description>
				<Content>
					<Link href="/about">
						About
					</Link>
					<Link href="/contact">
						Contact
					</Link>
					<Link href="/work">Work</Link>
				</Content>
			</Container>
		</>
	);
}
