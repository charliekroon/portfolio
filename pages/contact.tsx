import React, {useEffect} from "react";
import MenuBar from "../src/components/MenuBar";
import {MainComponent} from "../src/styles/Global.styles";
import {TextComponent, TitleComponent} from "../src/styles/Contact.styles";
import Image from "next/image";
import IconBar from "../src/components/IconBar";

export default function Contact() {
	useEffect(() => {
		document.title = "Contact";
	}, []);
	return (
		<>
			<MenuBar />
			<MainComponent>
				<TitleComponent>Hey!</TitleComponent>
				<TextComponent>Send me a message or shoot me an email on thecharliekroon@gmail.com or follow me on the internet:</TextComponent>
				<IconBar />
			</MainComponent>
		</>
	);
}
