import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
	return (
		<>
			<div className={styles.container}>
				CHARLITA!
				<div className={styles.content}>
					<Link href="/about">
						About
					</Link>
					<Link href="/contact">
						Contact
					</Link>
					<Link href="/work">Work</Link>
				</div>
			</div>
		</>
	);
}
