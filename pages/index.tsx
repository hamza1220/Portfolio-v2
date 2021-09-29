import Head from "next/head";
import { InferGetStaticPropsType } from "next";
import { promises as fs } from "fs";
import path from "path";
import Container from "../containers/Landing";

export const getStaticProps = async (context) => {
  const worksListPath = path.join(process.cwd(), "public/info/works.json");
  const projects = await fs.readFile(worksListPath, "utf-8");
  const worksDict = JSON.parse(projects);
  const works = Object.keys(worksDict).map((url) => ({
    ...worksDict[url],
    url,
  }));

  return {
    props: {
      works,
    },
  };
};

const Home = ({ works }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Head>
        <title>Raza Khawaja</title>
        <meta
          name="description"
          content="This will be the description of the website"
        />
        <meta property="og:title" content="Raza Khawaja" />
        <meta
          property="og:description"
          content="This will be the description of the website"
        />
        <link rel="icon" href="/R.svg" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Container works={works} />
    </>
  );
};

export default Home;
