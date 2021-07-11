export const toggleDarkMode = (isDarkMode: boolean) => {
  if (isDarkMode) {
    document.documentElement.classList.add("dark");
    document.documentElement.classList.remove("light");
    localStorage.setItem("theme", "dark");
  } else {
    document.documentElement.classList.add("light");
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
  }
};
