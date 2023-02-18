import styled from "styled-components";

export const media = {
	mobile: "@media(max-width: 844px)",
	tablet: "@media(max-width: 1200px)",
};

export const HomeContainer = styled.div`
	max-width: 1400px;
	justify-content: center;
	flex-grow: 1;
	display: flex;
	flex-direction: row;
	padding: 40px;
	touch-action: manipulation;

	width: 100%;
	${media.mobile} {
		flex-direction: column;
		max-width: 350%;
		margin-right: 9%;
		touch-action: manipulation;
	}
`;
export const Text = styled.span`
	display: flex;
	flex-direction: column;
	${media.mobile} {
		font-size: 15px;
		margin: 72px 0 32px;
	}
`;

export const TitleText = styled.h1`
	font-family: "Montserrat-Regular";
	font-weight: 500;
	letter-spacing: 2px;
	text-align: left;
	line-height: 1.75em;
	font-size: 15px;
	text-transform: uppercase;
	white-space: nowrap;
`;

export const Description = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	${media.mobile} {
		margin: 72px 0 32px;
	}
`;

export const DescriptionText = styled.text`
	font-family: "Montserrat-Light";
	font-weight: 400;
	font-size: 13px;
	line-height: 1.9em;
	letter-spacing: 0.5px;
	white-space: nowrap;
	${media.mobile} {
		font-size: 11.5px;
	}
`;

export const Menu = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	animation: marquee 5s linear infinite;
	padding: 32px;
	touch-action: manipulation;
	height: 100%;
	font-size: 11vw;
	${media.tablet} {
		font-size: 10vw;
		padding: 16px;
		touch-action: manipulation;
	}
	${media.mobile} {
		touch-action: manipulation;
		display: flex;
		font-size: 16vw;
		max-width: 100%;
		margin-top: -250px;
		&:active {
			touch-action: manipulation;
			animation: text-blur-out 2s cubic-bezier(0.55, 0.085, 0.68, 0.53) both;
			transition-delay: 0.5s;
		}
	}
`;

export const MenuText = styled.text`
	font-family: "Sonder";
	font-style: light-weight;
	text-transform: uppercase;
	transition: 3.5s;
	touch-action: manipulation;

	&:hover {
		transition: 0.5s;
		margin-left: 50px;
		font-style: italic;
		touch-action: manipulation;
	}
`;

export const Linkje = styled.text`
	font-family: "Montserrat-Light";
	transform: scaleX(0);
	&:hover {
		animation: text-blur-out 1.2s cubic-bezier(0.55, 0.085, 0.68, 0.53) both;
	}
	${media.mobile} {
		max-width: 100%;
		&:hover {
			animation: text-blur-out 1.2s cubic-bezier(0.55, 0.085, 0.68, 0.53) both;
		}
	}
`;
