const manageUsers = document.getElementById('manegeUsers');
const btnCreateUserOpen = document.getElementById('btn_CreateUser_open');

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



function addEventsButtons (users) {
        const buttonEdit = document.querySelectorAll('.edit')
        const buttonDelete = document.querySelectorAll('.delete')

        let usersCount = 0;
        buttonEdit.forEach( element => {
                const user = users[usersCount]
                usersCount++
                element.addEventListener('click', (elem) => {
                        stateManager.setUserEditPageData(user)
                        window.location.replace("edit-user.html");
                })
        })

        let buttonDeleteUserCount = 0;
        buttonDelete.forEach( element => {
                const user = users[buttonDeleteUserCount]
                buttonDeleteUserCount++
                element.addEventListener('click', (elem) => {
                        usersController.DeleteUser(user.id)
                                .then( res => {
                                        window.location.replace("users.html");
                                })
                        
                })
        })
}


btnCreateUserOpen.onclick = function () {
        window.location.replace("create-user.html");
}