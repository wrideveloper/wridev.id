import { AppProps } from "next/app";

import "~/global.css";
import "@fontsource/ibm-plex-sans/400.css";
import "@fontsource/ibm-plex-sans/500.css";
import "@fontsource/ibm-plex-sans/600.css";
import "@fontsource/ibm-plex-sans/700.css";

export default function MyApp({ Component, pageProps }: AppProps) {
	return <Component {...pageProps} />;
}
