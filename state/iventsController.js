const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('ivents.db')


db.serialize( () => {
    const usersDatabase = `
        CREATE TABLE IF NOT EXISTS ivents(
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          iventDate TEXT NOT NULL,
          iventObject TEXT,
          iventType TEXT,
          iventJudge TEXT,
          iventHall TEXT,
          iventDescription TEXT,
          iventWorker TEXT,
          iventRegistrationDate TEXT
          )
    `
    db.run(usersDatabase)
} )


class iventsController {
    static GetAllIvents () { return new Promise( (resolve, reject)=>{
        db.all('SELECT * FROM ivents', (error, result)=>{
            if (error) {
                reject(error);
              } else {
                result.sort(sortArray)
                resolve(result);
              }
            })
        } )
    }

    static CreateNewIvent (iventData) {

        const sql = `INSERT INTO ivents(
        iventDate,
        iventObject,
        iventType,
        iventJudge,
        iventHall,
        iventDescription,
        iventWorker,
        iventRegistrationDate) 
        VALUES( ?, ?, ?, ?, ?, ?, ?, ? )`

        let iventArray = [
            iventData.iventDate,
            iventData.iventObject,
            iventData.iventType,
            iventData.iventJudge,
            iventData.iventHall,
            iventData.iventDescription,
            iventData.iventWorker,
            iventData.registrationDate,
        ]

        return new Promise( (resolve, reject)=>{
            db.run(sql, iventArray, (err) => {
                if (err) {
                    console.log(err)
                    reject(err)
                }
                else {
                    resolve(true)}
                })
        })
    }
}


module.exports = db;
module.exports.iventsController = iventsController;

function sortArray (a, b) {
    if (a.iventDate > b.iventDate) return 1;
    if (a.iventDate == b.iventDate) return 0;
    if (a.iventDate < b.iventDate) return -1;
}

function formatDate (arr) {
    return arr;
}