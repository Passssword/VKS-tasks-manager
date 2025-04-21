const fs = require('fs')
const getData = require('./state/dataController.js').getData;
const { contextBridge } = require('electron')


contextBridge.exposeInMainWorld('versions', {
  node: () => process.versions.node,
  chrome: () => process.versions.chrome,
  electron: () => process.versions.electron
  // we can also expose variables, not just functions
})

/* ------------------ */


const dataConfig = getData();

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
  // we can also expose variables, not just functions
})