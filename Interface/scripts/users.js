const manageUsers = document.getElementById('manegeUsers');

let dataUsers = data.dataUsers()
let objectUsers = JSON.parse(dataUsers)
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