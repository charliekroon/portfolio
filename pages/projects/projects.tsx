import MenuBar from "../components/MenuBar";
import {General, StandardText, Title, Header} from "../styles/global";
import styled from "styled-components";
import Image from "next/image";

export const ProjectsText = styled.text`
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

const Headertje = styled.p`
	font-family: "Sonder";
	font-weight: 50;
	font-style: light-weight;
	color: #1a1919;
	font-size: 28px;
	letter-spacing: 2px;
	margin-left: 10%;
	margin-right: 20%;
	align-items: flex-start;
	margin-top: -30%;
`;
export default function Projects() {
	return (
		<>
			<MenuBar />
			<General>
				<Title>Work</Title>
				<Headertje>Work in Progress</Headertje>
				<ProjectsText>
					<StandardText></StandardText>
				</ProjectsText>
			</General>
		</>
	);
}
