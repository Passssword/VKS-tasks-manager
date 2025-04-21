const workspace = document.querySelector('.workspace')
const btnVKSList = document.getElementById('VKSList');
const btnVKSArchve = document.getElementById('VKSArchve');
const btnVKSReports = document.getElementById('VKSReports');
const btnSettings = document.getElementById('Settings');
const SettingsField = document.getElementById('settings_field');

btnVKSArchve.onclick = function () { return workspace.innerHTML = pages.archivePage() }
btnVKSReports.onclick = function () { return workspace.innerHTML = pages.reportsPage() }

SettingsField.innerHTML = data.dataConfig()

console.log( data.dataConfig() )