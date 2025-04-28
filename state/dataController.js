const fs = require('fs');
const path = require('path');

module.exports.getConfig = function () {

    return fs.readFileSync('./state/config.json','utf8', function (err, data) {
        if (err) throw err;
        const obj = JSON.parse(data);
        return obj
    })

}

module.exports.getUsers = function () {

    return fs.readFileSync('./state/users.json','utf8', function (err, data) {
        if (err) throw err;
        const obj = JSON.parse(data);
        return obj
    })
    
}