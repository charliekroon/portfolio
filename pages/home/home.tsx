import Link from "next/link";
import {useRouter} from "next/router";
import {Description, TitleText, DescriptionText, Linkje, Menu, MenuText} from "./home.styles";

export default function Home() {
	const router = useRouter();

	const name = "Charlie Kroon";
	const description = "Software Engineer with a background in Journalism";
	const currently = "Currently working at";

	return (
		<>
			<Description>
				<TitleText>{name}</TitleText>
				<br />
				<DescriptionText>
					{description}
					<br />
					<br />
					{currently}{" "}
					<Linkje>
						<Link href="https://hackerone.com">HackerOne</Link>
					</Linkje>
				</DescriptionText>
			</Description>
			<Menu>
				<MenuText>
					<Link href="about">About</Link>{" "}
				</MenuText>
				<MenuText>
					<Link href="/work">Work</Link>{" "}
				</MenuText>
				<MenuText>
					<Link href="/contact">Contact</Link>{" "}
				</MenuText>
			</Menu>
		</>
	);
}
