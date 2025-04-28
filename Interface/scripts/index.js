const workspace = document.querySelector('.workspace')
const btnVKSList = document.getElementById('VKSList');
const btnVKSArchve = document.getElementById('VKSArchve');
const btnVKSReports = document.getElementById('VKSReports');
const btnSettings = document.getElementById('Settings');
const SettingsField = document.getElementById('settings_field');

const nodeField = document.getElementById('node_v');
const chromeField = document.getElementById('chrome_v');
const electronField = document.getElementById('electron_v');

// btnVKSArchve.onclick = function () { return workspace.innerHTML = pages.archivePage() }
// btnVKSReports.onclick = function () { return workspace.innerHTML = pages.reportsPage() }

SettingsField.innerHTML = data.dataConfig()

nodeField.innerHTML = versions.node()
chromeField.innerHTML = versions.chrome()
electronField.innerHTML = versions.electron()

console.log( data.dataConfig() )