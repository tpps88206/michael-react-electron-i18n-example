const { Menu, app } = require('electron');
const ActionController = require('./controller/action-controller');

const isMac = process.platform === 'darwin';

module.exports = {
  setupMenu: (i18n) => {
    const menuTemplate = [
      ...(isMac ? [{
        label: app.name,
        submenu: [
          { role: 'about' },
          { role: 'quit' }
        ]
      }] : []),
      {
        label: i18n.t('File'),
        submenu: [
          {
            label: i18n.t('Open'),
          },
        ]
      },
      {
        label: i18n.t('Edit'),
        submenu: [
          { type: 'separator' },
        ]
      },
      {
        label: i18n.t('Insert'),
        submenu: [
          { type: 'separator' },
        ]
      },
      {
        label: i18n.t('Preview'),
        submenu: [
          { type: 'separator' },
        ]
      },
      {
        label: i18n.t('Help'),
        submenu: [
          {
            label: i18n.t('Language'),
            submenu: [
              {
                label: '繁體中文',
                click() {
                  ActionController.mapAction('language.change', { language: 'zh-TW' });
                }
              },
              {
                label: '简体中文',
                click() {
                  ActionController.mapAction('language.change', { language: 'zh-CN' });
                }
              },
              {
                label: 'English',
                click() {
                  ActionController.mapAction('language.change', { language: 'en-US' });
                }
              }
            ]
          },
          { type: 'separator' },
        ]
      }
    ];
    const menu = Menu.buildFromTemplate(menuTemplate);
    Menu.setApplicationMenu(menu);
  }
};
