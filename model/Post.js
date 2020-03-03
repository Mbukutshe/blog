const sql = require("mssql");
const dbConfig = require("../config/config").dbConfig;

//should inherite core
class Post {
  //add private properties
  //add constructor
  //getters and setters
  static findPost = (postID) => {};

  static findAllPosts = () => {};

  static save = (userId) => {
    // console.log(payload);
    //validate post
    //destruct post
    // const { } = post;
    return new Promise((resolve, reject) => {
      //connect to sql database
      sql.connect(dbConfig, function(err) {
        //intatiate a CRUD class to be used to query the database
        //try using prepared statement
        // const preparedState = new sql.PreparedStatement()
        //execute procedure statement
        if (err) reject(err);
        const request = new sql.Request();
        // subject to change
        // const sqlStatementPost = ``;
        //run procedure query
        request.query(sqlStatementPost, function(err, results) {
          if (err) reject(err);
          const t = results;
          console.log(t);
          resolve(results);
        });
      });
    });
  };

  static editPost = (paanddeyload) => {
    //validate payload
  };

  static deletePost = (postID) => {
    //validate payload
  };
}

module.exports = {
  Post
};
