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
	font-family: "Montserrat-Regular";
	font-weight: 500;
	letter-spacing: 2px;
	text-align: left;
	line-height: 1.75em;
	margin-bottom: 0vh;
	margin-top: -25px;
	font-size: 15px;
	max-width: 80%;
	position: relative;
	text-transform: uppercase;
	color: #1a1919;
	white-space: nowrap;
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
	font-family: "Montserrat-Light";
	font-weight: 400;
	font-size: 13px;
	max-width: 80%;
	line-height: 1.9em;
	margin-top: -20px;
	margin-right: 0px;
	margin-left: 0px;
	line-height: 1.9em;
	letter-spacing: 0.5px;
	transform-style: preserve-3d;
	color: #1a1919;
	white-space: nowrap;
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
	font-style: light-weight;
	color: #1a1919;
	text-transform: uppercase;
	transition: 3.5s;
	&:hover {
		transition: 0.5s;
		margin-left: 50px;
		font-style: italic;
	}
`;

export default function Home() {
	const name = "Charlie Kroon";
	const description =
		"Software Engineer wiadadsfsdth a background in Journalism";

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
					</MenuText>
					<MenuText>
						<Link href="/projects">
							Projects
						</Link>{" "}
					</MenuText>
					<MenuText>
						<Link href="/contact">
							Contact
						</Link>{" "}
					</MenuText>
				</Menu>
			</Container>
		</>
	);
}
