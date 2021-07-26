import Head from "next/head";
import path from "path";
import { promises as fs } from "fs";
import { InferGetStaticPropsType } from "next";

import Container from "../containers/Resume";

export const getStaticProps = async () => {
  // Get resume
  const resumePath = path.join(process.cwd(), "public/info/resume.json");
  const resumeObject = await fs.readFile(resumePath, "utf-8");
  const resume = JSON.parse(resumeObject);

  return {
    props: {
      resume,
    },
  };
};

const Resume = ({
  resume,
}: {
  resume: InferGetStaticPropsType<typeof getStaticProps>;
}) => (
  <>
    <Head>
      <title>Resume - S. Hamza Ahmad</title>
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
    <Container resume={resume} />
  </>
);

export default Resume;
