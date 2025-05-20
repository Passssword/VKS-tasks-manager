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

// let dataUsers = data.dataUsers()
// let objectUsers = JSON.parse(dataUsers)

const mapUsersFunc = (users) => {
        return users.map(elem => `
                <tr>
                        <td>${elem.lastName} ${elem.firstName} ${elem.patronymic}</td>
                        <td>${elem.nickname}</td>
                        <td>${elem.password}</td>
                        <td>${elem.rolle}</td>
                        <td>
                                <button class="btn edit">Редактировать</button>
                                <button class="btn delete">Удалить</button>
                        </td>
                </tr>`)
}
const createUsersString = function (usersArray) {
        let users = "";
        usersArray.forEach(element => {
                users +=  element
        });
        return users;
}

usersController.GetAllUsers().then( usersArr => {

        let usersTableCaptions = `<tr>
                                        <th>Ф.И.О.</th>
                                        <th>Nickname</th>
                                        <th>Password</th>
                                        <th>Rolle</th>
                                        <th>Действие с объектом</th>
                                </tr>`
        let usersString = createUsersString(mapUsersFunc(usersArr))
        
        let usersTable = usersTableCaptions + usersString;

        //Render Users table
        manageUsers.innerHTML = usersTable;
        addEventsButtons(usersArr)
})


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
function addEventsButtons (users) {
        const buttonEdit = document.querySelectorAll('.edit')
        
        let usersCount = 0;
        buttonEdit.forEach( element => {
                const id_user = `ID User: ${users[usersCount].id}`
                usersCount++
                element.addEventListener('click', (elem) => {console.log(id_user)})
        })
}