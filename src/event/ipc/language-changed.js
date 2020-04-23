import i18n from '../../i18n';

export const eventLanguageChanged = () => (event, ipcObject) => {
  i18n.changeLanguage(ipcObject.language);
};
