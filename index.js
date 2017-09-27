var sqlite = require("sqlite3");

function findComputerName(options,cb){
    if(options.database == null || options.user == null){
        cb({Error:"Options must contain database and user property."});
    }
    var database = options.database;
    var user = options.user;
    var db = new sqlite.Database(path);

    db.all("SELECT DISTINCT computerName FROM test WHERE userName = "+user+" ORDER BY date DESC LIMIT 5",
        function(err,rows){
            if(err) cb(err);
            if(rows){
                cb(null,rows);
            }
    })
}

module.exports = findComputerName;
