import styled from "styled-components";

export const WorkLink = styled.text`
	left: 0;
	font-family: "Montserrat-ExtraLightItalic";
	transform: scaleX(0);
	&:hover {
		animation: text-blur-out 1.2s cubic-bezier(0.55, 0.085, 0.68, 0.53) both;
	}
`;
