const manageUsers = document.getElementById('manegeUsers');
const btnCreateUserCreate = document.getElementById('btn_CreateUser_create');
const btnCreateUserClose = document.getElementById('btn_CreateUser_close');
const btnCreateUserOpen = document.getElementById('btn_CreateUser_open');
const modalCreateUser = document.getElementById('modalCreateUser');

const inputCreateUserLogin = document.getElementById('CreateUser_Login');
const inputCreateUserPassword = document.getElementById('CreateUser_Password');
const inputCreateUserRolle = document.getElementById('CreateUser_Rolle');
const inputCreateUserName = document.getElementById('CreateUser_Name');
const inputCreateUserPatronymic = document.getElementById('CreateUser_Patronymic');
const inputCreateUserLastName = document.getElementById('CreateUser_LastName');

let dataUsers = data.dataUsers()
let objectUsers = JSON.parse(dataUsers)

async function GetUsers () {
        let usersFromDatabase = await usersController.GetAllUsers()
        return usersFromDatabase;
}
console.log( GetUsers() )

let mapUsers = objectUsers.Users.map( elem => `
        <tr>
                <td>${elem.LastName} ${elem.FirstName} ${elem.Patronymic}</td>
                <td>${elem.Nickname}</td>
                <td>${elem.password}</td>
                <td>${elem.rolle}</td>
        </tr>`)

const createUsersString = function (usersArray) {
        let users = "";
        usersArray.forEach(element => {
                users +=  element
        });
        return users;
}

let usersTableCaptions = `<tr><th>Ф.И.О.</th><th>Nickname</th><th>Password</th><th>Rolle</th></tr>`
let usersString = createUsersString(mapUsers)

let usersTable = usersTableCaptions + usersString;

manageUsers.innerHTML = usersTable;


// Create New User
btnCreateUserClose.onclick = function () {
        modalCreateUser.style.display = 'none';
}
btnCreateUserOpen.onclick = function () { modalCreateUser.style.display = 'flex'; }
btnCreateUserCreate.onclick = function () {
        //Create User
        let newUserObject = {
                login: inputCreateUserLogin.value,
                password: inputCreateUserPassword.value,
                rolle: inputCreateUserRolle.value,
                Name: inputCreateUserName.value,
                Patronymic: inputCreateUserPatronymic.value,
                LastName: inputCreateUserLastName.value
        }
        usersController.createNewUser(newUserObject)
}