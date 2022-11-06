import MenuBar from "../components/MenuBar";
import {AboutContainer} from "./background";
import styled from "styled-components";

export const Text = styled.text`
	font-family: "Monteserrat";
	font-weight: 300;
	letter-spacing: 1px;
	font-size: 15px;
	max-width: 80%;
	color: #1a1919;
	display: grid;
	margin-left: 10%;
	flex-grow: 1;
	margin-right: 40%;
`;

export const Title = styled.p`
	font-family: "Sonder";
	font-weight: 100;
	font-style: light-weight;
	color: #1a1919;
	font-size: 150px;
	letter-spacing: 3.5px;
	margin-left: 10%;
	flex-grow: 1;
	margin-bottom: -30%;
	margin-top: 10%;
`;

export default function Contact() {
	return (
		<>
			<AboutContainer>
				<MenuBar />
				<Title>Hey!</Title>
				<Text>
					Send me a message / email.{" "}
					<br />
					Follow me on the internet:
				</Text>
			</AboutContainer>
		</>
	);
}
