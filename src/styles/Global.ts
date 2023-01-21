import styled from "styled-components";
import {media} from "./HomeStyles";

export const General = styled.div`
	min-height: 100vh;
	background: #eee7e1;
	display: flex;
	flex-flow: wrap;
	flex-direction: column;
	gap: 1rem;
	${media.mobile} {
		display: flex;
		flex-wrap: wrap;
		max-width: 100%;
		flex: 100%;
	}
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
	margin-bottom: 0%;
	margin-top: 10%;
	${media.mobile} {
		font-size: 50px;
	}
`;

export const Byline = styled.p`
	font-family: "Sonder";
	font-weight: 50;
	font-style: light-weight;
	color: #1a1919;
	font-size: 50px;
	letter-spacing: 2px;
	margin-left: 10%;
	margin-right: 20%;
	padding-bottom: 0%;
	align-items: flex-start;
	margin-top: -1.5%;
	${media.mobile} {
		font-size: 25px;
		font-family: "Montserrat-Light";
	}
`;

export const Header = styled.p`
	font-family: "Sonder";
	font-weight: 50;
	font-style: light-weight;
	color: #1a1919;
	font-size: 28px;
	letter-spacing: 2px;
	margin-left: 10%;
	margin-right: 20%;
	align-items: flex-start;
	text-transform: uppercase;
	margin-top: -0.5%;
`;

export const StandardText = styled.text`
	font-family: "Montserrat-Light";
	font-weight: 400;
	letter-spacing: 0.5px;
	max-width: 80%;
	font-size: 13px;
	line-height: 1.9em;
	color: #1a1919;
	${media.mobile} {
		font-size: 13px;
		max-width: 1000px;
		letter-spacing: 0px;
		display: flex-start;
	}
`;

export const Text = styled.text`
	letter-spacing: 1px;
	display: grid;
	margin-left: 10%;
	flex-grow: 1;
	margin-top: -2%;
	margin-right: 40%;
	${media.mobile} {
		font-size: 13px;
		max-width: 1000px;
		letter-spacing: 0px;
		display: flex-start;
	}
`;

export const Button = styled.button`
	font-family: "Sonder";
	border: 0;
	display: flex;
	flex-wrap: wrap;
	text-align: center;
	max-width: 500px;
	padding: 10px 32px;
	margin-top: -2%;
	margin-left: 10%;
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
`;
