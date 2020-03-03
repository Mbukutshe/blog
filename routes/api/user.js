const express = require("express");
const bcrypt = require("bcrypt");
const { check, validationResult } = require("express-validator");
const handleExecption = require("../../lib/helper/handleExecption")
  .handleExecption;
const code = require("../../config/config").code;
const User = require("../../model/User").User;
// const exception = require("../config/dbConfig").exceptionErrors;

const router = express.Router();

//@route     GET routes/user
//@desc      Get user
//@access    Private
router.get("/", (request, response) => {
  console.log('test');
  //extract userId from request body
  //validate userID
  //initialize payload and send it
  response.send("hello");
});

//@route     POST routes/post
//@desc      Authenticate user
//@access    Public
router.post("/login", async (request, response) => {
  console.log("payload: " + request.body);
  //validate request body
  //initialize payload
  //authentication` (needed)
  //intialize payload and send it
  response
    .status(code.SERVER_ERROR)
    .send("SERVER ERROR: " + errorMessage)
    .end();
  //handle expection
});

//@route     POST routes/post
//@desc      Logout user
//@access    Private
router.post("/logout", (request, response) => {});

//@route     POST routes/user
//@desc      Register user
//@access    Public
router.post(
  "/register",
  [
    check("username", "username is required")
      .not()
      .isEmpty(),
    check("email", "Please include a valid email").isEmail(),
    check(
      "password",
      "Please enter a password with 6 or more characters"
    ).isLength({ min: 6 })
  ],
  async (request, response) => {
    //validate request body
    const error = validationResult(request);
    if (!error.isEmpty()) {
      return response
        .status(code.BAD_REQUEST)
        .json({ errors: error.array() })
        .end();
    }
    //destruct request body
    const { username, email } = request.body;
    //encrypt password
    const password = bcrypt.hashSync(request.body.password, 10);
    //send confirmation email (if there's still time)
    try {
      //this will return a promise
      const user = await User.save({ username, email, password });
      // console.log(user);
      //start session
      response.status(code.OK).send("User saved to Database");
    } catch (error) {
      //helper function to handle expections!
      const execptionMessage = handleExecption(error);
      response
        .status(code.SERVER_ERROR)
        .send(execptionMessage)
        .end();
    }
  }
);

//@route     PUT routes/user
//@desc      Edit user
//@access    Private
router.put("/edit", (request, response) => {
  console.log("payload: " + request.body);
  //validate request body
  //initialize payload
  //update user
  response
    .status(code.OK)
    .send("endpoint (delete)")
    .end();
  //handle expection
});

//@route     DELETE routes/user
//@desc      Delete user
//@access    Private
router.delete("/delete", (request, response) => {
  console.log("payload: " + request.body);
  //get userID from request body
  //delete user
  response
    .status(code.OK)
    .send("endpoint (delete)")
    .end();
  //handle expection
});

module.exports = router;
