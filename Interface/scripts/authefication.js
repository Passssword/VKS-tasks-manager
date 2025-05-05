// -----------------------------
// -------Вход-в-систему--------
// -----------------------------
const fieldLogin = document.getElementById('login');
const fieldPassword = document.getElementById('password');
const btnInterSystem = document.getElementById('btnInterSystem');

btnInterSystem.onclick = function () {
    let authData = {login: fieldLogin.value, password: fieldPassword.value}
    // console.log(authData)
    let result = data.checkUser(authData)
    if (result) {
        stateManager.setAuthStatus(result);
        window.location.replace("settings.html");
    }
    else { console.log("Неверные пользовательские данные") }
}