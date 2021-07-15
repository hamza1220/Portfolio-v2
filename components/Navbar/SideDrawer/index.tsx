import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import routes, { navRoutes } from "../../../constants/routes";
import DarkModeToggle from "../../DarkModeToggle";

interface ToggleProps {
  click: any;
  show: boolean;
}

const SideDrawer = (props: ToggleProps) => {
  const router = useRouter();

  React.useEffect(() => {
    props.click();
  }, [router.pathname]);

  return (
    <div
      className={`sm:hidden h-full bg-white dark:bg-dark shadow-lg fixed top-0 w-8/12 max-w-sm z-50 transition duration-500 ease-in-out transform ${
        props.show ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <Link href={routes.HOME}>
        <div className="text-black p-4 h-20 border-b border-gray-300 dark:border-gray-A700 flex justify-center">
          <img
            src={"/script-black.png"}
            alt="Logo"
            className="w-40 ml-4 transform -rotate-6"
          />
          <DarkModeToggle className="flex items-center pl-4" />
        </div>
      </Link>
      <div>
        {navRoutes.map((navRoute: { name: string; path: string }, index) => (
          <Link href={navRoute.path} key={index}>
            <div
              className={`m-2 px-2 py-4 hover:bg-gray-100 dark:hover:bg-dark-60 rounded-lg ${
                router.pathname === navRoute.path
                  ? "text-primary font-semibold bg-gray-100 dark:bg-dark-70"
                  : ""
              }`}
            >
              {navRoute.name}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SideDrawer;
