import React from "react";
import Link from "next/link";
import {DescriptionComoponent, TitleComponent, TextComponent, MenuComponent, MenuTextComponent, HomeContainer} from "../src/styles/Home.styles";

export default function Home() {
	const name = "Charlie Kroon";
	const description = "Software Engineer with a background in Journalism";
	const currently = "Currently working at GitLab";

	return (
		<HomeContainer>
			<DescriptionComoponent>
				<TitleComponent>{name}</TitleComponent>
				<br />
				<TextComponent>
					{description}
					<br />
					{currently}
				</TextComponent>
			</DescriptionComoponent>{" "}
			<MenuComponent>
				<MenuTextComponent>
					<Link href="/about">About</Link>{" "}
				</MenuTextComponent>
				<MenuTextComponent>
					<Link href="/work">Work</Link>{" "}
				</MenuTextComponent>
				<MenuTextComponent>
					<Link href="/contact">Contact</Link>{" "}
				</MenuTextComponent>
			</MenuComponent>
		</HomeContainer>
	);
}
