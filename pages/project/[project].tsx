import Head from "next/head";
import { InferGetStaticPropsType } from "next";
import { promises as fs } from "fs";
import path from "path";
import Container from "../../containers/Project";

export const getStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  };
};

export const getStaticProps = async (context) => {
  // Get all projects
  const worksListPath = path.join(process.cwd(), "public/info/works.json");
  const projects = await fs.readFile(worksListPath, "utf-8");
  const allProjectsDict = JSON.parse(projects);
  const allProjects = Object.keys(allProjectsDict).map((url) => ({
    ...allProjectsDict[url],
    url,
  }));

  // Get current project's details
  const { project } = context.params;
  const currentProject = allProjects?.[project] ?? null;

  // Get current project's writeup
  let projectWriteup = "";
  if (currentProject) {
    const projectPath = path.join(
      process.cwd(),
      `public/info/works/${project}/writeup.md`
    );
    projectWriteup = await fs.readFile(projectPath, "utf-8");
  }

  return {
    props: {
      currentProject,
      projectWriteup,
      allProjects,
    },
  };
};

const Project = ({
  currentProject,
  projectWriteup,
  allProjects,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Head>
        <title>{currentProject?.title ?? "Work"} - S. Hamza Ahmad</title>
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
      <Container
        project={currentProject}
        writeup={projectWriteup}
        allProjects={allProjects}
      />
    </>
  );
};

export default Project;
