import styled from "styled-components";

export const media = {
	smallMobile: "@media (min-width: 375px) and (max-width: 677px)",
	mobile: "@media (max-width: 500px)",
	tablet: "@media (min-width: 768px) and (max-width: 1024px)",
};

export const HomeContainer = styled.div`
	max-width: 1400px;
	justify-content: center;
	flex-grow: 1;
	display: flex;
	flex-direction: row;
	padding: 40px;
	touch-action: manipulation;
	${media.mobile} {
		margin: auto;
		margin-left: -5%;
		flex-direction: column;
		max-width: 100%;
		touch-action: manipulation;
	}
	${media.tablet} {
		max-height: 100%;
		max-width: 75%;
		display: flex;
		flex-direction: column;
	}
`;

export const TitleComponent = styled.h1`
	font-family: "Montserrat-Regular";
	font-weight: 500;
	letter-spacing: 2px;
	text-align: left;
	line-height: 1.75em;
	font-size: 15px;
	text-transform: uppercase;
	white-space: nowrap;
	${media.mobile} {
		margin-right: -20px;
		font-size: 12px;
	}
`;

export const DescriptionComoponent = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
`;

export const TextComponent = styled.text`
	font-family: "Montserrat-Light";
	font-weight: 400;
	font-size: 13px;
	line-height: 1.9em;
	letter-spacing: 0.5px;
	white-space: nowrap;
	${media.mobile} {
		margin: inherit;
		font-size: 9px;
	}
	${media.tablet} {
		font-size: 17px;
		margin: inherit;
	}
`;

export const MenuComponent = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	animation: marquee 5s linear infinite;
	padding: 32px;
	touch-action: manipulation;
	height: 100%;
	font-size: 11vw;
	${media.mobile} {
		margin: inherit;
		margin-left: -5%;
		touch-action: manipulation;
		&:active {
			touch-action: manipulation;
			animation: text-blur-out 2s cubic-bezier(0.55, 0.085, 0.68, 0.53) both;
			transition-delay: 0.5s;
		}
	}
	${media.tablet} {
		font-size: 15vw;
		margin-left: -50px;
		margin-top: -60%;
	}
`;

export const MenuTextComponent = styled.text`
	font-family: "Sonder";
	font-style: light-weight;
	text-transform: uppercase;
	transition: 3.5s;
	touch-action: manipulation;
	display: flex;
	flex-direction: column;
	&:hover {
		transition: 0.5s;
		margin-left: 50px;
		font-style: italic;
		touch-action: manipulation;
	}
`;
