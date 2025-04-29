const fs = require('fs')
const getConfig = require('./state/dataController.js').getConfig;
const getUsers = require('./state/dataController.js').getUsers;
const StateController = require('./state/state-manager.js').StateController;
const checkUserData = require('./state/authController.js').checkUserData;
const { contextBridge } = require('electron')

const stateManager = new StateController();

contextBridge.exposeInMainWorld('versions', {
  node: () => process.versions.node,
  chrome: () => process.versions.chrome,
  electron: () => process.versions.electron
  // we can also expose variables, not just functions
})

/* ------------------ */


const dataConfig = getConfig();
const dataUsers = getUsers();

let archivePageFile = fs.readFileSync( './interface/archive-vks.html', { encoding: 'utf-8', flag: 'r'} )
let reportsPageFile = fs.readFileSync( './interface/reports.html', { encoding: 'utf-8', flag: 'r'} )


contextBridge.exposeInMainWorld('pages', {
  sidebarPage: () => sidebarPageFile,
  archivePage: () => archivePageFile,
  reportsPage: () => reportsPageFile
  
  // we can also expose variables, not just functions
})
contextBridge.exposeInMainWorld('data', {
  dataConfig: () => dataConfig,
  dataUsers: () => dataUsers,
  checkUser: (authObj) => checkUserData(authObj)
  // we can also expose variables, not just functions
})


contextBridge.exposeInMainWorld('stateManager', {
  authStatus: () => stateManager.authStatus()
} )
console.log(stateManager.authStatus())