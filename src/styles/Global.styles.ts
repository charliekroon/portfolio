import styled from "styled-components";
import {media} from "./Home.styles";

export const MenuBarContainer = styled.span`
	background: #eee7e1;
	font-family: "Montserrat-Regular";
	text-transform: uppercase;
	padding: 0;
	margin-left: 3%;
	display: flex;
	margin-top: 1%;
`;

export const MainComponent = styled.div`
	min-height: 100vh;
	background: #eee7e1;
	display: flex;
	flex-direction: column;
	margin-left: 10%;
	max-width: 75%;
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
	margin-bottom: 0px;
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
	margin-top: -35px;
	display: flex-start;
	${media.mobile} {
		max-width: 85%;
		letter-spacing: 0px;
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
