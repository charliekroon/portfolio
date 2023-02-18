import styled from "styled-components";

export const media = {
	mobile: "@media(max-width: 844px)",
	tablet: "@media(max-width: 1200px)",
};

export const WorkLink = styled.text`
	left: 0;
	font-family: "Montserrat-ExtraLightItalic";
	list-style-type: none;
	transform: scaleX(0);
	&:hover {
		animation: text-blur-out 1.2s cubic-bezier(0.55, 0.085, 0.68, 0.53) both;
	}
`;

export const WorkTextComponent = styled.main`
	font-family: "Montserrat-Light";
	font-weight: 400;
	line-height: 1.9em;
	letter-spacing: 0.5px;
	font-size: 14px;
	max-width: 75%;
	margin: 0vh;
	display: flex-start;
	margin-bottom: 1000px;

	${media.mobile} {
		max-width: 85%;
		letter-spacing: 0px;
		margin: 0vh;
	}
`;
