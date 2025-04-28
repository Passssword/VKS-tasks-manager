const getUsers = require('./dataController.js').getUsers;

//Проверка введенных пользовательских данных

const checkUserData = (authObject) => {
    const dataUsers = getUsers();
    console.log(dataUsers)
    console.log(authObject)
    let result = dataUsers.Users.find( (elem) => elem.Nickname == authObject.login )
    console.log(result)
}

module.exports.checkUserData = checkUserData;