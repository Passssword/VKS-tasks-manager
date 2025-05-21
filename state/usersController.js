const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('users.db')


db.serialize( () => {
    const usersDatabase = `
        CREATE TABLE IF NOT EXISTS users(
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          nickname TEXT NOT NULL,
          password TEXT NOT NULL,
          rolle TEXT NOT NULL,
          firstName TEXT,
          patronymic TEXT,
          lastName TEXT
          )
    `
    db.run(usersDatabase)
} )

class usersController {
    static GetAllUsers () { return new Promise( (resolve, reject)=>{
        db.all('SELECT * FROM users', (error, result)=>{
            if (error) {
                reject(error);
              } else {
                resolve(result);
              }
            })
        } )
    }

    static CreateNewUser (userData) {
        console.log(userData)
        const UserArray = [
            userData.login,
            userData.password,
            userData.rolle,
            userData.Name,
            userData.Patronymic,
            userData.LastName
        ]
        console.log(UserArray)

        const sql = `INSERT INTO users(nickname, password, rolle, firstName, patronymic, lastName) VALUES( ?, ?, ?, ?, ?, ? )`

        return new Promise( (resolve, reject) => {
            db.run(sql, UserArray, (err) => {
            if (err) {
                console.log(err)
                reject(err)
            }
            else {
                console.log("Создан новый пользователь")
                resolve()}
            })  
        })

    }

    static DeleteUser (id) {
        const sql = `DELETE FROM users WHERE id=${id}`
        return new Promise( (resolve, reject) => {
            db.run(sql, (err) => {
                if (err) {
                    console.log(err)
                    reject(err)
                }
                else {
                    console.log("Пользователь удален")
                    resolve()}
                })  
        })  
      }

      static UpdateUser (userData) {
        const sql = `
                    UPDATE users SET 
                    nickname=?,
                    password=?,
                    rolle=?,
                    firstName=?,
                    patronymic=?,
                    lastName=?
                    WHERE id = ?;`
        const userDataArray = [
            userData.nickname,
            userData.password,
            userData.rolle,
            userData.firstName,
            userData.patronymic,
            userData.lastName,
            userData.id]

        return new Promise( (resolve, reject)=>{
            db.run(sql, userDataArray, (error) => {
                if (error) {reject(error) }
                else {
                    console.log("updateUser ------>")
                    return resolve("OK")
                }
              }) })
    }
}


module.exports = db;
module.exports.usersController = usersController;