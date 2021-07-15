import md from 'markdown-it';

export const renderMd = (markdown) => {
    const mdi = new md()
    return mdi.render(markdown)
}