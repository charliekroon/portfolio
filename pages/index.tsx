import Head from "next/head";
import Link from "next/link";
import styled from "styled-components";

export const Container = styled.span`
	display: flex;
	min-height: 100vh;
	padding: 4rem 0;
	background-color: #eee7e1;
	gap: 4rem;
	flex-direction: row;
	justify-content: center;
`;
export const Text = styled.span`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	margin-left: 10%;
	flex-grow: 1;
	margin-top: 30%;
	justify-items: space-between;
`;

export const TitleText = styled.text`
	font-family: "Monteserrat";
	font-weight: 500;
	letter-spacing: 2px;
	text-align: left;
	line-height: 1.75em;
	margin-bottom: 0vh;
	font-size: 15px;
	max-width: 80%;
	position: relative;
	color: #1a1919;
`;

export const Description = styled.span`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	margin-left: 10%;
	flex-grow: 1;
	margin-top: 30%;
	justify-items: space-between;
`;

export const DescriptionText = styled.text`
	font-family: "Monteserrat";
	position: relative;
	max-width: 80%;
	margin-right: 0px;
	margin-left: 0px;
	font-family: Montserrat, sans-serif;
	font-size: 13px;
	line-height: 1.9em;
	font-weight: 300;
	letter-spacing: 2px;
	color: #1a1919;
`;

export const Menu = styled.span`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	flex: 1;
	margin: auto;
	margin-right: 15%;
	margin-left: 2%;
	font-size: 10rem;
	--offset: 20vw;
	width: fit-content;
	animation: marquee 5s linear infinite;
`;

export const MenuText = styled.text`
	font-family: "Sonder";
	font-weight: 100;
	font-style: light-weight;
	color: #1a1919;
	text-transform: uppercase;
`;

export default function Home() {
	const name = "Charlie Kroon";
	const description =
		"Software Engineer with a background in Journalism";

	const currently = "Currently working at";

	return (
		<>
			<Head>
				<title>Charlie Kroon</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>{" "}
			<Container>
				<Description>
					<TitleText>{name}</TitleText>
					<br />
					<DescriptionText>
						{description}
						<br />
						<br />
						{currently}{" "}
						<Link href="https://hackerone.com">
							HackerOne
						</Link>
					</DescriptionText>
				</Description>
				<Menu>
					<MenuText>
						<Link href="/about">
							About
						</Link>{" "}
						<Link href="/projects">
							Projects
						</Link>{" "}
						<Link href="/contact">
							Contact
						</Link>{" "}
					</MenuText>
				</Menu>
			</Container>
		</>
	);
}
