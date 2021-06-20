import React from "react";
import DrawerToggleButton from "./DrawerToggleButton";
import Link from "next/link";
import { useRouter } from "next/router";
import routes, { navRoutes } from "../../../constants/routes";

const logo = require("../../../public/script-black.png");

interface ToggleProps {
  drawerClickHandler: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Toolbar = (props: ToggleProps) => {
  const router = useRouter();

  return (
    <div className="bg-white shadow-lg p-4 h-20 relative z-40 flex items-center justify-center">
      <div className="flex items-center mt-3 sm:mt-0 max-w-screen-xl w-full">
        <div className="sm:hidden pr-4">
          <DrawerToggleButton click={props.drawerClickHandler} />
        </div>
        <div className="w-full flex justify-between items-center">
          <Link href={routes.HOME}>
            <div className="text-black cursor-pointer">
              <img
                src={logo}
                alt="Logo"
                className="w-40 ml-4 transform -rotate-6"
              />
            </div>
          </Link>
          <div className="tailwind-hidden sm:flex text-black text-sm font-mono">
            {navRoutes.map(
              (navRoute: { name: string; path: string }, index: number) => (
                <Link href={navRoute.path} key={index}>
                  <div
                    className={`p-2 m-4 cursor-pointer ${
                      router.pathname === navRoute.path
                        ? "text-primary"
                        : "hover:text-primary-600"
                    }`}
                  >
                    <span className="text-primary mr-1"> 0{index + 1}. </span>
                    {navRoute.name}
                  </div>
                </Link>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Toolbar;
