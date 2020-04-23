const LanguageController = require('./language-controller');

class ActionController {
  constructor() {
    this.actionHistory = [];
  }
  mapAction(action, ...args) {
    switch (action) {
      case 'language.change':
        if (args && args.length > 0) {
          LanguageController.changeLanguage(args[0]);
        } else {
          console.error('The argument of language changed is empty.');
        }
        break;
      default:
        return;
    }
    this.actionHistory.push({ action, args });
  };

}

module.exports = new ActionController();
