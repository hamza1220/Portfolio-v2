import React from "react";
import Link from "next/link";
import { Facebook, Github, LinkedIn } from "../../../utils/icons";
const profileImg = require("../../../public/profile-img.png");

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
    <div className="w-full min-h-vh flex flex-col lg:flex-row p-6 items-center justify-around">
      <img
        alt="profile image"
        src={profileImg}
        className="block lg:hidden rounded-full h-80 w-80 border-4 border-primary"
      />
      <div className="flex flex-col justify-center">
        <h1 className="text-heading text-5xl sm:text-7xl font-bold mb-4">
          Hi! I'm <span className="text-primary"> Hamza</span>.
        </h1>
        <span className="block text-2xl sm:text-3xl text-heading font-extralight">
          I work as a Software Engineer @{" "}
          <Link href="https://www.educative.io">
            <span className="gradient-purple text-gradient cursor-pointer font-semibold hover:opacity-75">
              Educative
            </span>
          </Link>
        </span>
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
      <img
        alt="profile image"
        src={profileImg}
        className="tailwind-hidden lg:block rounded-full h-80 w-80 border-4 border-primary"
      />
    </div>
  );
};

export default Jumbotron;
