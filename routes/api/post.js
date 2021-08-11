const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const auth = require("../../middleware/auth");
const { check, validationResult } = require("express-validator");

const Post = mongoose.model("Post");

// Add a Post
router.post(
  "/",
  [
    auth,
    check("title", "Title is required").not().isEmpty(),
    check("body", "Body is required").not().isEmpty(),
    check("image", "Add Image").not().isEmpty(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { title, body, image } = req.body;
    try {
      const post = new Post({ title, body, image, postedBy: req.user });
      await post.save();
      res.json(post);
    } catch (error) {
      console.error(error);
      res.status(400).send(error.message);
    }
  }
);

// Get all Posts
router.get("/", auth, async (req, res) => {
  try {
    const posts = await Post.find().populate("postedBy", "_id name");
    res.json(posts);
  } catch (error) {
    console.error(error);
    res.status(400).send(error.message);
  }
});

//Get My posts
router.get("/myposts", auth, async (req, res) => {
  try {
    const posts = await Post.find({ postedBy: req.user._id }).populate(
      "postedBy",
      "_id name"
    );
    res.json(posts);
  } catch (error) {
    console.error(error);
    res.status(400).send(error.message);
  }
});

module.exports = router;
