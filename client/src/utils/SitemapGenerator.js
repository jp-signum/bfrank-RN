require('babel-register')({
    presets: ['es2015', 'react']
});

const router = require('./SitemapRoutes').default;
const Sitemap = require('react-router-sitemap').default;

const axios = require('axios')
const getAxios = axios.create();

generateSitemap = async () => {
    try {
        let res = await getAxios.get('https://www.ravenailz.com/api/store/')
        let idMap = [];
        let nails = res.data

        for (var i = 0; i < nails.length; i++) {
            idMap.push({ id: nails[i]._id });
        }

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

generateSitemap().then(() => { console.info('Sitemap Generated')},
    err => {
        console.info('Error while generating sitemap');
        console.info(err);
    }
).finally(
    () => process.exit()
);



