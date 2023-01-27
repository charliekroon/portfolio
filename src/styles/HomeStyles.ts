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
	width: 100%;
	${media.mobile} {
		flex-direction: column;
	}
`;
export const Text = styled.span`
	display: flex;
	flex-direction: column;
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
		font-size: 15px;
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
		display: flex;
		max-width: 100%;
	}
`;

export const Menu = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	animation: marquee 5s linear infinite;
	padding: 32px;
	height: 100%;
	font-size: 11vw;
	${media.tablet} {
		font-size: 10vw;
		padding: 16px;
	}
	${media.mobile} {
		display: flex;
		font-size: 16vw;
		max-width: 100%;
		&:hover {
			animation: text-blur-out 1.2s cubic-bezier(0.55, 0.085, 0.68, 0.53) both;
		}
	}
`;

export const MenuText = styled.text`
	font-family: "Sonder";
	font-style: light-weight;
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
