import Head from "next/head";
import Link from "next/link";
import styled from "styled-components";

export const DescriptionText = styled.text`
	font-family: var(--montserrat-font);
	font-weight: 100;
	display: swap;
	font-style: extra-light;
`;

export const MenuText = styled.text`
	font-family: playfair-display;
	font-weight: 200;
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
	margin-left: 10%;
	flex-grow: 1;
	margin-top: 30%;
`;

export const Menu = styled.span`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	flex: 1;
	flex-grow: 1;
	margin: auto;
	margin-right: 10%;
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
					<DescriptionText>
						{name}
						<br />
						<br /> {description}
					</DescriptionText>
				</Description>
				<Menu>
					<MenuText>
						<Link href="/about">
							ABOUT
						</Link>{" "}
						<Link href="/contact">
							CONTACT
						</Link>{" "}
						<Link href="/work">
							WORK
						</Link>
					</MenuText>
				</Menu>
			</Container>
		</>
	);
}
