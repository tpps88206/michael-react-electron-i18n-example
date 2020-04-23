import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import backend from 'i18next-xhr-backend';
import moment from 'moment';

i18n
  .use(backend)
  .use(initReactI18next)
  .init({
    lng: 'en-US',
    defaultNS: 'common',
    fallbackLng: 'en-US',
    load: 'currentOnly',
    debug: false,
    whitelist: [
      'en-US',
      'zh-TW',
      'zh-CN',
    ],
    interpolation: {
      escapeValue: false,
      format: (value, format) => {
        if (value instanceof moment) { return value.format(format); }
        return value;
      },
    },
    backend: {
      loadPath: '/locales/react/{{lng}}/{{ns}}.json',
    },
    react: {
      useSuspense: false,
    },
    initImmediate: false,
  });

export default i18n;
