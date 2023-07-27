/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.SITE_URL || 'http://your-domain.com',
    generateRobotsTxt: true,
    generateIndexSitemap: false,
}