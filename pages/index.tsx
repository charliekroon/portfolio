import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
	return (
		<>
			<span className={styles.container}>
				CHARLITA!
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
