const sqlite = require('sqlite3');

function findComputerName(options,cb){
    if(options.database !== null && options.user !== null){
        cb({Error:'Options must contain database and user property.'});
    }
    let database = options.database;
    let user = options.user;
    let db = new sqlite.Database(database);

    db.all('SELECT DISTINCT computerName FROM test WHERE userName = '+user+' ORDER BY loginDate DESC LIMIT 5',
        function(err,rows){
            if(err) cb(err);
            if(rows){
                cb(null,rows);
            }
        });
}

module.exports = findComputerName;
