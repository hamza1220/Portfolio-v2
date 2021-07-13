import type { AppProps } from "next/app";
import "../styles/globals.css";
import Navbar from "../components/Navbar";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <div className="w-full min-h-vh flex bg-primary-lightP3 dark:bg-dark-90 justify-center">
        <div className="max-w-5xl w-full">
          <Component {...pageProps} />
        </div>
      </div>
    </>
  );
}

export default MyApp;
