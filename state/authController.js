const getUsers = require('./dataController.js').getUsers;

//Проверка введенных пользовательских данных

const checkUserData = (authObject) => {
    const dataUsers = getUsers();
    console.log(dataUsers)
    // dataUsers.Users.find( (elem) => {} )
}

module.exports.checkUserData = checkUserData;