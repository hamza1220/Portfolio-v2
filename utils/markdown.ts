import md from "markdown-it";

export const renderMd = (markdown) => {
  const markdownItConfig = {
    html: true,
    xhtmlOut: true,
    linkify: true,
    typographer: true,
  };

  const mdi = new md(markdownItConfig);
  return mdi.render(markdown);
};
