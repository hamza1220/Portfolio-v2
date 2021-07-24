import React from "react";

const Experience = () => (
  <div className="flex flex-col md:flex-row w-full py-4 md:flex-start">
    <div className="w-full md:w-4/12">
      <h2>Experience </h2>
    </div>
    <div className="tailwind-hidden md:flex border-l-2 border-solid border-primary pr-2" />
    <div className="flex flex-col w-full md:w-8/12 space-y-10">
      <div>
        <h5>
          <a
            className="hover:opacity-70 cursor-pointer transition duration-200"
            href="https://www.educative.io/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Educative Inc
          </a>
        </h5>
        <h6>Full-Stack Software Engineer / June 2020 - July 2021</h6>
        <span className="text-gray-900 dark:text-gray-400">
          Worked in the Site Experience team. Major milestones: 90+ Google
          Lighthouse scores on non-paywalled pages; site-wide dark mode; custom
          Stale-While-Revalidate caching mechanism; Migration to new design
          system from legacy design; Admin Dashboard separation into Next.JS
          static app; Technical design reviewer.
        </span>

        <h6 className="pt-4">
          Technical Content Engineer / June 2019 - May 2020
        </h6>
        <span className="text-gray-900 dark:text-gray-400">
          Created 150+ interactive articles on various computer science
          concepts, algorithms, frameworks, libraries and technologies for
          Educative's{" "}
          <a
            className="hover:opacity-70 hover:underline cursor-pointer transition duration-200"
            href="https://www.educative.io/edpresso"
            target="_blank"
            rel="noopener noreferrer"
          >
            'Edpresso'
          </a>{" "}
          platform.
        </span>
      </div>

      <div>
        <h5>
          <a
            className="hover:opacity-70 cursor-pointer transition duration-200"
            href="https://lums.edu.pk/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Lahore University of Management Sciences
          </a>
        </h5>
        <h6>Teaching Assistant / Sept 2018 - Dec 2018</h6>
        <p className="text-gray-900 dark:text-gray-400">
          Created weekly coding assignments for students. Supervised weekly
          3-hour lab sessions. Oversaw and graded final course projects.
        </p>
      </div>

      <div>
        <h5>
          <a
            className="hover:opacity-70 cursor-pointer transition duration-200"
            href="https://onebytellc.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            OneByte LLC.{" "}
          </a>
        </h5>
        <h6>Intern / Aug 2017 - Sept 2017</h6>
        <p className="text-gray-900 dark:text-gray-400">
          Learned basic web-development using HTML, CSS and Javascript in
          addition to Agile workflow.
        </p>
      </div>
    </div>
  </div>
);

export default Experience;
