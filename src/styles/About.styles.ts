import styled from "styled-components";
import {media} from "./Home.styles";

export const SkillsComponent = styled.main`
	font-family: "Montserrat-Light";
	font-weight: 400;
	line-height: 1.9em;
	letter-spacing: 0.5px;
	font-size: 14px;
	max-width: 75%;
	margin-top: 0px;
	display: flex-start;
	${media.mobile} {
		max-width: 85%;
		letter-spacing: 0px;
	}
`;

export const QuoteComponent = styled.p`
	font-family: "Sonder";
	font-weight: 50;
	font-style: light-weight;
	font-size: 50px;
	letter-spacing: 2px;
	padding-bottom: 1%;
	align-items: flex-start;
	margin-top: -0.5%;
	max-width: 75%;
	${media.mobile} {
		font-size: 24px;
		padding-bottom: 0%;
		display: block;
		line-height: 1.3em;
		font-weight: 300;
	}
`;

export const HeaderComponent = styled.main`
	font-family: "Sonder";
	font-size: 28px;
	text-transform: uppercase;
	max-width: 75%;
	margin-top: 0px;
`;

export const ButtonComponent = styled.button`
	font-family: "Sonder";
	border: 0;
	display: flex;
	flex-wrap: wrap;
	text-align: center;
	max-width: 500px;
	padding: 10px 32px;
	cursor: pointer;
	border-radius: 12px;
	font-size: 24px;
	color: #eee7e1;
	background-color: black;
	&:hover,
	:active {
		animation: pulsate-bck 1s ease-in-out both;
	}
	${media.mobile} {
		display: flex;
		flex-wrap: wrap;
		max-width: 100%;
		flex: 100%;
	}
`;
