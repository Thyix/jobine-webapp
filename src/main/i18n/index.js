// @flow
import 'moment/locale/fr';
import i18n from 'i18next';
import moment from 'moment';
import LanguageDetector from 'i18next-browser-languagedetector';
import translations from './translations';

i18n
  .use(LanguageDetector)
  .init({
    fallbackLng: 'fr',
    debug: false,

    resources: translations,

    defaultNS: 'general',
    fallbackNS: 'common',

    interpolation: {
      escapeValue: false, // not needed for react
      format: formatter,
    },

    react: {
      defaultTransParent: 'span',
    },

    detection: {
      order: ['navigator', 'htmlTag'],

      excludeCacheFor: ['cimode'],
    },

    simplifyPluralSuffix: true,
  });

export default i18n;

function formatter(value, format, lng) {
  if (format === 'uppercase') {
    return value.toUpperCase();
  }
  if (moment.isMoment(value)) {
    return value.locale(lng).format(format);
  }
  if (moment.isDuration(value)) {
    return value.format(format, { userLocale: lng });
  }
  return value;
}