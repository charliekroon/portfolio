import styled from "styled-components";

export const media = {
	mobile: "@media(max-width: 844px)",
	tablet: "@media(max-width: 991px)",
	desktop: "@media(max-width: 1199px)",
};

export const Text = styled.span`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	margin-left: 10%;
	flex-grow: 1;
	margin-top: 30%;
	justify-items: space-between;
`;

export const TitleText = styled.text`
	font-family: "Montserrat-Regular";
	font-weight: 500;
	letter-spacing: 2px;
	text-align: left;
	line-height: 1.75em;
	margin-bottom: 0vh;
	margin-top: -25px;
	font-size: 15px;
	max-width: 80%;
	position: relative;
	text-transform: uppercase;
	color: #1a1919;
	white-space: nowrap;
	${media.mobile} {
		padding-top: 12%;
		font-size: 15px;
		max-width: 100%;
		display: block;
		text-align: left;
		margin-right: 15%;
	}
`;

export const Description = styled.span`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	margin-left: 10%;
	flex-grow: 1;
	margin-top: 30%;
	justify-items: space-between;
	${media.mobile} {
		font-size: 15px;
		margin-top: 30%;
		display: block;
		text-align: left;
		justify-items: space-between;
		line-height: 1.9em;
		position: relative;
	}
`;

export const DescriptionText = styled.text`
	font-family: "Montserrat-Light";
	flex-wrap: nowrap;
	font-weight: 400;
	font-size: 13px;
	max-width: 80%;
	line-height: 1.9em;
	margin-top: -5px;
	margin-right: 0px;
	margin-left: 0px;
	line-height: 1.9em;
	letter-spacing: 0.5px;
	transform-style: preserve-3d;
	color: #1a1919;
	white-space: nowrap;
	${media.mobile} {
		max-width: 100%;
		display: block;
		text-align: left;
		font-weight: 400;
		position: relative;
		margin-top: -1%;
	}
`;

export const Menu = styled.span`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	flex: 1;
	margin: auto;
	margin-right: 15%;
	margin-left: 2%;
	font-size: 10rem;
	--offset: 20vw;
	width: fit-content;
	animation: marquee 5s linear infinite;
	${media.mobile} {
		font-size: 16vw;
		max-width: 100%;
		display: block;
		text-align: left;
		padding-bottom: 10%;
		margin-left: -160%;
		margin-right: 15%;
	}
`;

export const MenuText = styled.text`
	font-family: "Sonder";
	font-style: light-weight;
	color: #1a1919;
	text-transform: uppercase;
	transition: 3.5s;
	&:hover {
		transition: 0.5s;
		margin-left: 50px;
		font-style: italic;
	}
`;

export const Linkje = styled.text`
	left: 0;
	transform: scaleX(0);
	&:hover {
		animation: text-blur-out 1.2s cubic-bezier(0.55, 0.085, 0.68, 0.53) both;
	}
`;
