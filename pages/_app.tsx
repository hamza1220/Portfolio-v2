import type { AppProps } from "next/app";
import "../styles/globals.css";
import Navbar from "../components/Navbar";
import Router from "next/router";
import NProgress from "nprogress";
import Footer from "../components/Footer";

NProgress.configure({
  easing: "ease",
  speed: 600,
  showSpinner: false,
  template:
    "<div class='bar bg-primary fixed z-50 top-0 left-0 w-full h-0.5' role='bar'><div class='peg block absolute right-0 w-24 h-full opacity-100 transform rotate-3 -translate-y-1 translate-x-0'></div></div>",
});

let previousURL = null;
Router.events.on("routeChangeStart", (url) => {
  if (previousURL !== url) NProgress.start();
});

Router.events.on("routeChangeComplete", (url) => {
  if (previousURL === url) return;
  previousURL = url;
  NProgress.done();
});

Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <div className="w-full min-h-vh flex bg-brown-50 dark:bg-dark-90 justify-center">
        <div className="max-w-5xl w-full p-6 sm:p-12">
          <Component {...pageProps} />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default MyApp;
