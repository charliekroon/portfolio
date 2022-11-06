import styled from "styled-components";

export const AboutContainer = styled.div`
	min-height: 100vh;
	background: #eee7e1;
	display: flex;
	flex-flow: wrap;
	flex-direction: column;
	gap: 1rem;
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
	margin-top: -7%;
`;

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
	margin-top: -5%;
`;

export const Button = styled.button`
	font-family: "Sonder";
	background-color: #1a1919;
	color: #eee7e1;
	border: 0;
	max-width: 100px;
	padding: 6px 12px;
	margin-top: -4.5%;
	margin-bottom: 2%;
	margin-left: 10%;
	cursor: pointer;
	border-radius: 12px;
	font-size: 24px;
`;