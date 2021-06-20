const routes = {
  HOME: "/",
  PROJECTS: "/#work",
  RESUME: "/resume",
  ABOUT: "/about",
};

export const navRoutes = [
  { name: "Home", path: routes.HOME },
  { name: "About", path: routes.ABOUT },
  { name: "Work", path: routes.PROJECTS },
  { name: "Resume", path: routes.RESUME },
];

export default routes;
