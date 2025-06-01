// const getUsers = require('./dataController.js').getUsers;

const usersController = require('./usersController.js').usersController;

//Проверка введенных пользовательских данных

const checkUserData = async (authObject) => {
    
    
    return usersController.GetAllUsers().then( response => {
        let result = response.find( elem => elem.nickname == authObject.login && elem.password == authObject.password )
        return result
    });

    /* Старая логика проверки пользовательяких данных */

    // const dataUsers = getUsers();
    // const json = JSON.parse(dataUsers); // String to object

    // let result = json.Users.find( elem => elem.Nickname == authObject.login && elem.password == authObject.password )
    // console.log(result)

    // return result
}

module.exports.checkUserData = checkUserData;