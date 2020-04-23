const i18n = require('i18next');
const backend = require('i18next-node-fs-backend');

i18n
  .use(backend)
  .init({
    // String or array of namespaces to load
    // Please set all of namespaces which electron will use to translate
    // It will load them at the initialization stage
    ns: ['menu'],
    defaultNS: 'menu',
    fallbackLng: 'en-US',
    debug: false,
    whitelist: [
      'en-US',
      'zh-TW',
      'zh-CN',
    ],
    interpolation: {
      escapeValue: false
    },
    backend:{
      // path where resources get loaded from
      loadPath: './public/locales/electron/{{lng}}/{{ns}}.json',
      // jsonIndent to use when storing json files
      jsonIndent: 2,
    },
  });

module.exports = i18n;
