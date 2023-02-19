import React from "react";
import Link from "next/link";
import Image from "next/image";
import {IconComponent} from "../styles/Contact.styles";

export default function IconBar() {
	return (
		<>
			<IconComponent>
				<Link href="https://github.com/charliekroon">
					<Image src="/github.svg" height={30} width={30} alt="github" />
				</Link>{" "}
				<Link href="https://medium.com/@charliekroon">
					<Image src="/medium.svg" height={30} width={30} alt="medium" />
				</Link>{" "}
				<Link href="https://www.linkedin.com/in/charliekroon/">
					<Image src="/linkedin.svg" height={30} width={30} alt="medium" />
				</Link>
			</IconComponent>
		</>
	);
}
