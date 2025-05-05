const manageUsers = document.getElementById('manegeUsers');

let dataUsers = data.dataUsers()
console.log(dataUsers)

let usersTableCaptions = `<tr><th>Ф.И.О.</th><th>Nickname</th><th>Password</th><th>Rolle</th></tr>`
let usersTableItems = `
        <tr><td>Stephen C. Cox</td><td>$300</td><td>$50</td><td>Bob</td></tr>
        <tr><td>Josephin Tan</td><td>$150</td><td>-</td><td>Annie</td></tr>
        <tr><td>Joyce Ming</td><td>$200</td><td>$35</td><td>Andy</td></tr>
        <tr><td>James A. Pentel</td><td>$175</td><td>$25</td><td>Annie</td></tr>
        `
let usersTable = usersTableCaptions + usersTableItems;

manageUsers.innerHTML = usersTable;