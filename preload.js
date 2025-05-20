const fs = require('fs')
const getConfig = require('./state/dataController.js').getConfig;
const getUsers = require('./state/dataController.js').getUsers;

// const initialState = require('./state/state-manager.js').initialState;

const usersController = require('./state/usersController.js').usersController;

const getAuthStatus = require('./state/state-manager.js').getAuthStatus;
const setAuthStatus = require('./state/state-manager.js').setAuthStatus;
const getEditPage = require('./state/state-manager.js').getEditPage;
const setEditPage = require('./state/state-manager.js').setEditPage;

const checkUserData = require('./state/authController.js').checkUserData;
const { contextBridge } = require('electron')

// const stateManager = new StateController(initialState);

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
  authStatus: () => getAuthStatus(),
  setAuthStatus: (status) => setAuthStatus(status),
  getEditPageData: () => getEditPage(),
  setUserEditPageData: (userEditPageData) => {setEditPage(userEditPageData)}
} )

contextBridge.exposeInMainWorld('usersController', {
  createNewUser: (user) => usersController.CreateNewUser(user),
  GetAllUsers: async () => await usersController.GetAllUsers(),
  DeleteUser: (id) => usersController.DeleteUser(id)
} )

// console.log(setAuthStatus(true))


// module.exports.stateManager = stateManager;