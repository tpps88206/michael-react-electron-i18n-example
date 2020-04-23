import { eventLanguageChanged } from './ipc/language-changed';

const electron = window.require('electron');

export const startIPCEventListener = (store) => {
  electron.ipcRenderer && electron.ipcRenderer.on('language-changed', eventLanguageChanged());
};
