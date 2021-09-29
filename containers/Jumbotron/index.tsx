import React from "react";
import Link from "next/link";
import { Facebook, Github, LinkedIn } from "../../utils/icons";

const Jumbotron = () => {
  const socials = [
    {
      name: "Github",
      href: "https://github.com/razakhawaja",
      svg: (
        <Github className="text-xl hover:text-primary dark:hover:text-primary-light transition-colors duration-200" />
      ),
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/razakhawaja/",
      svg: (
        <LinkedIn className="text-xl hover:text-primary dark:hover:text-primary-light transition-colors duration-200" />
      ),
    },
    {
      name: "Facebook",
      href: "https://www.facebook.com/razakhawaja97",
      svg: (
        <Facebook className="text-xl hover:text-primary dark:hover:text-primary-light transition-colors duration-200 -ml-2" />
      ),
    },
  ];

  return (
    <div
      className="w-full min-h-vh flex flex-col justify-center"
      style={{ lineHeight: 1.1 }}
    >
      <h1 className="text-primary dark:text-primary-light dark:hover:text-primary-lightP1 tracking-wider font-mono leading-loose text-base font-normal">
        Hey! Nice to meet you. I'm
      </h1>
      <h2 className="text-5xl sm:text-7xl font-bold mb-4">Raza Khawaja.</h2>
      <div className="text-blueGray-500">
        {/* <h2 className="text-3xl sm:text-5xl font-bold mb-4">
          I build things for the web.
        </h2> */}
        <p className="max-w-lg leading-normal text-lg dark:text-gray-600">
          I enjoy designing and engineering softwares and user experiences. I am
          currently pursuing a User Experience design degree at Purdue
          University.{" "}
          {/* <Link href="https://www.educative.io">
            <span className="gradient-purple text-gradient cursor-pointer font-semibold hover:opacity-75">
              Educative
            </span>
          </Link>{" "}
          focused on building new features for its B2C client base. */}
        </p>
      </div>
      <div className="pt-8 flex">
        {socials.map((social, _) => (
          <Link href={social.href} key={social.name}>
            <a target="_blank">
              <div className="text-gray-400 cursor-pointer mr-4">
                {social.svg}
              </div>
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Jumbotron;
