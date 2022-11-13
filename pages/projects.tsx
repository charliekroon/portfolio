import MenuBar from "../components/MenuBar";
import {AboutContainer, StandardText, Title} from "../styles/global";
import styled from "styled-components";

export const Text = styled.text`
	font-family: "Montserrat-Light";
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
export default function Projects() {
	return (
		<>
			<AboutContainer>
				<MenuBar />
				<Title>Projects</Title>
				<Text>
					<StandardText>
						Whatzzzzup up
						bitches
					</StandardText>
				</Text>
			</AboutContainer>
		</>
	);
}
