// for Posts APIs

const {
  GET_aLL_POSTS,
  BLOCK_POST_BY_ADMIN
} = require('../../../../modules/Posts/PostsEndPoints')



//for Users APIs
const {
  GET_ALL_USERS,
  BLOCK_USERS_BY_ADMIN
} = require('../../../../modules/Users/UserEndPoints')

 

module.exports = [
  GET_ALL_USERS,
  BLOCK_USERS_BY_ADMIN,
  GET_aLL_POSTS,
  BLOCK_POST_BY_ADMIN
]
