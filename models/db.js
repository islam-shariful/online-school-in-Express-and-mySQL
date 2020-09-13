var mysql = require("mysql");

var config = {
  host: "sql12.freemysqlhosting.net",
  user: "sql12365350",
  password: "aBemYqzEd9",
  database: "sql12365350",
  multipleStatements: true,
};

function getConnection(callback) {
  var con = mysql.createConnection(config);
  con.connect(function (err) {
    if (err) {
      console.log("connection error: " + err.stack);
    } else {
      console.log("connection id: " + con.threadId);
    }
  });

  callback(con);
}

module.exports = {
  //getResult
  getResult: function (sql, callback) {
    console.log(sql);
    //getConnection
    getConnection(function (connection) {
      //connection.query
      connection.query(sql, function (error, results) {
        if (error) {
          callback([]);
        } else {
          callback(results);
        }
      });
      //connection end
      connection.end(function (err) {
        console.log("Connection End...");
      });
    });
  },

  getResults: function (sql, params, callback) {
    getConnection(function (connection) {
      if (params == "") {
        connection.query(sql, function (err, result) {
          if (err) {
            callback([]);
          } else {
            callback(result);
          }
        });
      } else {
        connection.query(sql, params, function (err, result) {
          if (err) {
            callback([]);
          } else {
            callback(result);
            console.log("result db");
          }
        });
      }

      connection.end(function (err) {
        console.log("end connection");
      });
    });
  },
  execute: function (sql, params, callback) {
    if (params == "") {
      getConnection(function (connection) {
        connection.query(sql, function (err, status) {
          if (err) {
            callback(status);
          } else {
            callback(status);
          }
        });

        connection.end(function (err) {
          console.log("end connection");
        });
      });
    } else {
      getConnection(function (connection) {
        connection.query(sql, params, function (err, status) {
          if (err) {
            callback(status);
          } else {
            callback(status);
          }
        });

        connection.end(function (err) {
          console.log("end connection");
        });
      });
    }
  },
};
