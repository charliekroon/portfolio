import MenuBar from "../src/components/MenuBar";
import {MainComponent, TextComponent, TitleComponent} from "../src/styles/Global";
import {Icon} from "../src/styles/ContactStyles";
import Image from "next/image";
import Link from "next/link";

export default function Contact() {
	return (
		<>
			<MenuBar />
			<MainComponent>
				<TitleComponent>Hey!</TitleComponent>
				<TextComponent>Send me a message or shoot me an email on charlotkroon@gmail.com or follow me on the internet:</TextComponent>
				<Icon>
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
			</MainComponent>
		</>
	);
}
