import { NextPage } from "next";
import Head from "next/head";
import Container from "../../containers/ProjectA";

const Page: NextPage = (props) => {
  return (
    <>
      <Head>
        <title>S. Hamza Ahmad</title>
        <meta
          name="description"
          content="This will be the description of the website"
        />
        <meta property="og:title" content="S. Hamza Ahmad" />
        <meta
          property="og:description"
          content="This will be the description of the website"
        />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Container />
    </>
  );
};

export default Page;
