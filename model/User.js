const sql = require("mssql");
const dbConfig = require("../config/config").dbConfig;

class User {
  //add private properties
  //show I add a constructor?
  //getters and setters
  static authenticateUser = (credentials) => {
    const { username, password, email } = payload;
    //validatioin
    return new Promise((resolve, reject) => {});
  };
  static save = (user) => {
    // console.log(payload);
    console.log("save user method called");
    //destruct user object
    const { username, email, password } = user;
    console.log(email);
    return new Promise((resolve, reject) => {
      //connect to sql database
      sql.connect(dbConfig, function(err) {
        //intatiate a CRUD class to be used to query the database
        //have to try using prepared statement
        // const preparedState = new sql.PreparedStatement()
        if (err) reject(err);
        console.log("Debug: connection estabished");
        const request = new sql.Request();
        // subject to change...add email
        const sqlStatement = `
        INSERT INTO Users (Username, Password, UserEmail)
        VALUES ('${username}', '${password}', '${email}')
        `;
        request.query(sqlStatement, function(err, recordset) {
          if (err) reject(err);
          console.log("Debug: query executed");
          // console.log(recordset);
          resolve(recordset);
        });
      });
    });
  };

  static editUser = (payload) => {
    //
  };

  static deleteUSer = (postID) => {
    //
  };
}

module.exports = {
  User
};
