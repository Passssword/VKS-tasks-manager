// -----------------------------
// -------Вход-в-систему--------
// -----------------------------
const fieldLogin = document.getElementById('login');
const fieldPassword = document.getElementById('password');
const btnInterSystem = document.getElementById('btnInterSystem');

btnInterSystem.onclick = async function () {
    let authData = {login: fieldLogin.value, password: fieldPassword.value}
    
    let result = await data.checkUser(authData)
    if (await result) {
        console.log(result)
        stateManager.setAuthStatus(result);
        window.location.replace("settings.html");
    }
    else {
        // если result = undefained
        console.log("Неверные пользовательские данные")
    }
}