import React from "react";
import Head from "next/head";
import Home from "./home";
import {Container} from "../src/styles/Global";

export default function Index() {
	return (
		<>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
				<title>Charlie Kroon</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>{" "}
			<Container>
				<Home />
			</Container>
		</>
	);
}
