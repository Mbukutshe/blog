const express = require("express");
const Post = require("../../model/post").Post;
const code = require("../../config/config").code;
const handleExecption = require("../../lib/helper/handleExecption")
  .handleExecption;

const router = express.Router();

//@route     GET routes/post
//@desc      Get post
//@access    Private
router.get("/", async (request, respone) => {});

//@route     POST routes/post
//@desc      Add post
//@access    Private
router.post("/add", async (request, response) => {
  //validate request body
  // const payload = request.body;
  const { userId } = request.body;
  try {
    const results = await Post.save(userId);
    // console.log(results);
    // do something
    //send reponse
    response.status(code.OK).send("Post added to Database");
  } catch (error) {
    //handle execptions(should I create a helper function)
    const errorMessage = handleExecption(error);
    response
      .status(code.SERVER_ERROR)
      .send(errorMessage)
      .end();
  }
});

//@route     PUT routes/post
//@desc      Edit post
//@access    Private
router.put("/edit", (request, response) => {
  console.log("payload: " + request.body);

  //subject to change
  response
    .status(code.OK)
    .send("endpoint hit (edit)")
    .end();
});

//@route     POST routes/post
//@desc      Delete post
//@access    Private
router.delete("/delete", (request, response) => {
  console.log("payload: " + request.body);

  // subject to change
  response
    .status(code.OK)
    .send("endpoint hit (delete)")
    .end();
});

module.exports = router;
