import React from "react";
import Link from "next/link";
import { Facebook, Github, LinkedIn } from "../../utils/icons";

const Jumbotron = () => {
  const socials = [
    {
      name: "Github",
      href: "https://github.com/hamza1220",
      svg: (
        <Github className="text-xl hover:text-primary transition-colors duration-200" />
      ),
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/syed-hamza-ahmad/",
      svg: (
        <LinkedIn className="text-xl hover:text-primary transition-colors duration-200" />
      ),
    },
    {
      name: "Facebook",
      href: "https://www.facebook.com/S.Hamza.Ahmad",
      svg: (
        <Facebook className="text-xl hover:text-primary transition-colors duration-200 -ml-2" />
      ),
    },
  ];

  return (
    <div
      className="w-full min-h-vh flex flex-col p-6 justify-center"
      style={{ lineHeight: 1.1 }}
    >
      <h1 className="text-primary tracking-wider font-mono leading-loose text-base font-normal">
        Hi, my name is
      </h1>
      <h2 className="text-5xl sm:text-7xl font-bold mb-4">Syed Hamza Ahmad.</h2>
      <div className="text-blueGray-500">
        <h2 className="text-3xl sm:text-5xl font-bold mb-4">
          I build things for the web.
        </h2>
        <p className="max-w-lg leading-normal text-lg">
          I'm a New York based Software Engineer who specializes in designing
          and building exceptional digital experiences. Currently, I'm an
          engineer @{" "}
          <Link href="https://www.educative.io">
            <span className="gradient-purple text-gradient cursor-pointer font-semibold hover:opacity-75">
              Educative
            </span>
          </Link>{" "}
          focused on building new features for its B2C client base.
        </p>
      </div>
      <div className="pt-8 flex">
        {socials.map((social, _) => (
          <Link href={social.href} key={social.name}>
            <div className="text-gray-400 cursor-pointer mr-4">
              {social.svg}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Jumbotron;
