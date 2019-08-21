require("babel-register")({
    presets: ["es2015", "react"]
});

const router = require('./SitemapRoutes').default;
const Sitemap = require('react-router-sitemap').default;

const axios = require('axios')
const getAxios = axios.create();

generateSitemap = async () => {
    try {
        let res = await getAxios.get('https://www.ravenailz.com/api/store/')
        let idMap = [];

        for (var i = 0; i < res.length; i++) {
            idMap.push({ id: res[i]._id });
        }

        console.log(typeof res)
        console.log(res)
        const paramsConfig = {
            '/store/:id': idMap
        };

        return (
            new Sitemap(router)
                .applyParams(paramsConfig)
                .build('https://www.ravenailz.com')
                .save('./client/public/sitemap.xml')
        );
    } catch (err) {
        console.log(err);
    }
}

generateSitemap()

// generateSitemap().then(() => { console.info('Sitemap Generated')},
//     err => {
//         console.info('Error while generating sitemap');
//         console.info(err);
//     }
// ).finally(
//     () => process.exit()
// );



