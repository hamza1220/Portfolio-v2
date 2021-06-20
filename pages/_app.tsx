import type { AppProps } from "next/app";
import "../styles/globals.css";
import Navbar from "../components/Navbar";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <div className="w-full flex bg-primary-lightP3 justify-center">
        <div className="max-w-screen-xl w-full">
          <Component {...pageProps} />
        </div>
      </div>
    </>
  );
}

export default MyApp;
