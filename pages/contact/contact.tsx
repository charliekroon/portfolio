import MenuBar from "../components/MenuBar";
import {General, StandardText} from "../styles/global";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

export const ContactText = styled.text`
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

export const ContactTitle = styled.p`
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

export const Icon = styled.span`
	align-items: center;
	margin-top: -30%;
`;

export default function Contact() {
	return (
		<>
			<General>
				<MenuBar />
				<ContactTitle>Hey!</ContactTitle>
				<ContactText>
					<StandardText>Send me a message or shoot me an email on charlotkroon@gmail.com or follow me on the internet:</StandardText>
					<Icon>
						{" "}
						<Link href="https://github.com/charliekroon">
							<Image src="/github.svg" height={30} width={30} alt="github" />
						</Link>{" "}
						<Link href="https://medium.com/@charliekroon">
							<Image src="/medium.svg" height={30} width={30} alt="medium" />
						</Link>{" "}
						<Link href="https://www.linkedin.com/in/charliekroon/">
							<Image src="/linkedin.svg" height={30} width={30} alt="medium" />
						</Link>
					</Icon>
				</ContactText>
			</General>
		</>
	);
}
