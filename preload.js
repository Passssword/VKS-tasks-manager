const fs = require('fs')
const { contextBridge } = require('electron')


contextBridge.exposeInMainWorld('versions', {
  node: () => process.versions.node,
  chrome: () => process.versions.chrome,
  electron: () => process.versions.electron
  // we can also expose variables, not just functions
})

/* ------------------ */

const sidebarPath = './interface/sidebar.html'
const workspacePath = './interface/workspace.html'

let sidebarPageFile = fs.readFileSync( sidebarPath, { encoding: 'utf-8', flag: 'r'} )
let workspacePageFile = fs.readFileSync( workspacePath, { encoding: 'utf-8', flag: 'r'} )

contextBridge.exposeInMainWorld('pages', {
  sidebarPage: () => sidebarPageFile,
  workspacePage: () => workspacePageFile,
  // we can also expose variables, not just functions
})

// Test ()