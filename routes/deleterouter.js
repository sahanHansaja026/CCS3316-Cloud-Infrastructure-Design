const express = require("express");
const router = express.Router();
const Posts = require("../models/pakages"); // Assuming this is your Post model

// delete question
router.delete('/question/delete/:id', async (req, res) => {
    try {
        const deletedPost = await Posts.findByIdAndRemove(req.params.id);
        if (!deletedPost) {
            return res.status(404).json({ message: "Post not found" });
        }
        return res.json({ message: "Post deleted successfully", deletedPost });
    } catch (error) {
        return res.status(400).json({ message: "Error deleting post", error: error.message });
    }
});
module.exports = router;
