import React from "react";
import MenuBar from "../src/components/MenuBar";
import {MainComponent} from "../src/styles/Global";
import {Icon, ContactTextComponent, TitleComponent} from "../src/styles/ContactStyles";
import Image from "next/image";

export default function Contact() {
	return (
		<>
			<MenuBar />
			<MainComponent>
				<TitleComponent>Hey!</TitleComponent>
				<ContactTextComponent>Send me a message or shoot me an email on charlotkroon@gmail.com or follow me on the internet:</ContactTextComponent>
				<Icon>
					<a href="https://github.com/charliekroon" target="_blank" rel="noopener noreferrer">
						<Image src="/github.svg" height={30} width={30} alt="github" />
					</a>{" "}
					<a href="https://medium.com/@charliekroon" target="_blank" rel="noopener noreferrer">
						<Image src="/medium.svg" height={30} width={30} alt="medium" />
					</a>{" "}
					<a href="https://www.linkedin.com/in/charliekroon/" target="_blank" rel="noopener noreferrer">
						<Image src="/linkedin.svg" height={30} width={30} alt="medium" />
					</a>
				</Icon>
			</MainComponent>
		</>
	);
}
