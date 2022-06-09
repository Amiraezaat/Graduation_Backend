const IsAuth = require('../../Common/IsAuth')
const { addPost } = require('./controller.js/addpost')
const { blockPostByAdmin } = require('./controller.js/blockPostbyAdmin')
const { editPost } = require('./controller.js/editPost')
const { getAllPosts } = require('./controller.js/getallposts')
const { likedPost } = require('./controller.js/Liked_DisLiked')
const { reportPost } = require('./controller.js/reportPost')
const {
  EDIT_POST,
  GET_aLL_POSTS,
  REPORT_POST,
  BLOCK_POST_BY_ADMIN,
  Liked_DisLiked
} = require('./PostsEndPoints')

const Prouter = require('express').Router()

Prouter.post('/addpost', addPost)
Prouter.get('/p', IsAuth(GET_aLL_POSTS), getAllPosts)
Prouter.put('/report', IsAuth(REPORT_POST), reportPost)
Prouter.put('/blockbyadmin', IsAuth(BLOCK_POST_BY_ADMIN), blockPostByAdmin)
Prouter.put('/like', IsAuth(Liked_DisLiked), likedPost)
Prouter.put('/edit', IsAuth(EDIT_POST), editPost)
module.exports = Prouter
