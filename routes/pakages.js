const express = require("express");
const Posts = require("../models/pakages");

const router = express.Router();

// save employee detais
router.post("/post/save", async (req, res) => {
  try {
    let newPost = new Posts(req.body);
    await newPost.save();
    return res.status(200).json({ success: "Post saved successfully" });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
});

// get posts
router.get("/posts", async (req, res) => {
  try {
    const posts = await Posts.find().exec();
    return res.status(200).json({ success: true, existingPosts: posts });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
});

// get a specific post by ID
router.get("/post/:id", async (req, res) => {
  try {
    const postId = req.params.id;
    const post = await Posts.findById(postId).exec();
    if (!post) {
      return res
        .status(404)
        .json({ success: false, message: "Post not found" });
    }
    return res.status(200).json({ success: true, post });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
});

// update post
router.put("/post/update/:id", async (req, res) => {
  try {
    await Posts.findByIdAndUpdate(req.params.id, { $set: req.body });
    return res.status(200).json({ success: "Post updated successfully" });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
});



module.exports = router;
