import React from "react";
import Link from "next/link";
import {MenuBarContainer} from "../styles/Global.styles";

export default function MenuBar() {
	return (
		<>
			<MenuBarContainer>
				<Link href="/">Home</Link>{" "}
			</MenuBarContainer>
		</>
	);
}
