import MenuBar from "../components/MenuBar";
import {AboutContainer, Title} from "./background";
import styled from "styled-components";

export const Text = styled.text`
	font-family: "Monteserrat";
	font-weight: 300;
	letter-spacing: 1px;
	font-size: 15px;
	max-width: 80%;
	color: #1a1919;
	line-height: 1.9em;
	display: grid;
	margin-left: 10%;
	flex-grow: 1;
	margin-top: -2%;
	margin-right: 40%;
`;
export default function Work() {
	return (
		<>
			<AboutContainer>
				<MenuBar />
				<Title>Work</Title>
				<Text>Whatzzzzup up bitches</Text>
			</AboutContainer>
		</>
	);
}
