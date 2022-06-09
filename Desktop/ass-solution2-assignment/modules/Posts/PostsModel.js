const mongoose = require("mongoose")
const PostSchema = require("./PostsSchema")
 
const PostModel = mongoose.model("Post" , PostSchema)

module.exports = PostModel