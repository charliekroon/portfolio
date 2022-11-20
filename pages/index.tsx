import Head from "next/head";
import styled from "styled-components";
import IconBar from "../components/IconBar";
import MenuBar from "../components/MenuBar";
import About from "./about";
import Home from "./home";

export const Container = styled.span`
	display: flex;
	min-height: 100vh;
	flex-direction: row;
	justify-content: center;
	overflow: hidden;
`;

export default function Index() {
	return (
		<>
			<Head>
				<title>Charlie Kroon</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>{" "}
			<Container>
				<Home />
			</Container>
		</>
	);
}
