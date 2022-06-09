 
//for Posts APIs
const {
  EDIT_POST,
  REPORT_POST,
  Liked_DisLiked
} = require('../../../../modules/Posts/PostsEndPoints')



//for Users APIs
const {
  UPDATE_USER,
  BLOCK_USERS,
  FORGET_PASSWORD,
  RESET_PASSWORD,
  DEACTIVTAE_ACCOUNT,
  LOG_IN
} = require('../../../../modules/Users/UserEndPoints')

  

module.exports = [
  UPDATE_USER,
  BLOCK_USERS,
  FORGET_PASSWORD,
  RESET_PASSWORD,
  DEACTIVTAE_ACCOUNT,
  LOG_IN,
  EDIT_POST,
  REPORT_POST,
  Liked_DisLiked
]
