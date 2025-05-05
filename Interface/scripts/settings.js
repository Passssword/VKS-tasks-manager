const SettingsField = document.getElementById('settings_field');

const nodeField = document.getElementById('node_v');
const chromeField = document.getElementById('chrome_v');
const electronField = document.getElementById('electron_v');
const btnGetStatus = document.getElementById('btnGetStatus');
const btnSetStatus = document.getElementById('btnSetStatus');
const btnSetWindowData = document.getElementById('btnSetWindowData');

SettingsField.innerHTML = data.dataConfig()

nodeField.innerHTML = versions.node()
chromeField.innerHTML = versions.chrome()
electronField.innerHTML = versions.electron()

const userData = {Nickname: "Admin",rolle: "Admin"}

btnGetStatus.onclick = function () {
    let result = stateManager.authStatus()
    // result = JSON.parse(result)
    console.log( "Authefication Status: "+result.isAuth )
    console.log( "Nickname: "+result.userObject.Nickname )
    console.log( "rolle: "+result.userObject.rolle )
    console.log( "---------------------------------------")
    
}
btnSetStatus.onclick = function () {
    stateManager.setAuthStatus(userData)
    // console.log( "Authefication Status: "+stateManager.authStatus() )
}

btnSetWindowData.onclick = function () {
    // При перезагрузке окон не сохраняется
    window.userData = userData
    document.userData = userData

    // LocalStorage
    // setItem(key, value) – сохранить пару ключ/значение.
    // getItem(key) – получить данные по ключу key.
    // removeItem(key) – удалить данные с ключом key.
    // clear() – удалить всё.
    // key(index) – получить ключ на заданной позиции.
    // length – количество элементов в хранилище.

    localStorage.User = JSON.stringify(userData) // localStorage хранит только строки
}