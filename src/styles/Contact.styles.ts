import styled from "styled-components";
import {media} from "./Home.styles";

export const TitleComponent = styled.p`
	font-family: "Sonder";
	font-weight: 100;
	font-style: light-weight;
	font-size: 150px;
	letter-spacing: 3.5px;
	margin-bottom: 0vh;
	max-width: 75%;
	${media.mobile} {
		font-size: 12vh;
		line-height: 1em;
		font-weight: 300;
		position: relative;
		letter-spacing: 0vh;
		margin-bottom: 0vh;
	}
`;

export const TextComponent = styled.main`
	font-family: "Montserrat-Light";
	font-weight: 400;
	line-height: 1.9em;
	letter-spacing: 0.5px;
	font-size: 14px;
	max-width: 75%;
	display: flex-start;
	${media.mobile} {
		padding-bottom: 10px;
		max-width: 85%;
		margin-bottom: 2px;
		letter-spacing: 0px;
	}
`;

export const IconComponent = styled.span`
	display: block;
	margin-top: 0vh;
	max-width: 75%;
	${media.mobile} {
		position: static;
		flex-grow: 1;
		margin-top: 0vh;
		padding-top: 0vh;
	}
`;
