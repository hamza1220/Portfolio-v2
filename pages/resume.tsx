import Head from "next/head";
import path from "path";
import { promises as fs } from "fs";
import { InferGetStaticPropsType } from "next";

import Container from "../containers/Resume";

export const getStaticProps = async () => {
  const infoPath = path.join(process.cwd(), "public/info");
  const resumeObject = await fs.readFile(`${infoPath}/resume.json`, "utf-8");
  const resume = JSON.parse(resumeObject);

  const intro = await fs.readFile(`${infoPath}/intro.json`, "utf-8");
  const introduction = JSON.parse(intro)

  return {
    props: {
      resume,
      introduction
    },
  };
};

const Resume = ({ resume, introduction }: InferGetStaticPropsType<typeof getStaticProps>) => (
  <>
    <Head>
      <title>Resume - {introduction.name}</title>
      <meta
        name="description"
        content={introduction.meta_description}
      />
      <meta property="og:title" content={`Resume - ${introduction.name}`} />
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
    <Container resume={resume} />
  </>
);

export default Resume;
