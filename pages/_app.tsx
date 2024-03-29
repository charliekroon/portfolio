import React, {useEffect} from "react";

import type {AppProps} from "next/app";
import {GlobalStyles} from "../src/styles/GlobalStyles";

export default function App({Component, pageProps}: AppProps) {
	return (
		<>
			<GlobalStyles />
			<Component {...pageProps} />
		</>
	);
}
