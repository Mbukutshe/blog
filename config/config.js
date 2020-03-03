//change this file to settings
//change the name to mssqlConfig
const dbConfig = {
  user: "khanyisa",
  password: "123456789",
  server: "localhost",
  database: "Chat",
  options: {
    encrypt: true,
    enableArithAbort: true
  }
};

//to be moved to different file
const exception = {
  SQL_STATEMENT_ERROR: "EREQUEST",
  DB_CONNECTION_ERROR: "ECONNCLOSED",
  SQL_SERVER_ERROR: "ESOKECT",
  SQL_AUTH_ERROR: "ELOGIN"
};

//to be moved to different file
const code = {
  OK: 200,
  BAD_REQUEST: 400,
  SERVER_ERROR: 500
};

module.exports = {
  dbConfig,
  exception,
  code
};
