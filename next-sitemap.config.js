/** @type {import('next-sitemap').IConfig} */

module.exports = {
    siteUrl: process.env.SITE_URL || 'https://razakhawaja.me',
    generateRobotsTxt: true,
    generateIndexSitemap: false,
}