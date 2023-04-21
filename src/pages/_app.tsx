import { AppProps } from "next/app";

import "~/global.css";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";
import "@fontsource/poppins/800.css";

export default function MyApp({ Component, pageProps }: AppProps) {
	return <Component {...pageProps} />;
}
