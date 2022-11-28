import "../styles/globals.css";
import type { AppProps } from "next/app";
import ReactGA from "react-ga4";

export default function App({ Component, pageProps }: AppProps) {
  ReactGA.initialize(process.env.NEXT_PUBLIC_GA_ID ?? "");
  ReactGA.send("pageview");
  return <Component {...pageProps} />;
}
