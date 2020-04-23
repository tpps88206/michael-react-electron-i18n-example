const { app, BrowserWindow } = require('electron');
const isDev = require('electron-is-dev');
const path = require('path');
const { default: installExtension, REACT_DEVELOPER_TOOLS } = require('electron-devtools-installer');

const LanguageController = require('./controller/language-controller');
const { setupMenu } = require('./menu');
const i18n = require('./i18n');

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    show: false,
    webPreferences: {
      nodeIntegration: true,
      nodeIntegrationInWorker: true,
      preload: __dirname + '/preload.js'
    }
  });
  mainWindow.maximize();
  mainWindow.show();
  mainWindow.webContents.openDevTools();

  LanguageController.setup(mainWindow);

  mainWindow.loadURL(
    isDev
      ? 'http://localhost:3000'
      : `file://${path.join(__dirname, '../build/index.html')}`
  );

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
};

function installDevTool() {
  installExtension(REACT_DEVELOPER_TOOLS)
    .then((name) => console.log(`Added Extension:  ${name}`))
    .catch((err) => console.log('An error occurred: ', err));
};

app.on('ready', () => {
  createWindow();
  installDevTool();
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});

i18n.on('loaded', (loaded) => {
  i18n.changeLanguage('en-US', (err, t) => {
    if (err) {
      console.error(err);
    }
  });
  i18n.off('loaded');
});

i18n.on('languageChanged', (lng) => {
  setupMenu(i18n);
});

i18n.on('failedLoading', (lng, ns, msg) => {
  console.error(msg);
});
