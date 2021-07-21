import React from "react";
import SectionHeading from "../../components/SectionHeading";
const profileImg = require("../../public/profile-img.png");

const About = () => {
  const recentTech = [
    "JavaScript (ES6+)",
    "React",
    "Flask",
    "Node.js",
    "Vue",
    "GAE",
  ];

  return (
    <div id="about" className="w-full py-24 flex flex-col justify-center ">
      <SectionHeading text={"About Me"} index={1} />
      <div className="flex flex-col-reverse sm:grid sm:grid-cols-5 sm:gap-4">
        <div className="sm:col-start-1 sm:col-end-4 leading-normal text-lg text-blueGray-500">
          <p className="mb-2">
            Hello! My name is Hamza and I enjoy creating things that live on the
            internet. My interest in web development started back in Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Mauris arcu ipsum,
            rhoncus sed gravida et, luctus eu enim. Donec a nunc placerat velit
            vestibulum porttitor sit
          </p>

          <p className="mb-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris arcu
            ipsum, rhoncus sed gravida et, luctus eu enim. Donec a nunc placerat
            velit vestibulum porttitor sit amet et sapien. Etiam feugiat laoreet
            rhoncus. Pellentesque eget elit eleifend, euismod arcu tempus,
            ornare dolor. Phasellus nec scelerisque velit, nec tincidunt ligula.
            Sed egestas ante eros, ut eleifend arcu efficitur a. Fusce ornare
            tellus et magna molestie accumsan. Aenean ultrices tincidunt lacus,
            blandit finibus felis malesuada eget. Suspendisse dolor erat,
            sagittis et lacus nec, fringilla fringilla mi.
          </p>

          <p>
            Some of the technologies I have recently been working with include:
          </p>
          <ul className="grid grid-cols-2 gap-2 font-mono text-sm mt-6">
            {recentTech.map((technology, _) => (
              <li className="mb-1" key={technology}>
                <span className="text-primary mr-2 text-lg">▹</span>{" "}
                {technology}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex justify-center mb-8 sm:mt-0 sm:col-end-6 sm:col-span-2 ">
          <img
            alt="profile image"
            src={profileImg}
            className="rounded-full h-80 w-80 border-4 border-primary"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
