import styles from "../styles/About.module.css";
import Link from "next/link";

export default function About() {
	return (
		<>
			<title>About </title>
			<div>
				<h1>About!</h1>
				<Link href="/">home</Link>
			</div>
		</>
	);
}
