import Head from "next/head";
import Container from "../containers/About";

const Home = () => {
  return (
    <>
      <Head>
        <title>Raza Khawaja</title>
        <meta name="description" content="Raza Khawaja's Portfolio" />
        <meta property="og:title" content="Raza Khawaja" />
        <meta property="og:description" content="Raza Khawaja's Portfolio" />
        <link rel="icon" href="/R.svg" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Container />
    </>
  );
};

export default Home;
