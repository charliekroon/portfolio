import styled from "styled-components";

export const WorkLink = styled.text`
	left: 0;
	font-family: "Montserrat-ExtraLightItalic";
	transform: scaleX(0);
	&:hover {
		animation: text-blur-out 1.2s cubic-bezier(0.55, 0.085, 0.68, 0.53) both;
	}
`;

export const ProjectsText = styled.text`
	font-family: "Montserrat-Light";
	font-weight: 300;
	letter-spacing: 1px;
	font-size: 15px;
	max-width: 80%;
	color: #1a1919;
	display: grid;
	flex-grow: 1;
	margin-right: 40%;
	margin-bottom: 35%;
`;

export const Headertje = styled.p`
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
