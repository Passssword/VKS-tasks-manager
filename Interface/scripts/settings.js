const SettingsField = document.getElementById('settings_field');

const nodeField = document.getElementById('node_v');
const chromeField = document.getElementById('chrome_v');
const electronField = document.getElementById('electron_v');
const btnGetStatus = document.getElementById('btnGetStatus');

SettingsField.innerHTML = data.dataConfig()

nodeField.innerHTML = versions.node()
chromeField.innerHTML = versions.chrome()
electronField.innerHTML = versions.electron()


btnGetStatus.onclick = function () {
    console.log( "Authefication Status: "+stateManager.authStatus() )
}