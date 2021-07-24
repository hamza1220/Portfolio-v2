import React from "react";

const Education = () => (
  <div className="flex flex-col md:flex-row w-full py-4 md:flex-start">
    <div className="w-full md:w-4/12">
      <h2>Education </h2>
    </div>
    <div className="tailwind-hidden md:flex border-l-2 border-solid border-primary pr-2" />
    <div className="flex flex-col w-full md:w-8/12 space-y-10">
      <div>
        <h5>
          <a
            className="hover:opacity-70 cursor-pointer transition duration-200"
            href="https://polytechnic.purdue.edu/degrees/ms-computer-graphics-technology/ux-design"
            target="_blank"
            rel="noopener noreferrer"
          >
            Purdue University
          </a>
        </h5>
        <h6>M.S Computer Graphics Technology (UX Design) / 2021 - Present</h6>
        <span className="text-gray-900 dark:text-gray-400">
          UX Design Concentration
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
        <h6>B.S Computer Science / 2016 - 2020</h6>
        <span className="text-gray-900 dark:text-gray-400">
          CGPA: 3.74 / 4.00
        </span>
        <p className="text-gray-900 dark:text-gray-400">
          Key Coursework: Human-Computer Interaction, Software Engineering,
          Network-Centric Computing, Computer Vision, Deep Learning
        </p>
      </div>
    </div>
  </div>
);

export default Education;
