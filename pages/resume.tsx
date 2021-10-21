import Head from "next/head";
import path from "path";
import { promises as fs } from "fs";
import { Resume as ResumeProp } from "../constants";

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

const Resume = ({ resume }: { resume: ResumeProp }) => (
  <>
    <Head>
      <title>Resume - Raza Khawaja</title>
      <meta
        name="description"
        content="This will be the description of the website"
      />
      <meta property="og:title" content="Raza Khawaja" />
      <meta
        property="og:description"
        content="This will be the description of the website"
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
