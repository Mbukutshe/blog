const exception = require("../../config/config").exception;

function handleExecption(error) {
  //   console.log(error);
  let errorMessage = "SERVER ERROR: ";

  if (error.code === exception.SQL_STATEMENT_ERROR) {
    //display the error on the console
    console.log("Sql statement: " + error.message);
    //message to be sent to client(must find proper response)
    errorMessage += "GENERIC";
  } else if (error.code === exception.DB_CONNECTION_ERROR) {
    console.log("Database connection error: " + error.message);
    errorMessage += "GENERIC"; //subject to change
  } else if (error.code === exception.SQL_SERVER_ERROR) {
    console.log("Sql server error: " + error.message);
    errorMessage += "GENERIC"; //subject to change
  } else if (error.code === exception.SQL_AUTH_ERROR) {
    console.log("API Authentication error: ", error.message);
    errorMessage += "GENERIC"; //subject to change
  } else {
    console.log("Unknown Execption " + error.message);
    errorMessage += "Unknown Execption"; // subject to change
  }
  return errorMessage;
}

module.exports = {
  handleExecption
};
