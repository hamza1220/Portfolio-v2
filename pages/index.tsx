import Head from "next/head";
import { InferGetStaticPropsType } from "next";
import { promises as fs } from "fs";
import path from "path";
import Container from "../containers/Landing";

export const getStaticProps = async (context) => {
  const infoPath = path.join(process.cwd(), "public/info");
  const projects = await fs.readFile(`${infoPath}/works.json`, "utf-8");
  const worksDict = JSON.parse(projects);
  const works = Object.keys(worksDict).map((url) => ({
    ...worksDict[url],
    url,
  }));

  const intro = await fs.readFile(`${infoPath}/intro.json`, "utf-8");
  const introduction = JSON.parse(intro)

  return {
    props: {
      works,
      introduction
    },
  };
};

const Home = ({ works, introduction }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Head>
        <title>{introduction.name}</title>
        <meta
          name="description"
          content={introduction.meta_description}
        />
        <meta property="og:title" content={introduction.name} />
        <meta
          property="og:description"
          content={introduction.meta_description}
        />
        <link rel="icon" href="/favicon.png" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Container works={works} intro={introduction} />
    </>
  );
};

export default Home;
