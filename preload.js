const fs = require('fs')
const getConfig = require('./state/dataController.js').getConfig;
const getUsers = require('./state/dataController.js').getUsers;

// const initialState = require('./state/state-manager.js').initialState;

const usersController = require('./state/usersController.js').usersController;
const iventsController = require('./state/iventsController.js').iventsController;

const getAuthStatus = require('./state/state-manager.js').getAuthStatus;
const setAuthStatus = require('./state/state-manager.js').setAuthStatus;
const getEditPage = require('./state/state-manager.js').getEditPage;
const setEditPage = require('./state/state-manager.js').setEditPage;
const getIventEditPage = require('./state/state-manager.js').getIventEditPage;
const setIventEditPage = require('./state/state-manager.js').setIventEditPage;

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


contextBridge.exposeInMainWorld('data', {
  dataConfig: () => dataConfig,
  dataUsers: () => dataUsers,
  checkUser: async (authObj) => await checkUserData(authObj)
  // we can also expose variables, not just functions
})


contextBridge.exposeInMainWorld('stateManager', {
  authStatus: () => getAuthStatus(),
  setAuthStatus: (status) => setAuthStatus(status),
  getEditPageData: () => getEditPage(),
  setUserEditPageData: (userEditPageData) => {setEditPage(userEditPageData)},
  getIventEditPage: () => getIventEditPage(),
  setIventEditPage: (iventData) => {setIventEditPage(iventData)}
} )

contextBridge.exposeInMainWorld('usersController', {
  createNewUser: (user) => usersController.CreateNewUser(user),
  GetAllUsers: async () => await usersController.GetAllUsers(),
  DeleteUser: (id) => usersController.DeleteUser(id),
  UpdateUser: (userData) => usersController.UpdateUser(userData)
} )

contextBridge.exposeInMainWorld('iventsController', {
  GetAllIvents: async () => await iventsController.GetAllIvents(),
  CreateNewIvent: (ivent) => iventsController.CreateNewIvent(ivent)
} )

// console.log(setAuthStatus(true))


// module.exports.stateManager = stateManager;