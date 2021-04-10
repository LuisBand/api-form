const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'luismael3026',
    database: 'mydb'
});

mysqlConnection.connect(function (err){
    if(err){
        console.log(err);
        return;
    } else{
        console.log('DB was connected succsesfully');
    }
});

module.exports = mysqlConnection;
