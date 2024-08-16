import {useEffect} from "react";
import IconBar from "../src/components/IconBar";
import MenuBar from "../src/components/MenuBar";
import {TextComponent, TitleComponent} from "../src/styles/Contact.styles";
import {MainComponent} from "../src/styles/Global.styles";

export default function Contact() {
	useEffect(() => {
		document.title = "Contact";
	}, []);
	return (
		<>
			<MenuBar />
			<MainComponent>
				<TitleComponent>Hey!</TitleComponent>
				<TextComponent>Send me a message or shoot me an email on hellocharliekroon@gmail.com or follow me on the internet:</TextComponent>
				<IconBar />
			</MainComponent>
		</>
	);
}
