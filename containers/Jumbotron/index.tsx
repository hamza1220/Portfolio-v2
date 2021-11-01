import React from "react";
import Link from "next/link";
import { Intro } from "../../constants";
import { Facebook, Github, LinkedIn } from "../../utils/icons";

const Jumbotron = ({ intro }: { intro: Intro }) => {
  const socials = [
    {
      name: "Github",
      href: intro.socials.github,
      svg: (
        <Github className="text-xl hover:text-primary dark:hover:text-primary-light transition-colors duration-200" />
      ),
    },
    {
      name: "LinkedIn",
      href: intro.socials.linkedin,
      svg: (
        <LinkedIn className="text-xl hover:text-primary dark:hover:text-primary-light transition-colors duration-200" />
      ),
    },
    {
      name: "Facebook",
      href: intro.socials.facebook,
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
        {intro.greeting}
      </h1>
      <h2 className="text-5xl sm:text-7xl font-bold mb-4">{intro.name}.</h2>
      <div className="text-blueGray-500">
        {/* <h2 className="text-3xl sm:text-5xl font-bold mb-4">
          I build things for the web.
        </h2> */}
        <p className="max-w-lg leading-normal text-lg dark:text-gray-600">
          {intro.intro}
        </p>
        {/* <p className="max-w-lg leading-normal text-lg dark:text-gray-600">
          <Link href="https://www.educative.io">
            <span className="gradient-purple text-gradient cursor-pointer font-semibold hover:opacity-75">
              Educative
            </span>
          </Link>{" "}
          focused on building new features for its B2C client base.
        </p> */}
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
