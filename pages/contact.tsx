import MenuBar from "../src/interfaces/components/MenuBar";
import {General, StandardText} from "../styles/Global";
import {ContactTitle, ContactText, Icon} from "../styles/contact.styles";
import Image from "next/image";
import Link from "next/link";

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
