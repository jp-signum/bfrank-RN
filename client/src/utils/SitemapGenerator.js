
require("babel-register")({
    presets: ["es2015", "react"]
  });

const router = require('./SitemapRoutes').default;
const Sitemap = require('react-router-sitemap').default;

(
    new Sitemap(router)
        .build('https://www.ravenailz.com')
        .save('./client/public/sitemap.xml')
);

