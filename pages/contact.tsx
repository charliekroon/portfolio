import MenuBar from "../components/MenuBar";
import {AboutContainer, Title, Text} from "./background";

export default function Contact() {
	return (
		<>
			<AboutContainer>
				<MenuBar />
				<Title>Contact</Title>
				<Text>Send me a text!</Text>
			</AboutContainer>
		</>
	);
}
