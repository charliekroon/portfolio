import {createGlobalStyle} from "styled-components";

export const GlobalStyles = createGlobalStyle`
html,
body {
	margin: 0;
	padding: 0;
	background-color: #eee7e1;
	color: #1a1919;
}

@font-face {
	font-family: "Sonder";
	src: url("../fonts/SonderVpDemo-jE37l.ttf");
}

@font-face {
	font-family: "Montserrat-Alternates-Light";
	src: url("../fonts/Montserrat_Alternates/MontserratAlternates-Light.ttf");
}

@font-face {
	font-family: "Montserrat-Regular";
	src: url("../fonts/Montserrat/static/Montserrat-Regular.ttf");
}

@font-face {
	font-family: "Montserrat-Light";
	src: url("../fonts/Montserrat/static/Montserrat-Light.ttf");
}

@font-face {
	font-family: "Montserrat-ExtraLight";
	src: url("../fonts/Montserrat/static/Montserrat-ExtraLight.ttf");
}

@font-face {
	font-family: "Montserrat-Bold";
	src: url("../fonts/Montserrat/static/Montserrat-Bold.ttf");
}

@font-face {
	font-family: "Montserrat-ExtraLightItalic";
	src: url("../fonts/Montserrat_Alternates/MontserratAlternates-ExtraLightItalic.ttf");
}

a {
	color: inherit;
	text-decoration: none;

}

* {
	box-sizing: border-box;

}

@media 
	body {
		color: #eee7e1;
		background: black;
	}

@keyframes text-blur-out {
	0% {
		-webkit-filter: blur(0.01);
		filter: blur(0.01);
	}
	100% {
		-webkit-filter: blur(12px) opacity(0);
		filter: blur(12px) opacity(0);
	}
}

@keyframes pulsate-bck {
	0% {
		-webkit-transform: scale(1);
		transform: scale(1);
	}
	50% {
		-webkit-transform: scale(0.9);
		transform: scale(0.9);
	}
	100% {
		-webkit-transform: scale(1);
		transform: scale(1);
	}
}
`;
