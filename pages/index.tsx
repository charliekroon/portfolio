import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";

//to do:
// - replace <br />
// - replace css by styledcomponents
// - replace font
// - add head

export default function Home() {
	const charlie = "Charlie Kroon";
	const name = charlie.toUpperCase();
	const description =
		"Software Engineer with a background in Journalism";

	return (
		<>
			<Head>
				<title>Charlie Kroon</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>{" "}
			<span className={styles.container}>
				<span className={styles.description}>
					{name}
					<br />
					<br />
					{description}
				</span>
				<span className={styles.content}>
					<Link href="/about">
						About
					</Link>
					<Link href="/contact">
						Contact
					</Link>
					<Link href="/work">Work</Link>
				</span>
			</span>
		</>
	);
}
