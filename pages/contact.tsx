import MenuBar from "../components/MenuBar";
import {AboutContainer, StandardText} from "../styles/global";
import styled from "styled-components";

export const Text = styled.text`
	font-family: "Montserrat-Light";
	font-weight: 300;
	letter-spacing: 1px;
	font-size: 15px;
	max-width: 80%;
	color: #1a1919;
	display: grid;
	margin-left: 10%;
	flex-grow: 1;
	margin-right: 40%;
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
	margin-bottom: -30%;
	margin-top: 10%;
`;

export default function Contact() {
	return (
		<>
			<AboutContainer>
				<MenuBar />
				<Title>Hey!</Title>
				<Text>
					<StandardText>
						Send me a message or
						shoot me an email on
						charlotkroon@gmail.com{" "}
						<br />
						Follow me on the
						internet:{" "}
					</StandardText>
				</Text>
			</AboutContainer>
		</>
	);
}
