import styled from "styled-components";
import {media} from "./HomeStyles";

export const MainComponent = styled.div`
	min-height: 100vh;
	background: #eee7e1;
	display: flex;
	flex-direction: column;
	gap: 1rem;
	margin-left: 10%;
	${media.mobile} {
		display: flex;
		flex-wrap: wrap;
		max-width: 100%;
		flex: 100%;
		height: 100%;
		min-height: 100vh;
		justify-content: space-between;
	}
`;

export const TitleComponent = styled.p`
	font-family: "Sonder";
	font-weight: 100;
	font-style: light-weight;
	font-size: 150px;
	letter-spacing: 3.5px;
	flex-grow: 1;
	margin-bottom: 0vh;
	${media.mobile} {
		font-size: 12vh;
		line-height: 1em;
		font-weight: 300;
		position: relative;
		letter-spacing: 0vh;
		margin-bottom: 0vh;
	}
`;

export const QuoteComponent = styled.p`
	font-family: "Sonder";
	font-weight: 50;
	font-style: light-weight;
	font-size: 50px;
	letter-spacing: 2px;
	margin-right: 20%;
	padding-bottom: 0%;
	align-items: flex-start;
	margin-top: -0.5%;
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
`;

export const TextComponent = styled.main`
	font-family: "Montserrat-Light";
	font-weight: 400;
	line-height: 1.9em;
	letter-spacing: 0.5px;
	font-size: 14px;
	max-width: 75%;
	margin: 0vh;
	display: flex-start;
	${media.mobile} {
		max-width: 85%;
		letter-spacing: 0px;
	}
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

export const Container = styled.span`
	display: flex;
	min-height: 100vh;
	flex-direction: row;
	justify-content: center;
	overflow: hidden;
	margin: 0vh;
`;
