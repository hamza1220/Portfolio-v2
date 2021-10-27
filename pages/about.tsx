import Head from "next/head";
import Container from "../containers/About";
import { InferGetStaticPropsType } from "next";
import path from "path";

export const getStaticProps = async (context) => {
  const introPath = path.join(process.cwd(), "public/info/intro.json");
  const introduction = JSON.parse(introPath)

  return {
    props: {
      introduction
    },
  };
};

const About = ({ introduction }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Head>
        <title>{introduction.name}</title>
        <meta name="description" content={introduction.meta_description} />
        <meta property="og:title" content={introduction.name} />
        <meta property="og:description" content={introduction.meta_description} />
        <link rel="icon" href="/favicon.png" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Container />
    </>
  );
};

export default About;
