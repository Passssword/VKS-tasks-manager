const getUsers = require('./dataController.js').getUsers;

//Проверка введенных пользовательских данных

const checkUserData = (authObject) => {
    const dataUsers = getUsers();
    const json = JSON.parse(dataUsers); // String to object
    // console.log(json)
    // console.log(authObject)
    let result = json.Users.find( elem => elem.Nickname == authObject.login && elem.password == authObject.password )
    // console.log(result)
    if (result) {
        console.log(result)
        window.location.replace("settings.html");
    }
    else { console.log("Неверные пользовательские данные") }
}

module.exports.checkUserData = checkUserData;