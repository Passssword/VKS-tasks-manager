const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('users.db')


db.serialize( () => {
    const sessions = `
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
    db.run(sessions)
} )

class usersController {
    static CreateNewUser (userData) {
        console.log(userData)
        const sql = `INSERT INTO users(nickname, password, rolle, firstName, patronymic, lastName) VALUES( ?, ?, ?, ?, ?, ? )`
    }



    static GenerateSessionKey () {
        return crypto.randomBytes(32).toString("hex")
    }
    static GetSessions () { return new Promise( (resolve, reject)=>{
        db.all('SELECT * FROM sessions', (error, result)=>{
            if (error) {
                reject(error);
              } else {
                resolve(result);
              }
            })
        } )
    }
    static GetKey (key) { return new Promise( (resolve, reject)=>{
        const sql = `SELECT * FROM sessions WHERE session_key=?`
        db.get(sql, [key], (error, result)=>{
            if (error) {
                reject(error);
              } else {
                resolve(result);
              } }
          )
        })
    }

    static SaveSession (sessionObj) {
        
        const sql = `INSERT INTO sessions(session_key, user_id, expiresDate) VALUES( ?, ?, ? )`
        return new Promise( (resolve, reject) => {
            db.run(sql, sessionObj, (err) => {
            if (err) {
                console.log(err)
                reject(err)
            }
            else {
                console.log("Совпадений не найденно, создана новая сессия")
                resolve(sessionObj)}
            })  
        })
    }
    static updateSession (sessionKey, userID) {
        return new Promise( (resolve, reject)=>{
            const sql = `UPDATE sessions SET user_id = ? WHERE session_key = ?;`
            db.run(sql, [userID, sessionKey], (error) => {
                if (error) { reject(error) } else {
                    console.log("updateSession ------>")
                    console.log("sessionKey: "+sessionKey)
                    console.log("userID: "+userID)
                    return resolve("OK")
                }
              }) })
    }
}


module.exports = db;
module.exports.usersController = usersController;