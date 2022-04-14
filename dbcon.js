var mysql = require('mysql');
var pool = mysql.createPool({
  connectionLimit : 10,
  host            : 'classmysql.engr.oregonstate.edu', 
  user            : 'cs340_songx2',
  password        : '4384',
  database        : 'cs340_songx2'
});

module.exports.pool = pool;
