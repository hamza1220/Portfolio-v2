import Head from "next/head";
import Container from "../containers/Landing";

const Home = () => {
  return (
    <>
      <Head>
        <title>Cerebro</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container />
    </>
  );
};

export default Home;
