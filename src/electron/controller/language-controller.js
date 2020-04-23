const i18n = require('../i18n');

class LanguageController {
  constructor() {
    this.window = null;
  }

  setup(window) {
    this.window = window;
  };

  changeLanguage(ipcObject) {
    // change language at react side
    this.window.webContents.send('language-changed', ipcObject);
    // change language at electron side
    i18n.changeLanguage(ipcObject.language, (error, t) => {
      if (error) {
        console.error(error);
      }
    });
  }
}

module.exports = new LanguageController();
