import Head from "next/head";
import Home from "./home";
import {Container} from "../src/styles/Global";

export default function Index() {
	return (
		<>
			<Head>
				<meta name="viewport" content="width=device-width" />
				<title>Charlie Kroon</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>{" "}
			<Container>
				<Home />
			</Container>
		</>
	);
}
