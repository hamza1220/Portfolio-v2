import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import routes, { navRoutes } from "../../../constants/routes";
import DrawerToggleButton from "./DrawerToggleButton";
import DarkModeToggle from "../../DarkModeToggle";
import { Logo } from "../../../utils/icons";

interface ToggleProps {
  drawerClickHandler: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Toolbar = (props: ToggleProps) => {
  const router = useRouter();

  return (
    <div className="bg-primary-lightP3 dark:bg-dark-90 p-4 h-20 relative z-40 flex items-center justify-center">
      <div className="flex items-center mt-3 sm:mt-0 max-w-screen-xl w-full">
        <div className="sm:hidden pr-4">
          <DrawerToggleButton click={props.drawerClickHandler} />
        </div>
        <div className="w-full flex justify-between items-center">
          <Link href={routes.HOME}>
            <div className="cursor-pointer">
              <Logo className="tailwind-hidden sm:flex w-24 ml-4 mt-4 text-primary dark:text-primary-light fill-current" />
            </div>
          </Link>
          <div className="tailwind-hidden sm:flex text-sm font-mono">
            <DarkModeToggle className={"inline-block p-2 m-4 w-5"} />
            {navRoutes.map(
              (navRoute: { name: string; path: string }, index: number) => (
                <Link href={navRoute.path} key={index}>
                  <div
                    className={`p-2 m-4 cursor-pointer ${
                      router.pathname === navRoute.path
                        ? "text-primary dark:text-primary-light"
                        : "hover:text-primary dark:hover:text-primary-light"
                    }`}
                  >
                    {/* <span className="text-primary dark:text-primary-light dark:hover:text-primary-lightP1 mr-1">
                      {" "}
                      0{index + 1}.{" "}
                    </span> */}
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
