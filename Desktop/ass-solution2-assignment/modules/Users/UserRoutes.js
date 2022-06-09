const { Block_User_By_Admin } = require('./controller.js/blockedByADmin')
const { Block_User } = require('./controller.js/bloskUser')
const { deActivate } = require('./controller.js/deactivateAccount')
const {
  forgetpassword,
  resetPassword
} = require('./controller.js/forgetpassword')
const { getAllUsers } = require('./controller.js/getallUsers')
const { login } = require('./controller.js/login')
const { signUp } = require('./controller.js/SIgnUp')
const { updateUser } = require('./controller.js/updateUser')

const Urouter = require('express').Router()

const isAuth = require('../../Common/IsAuth')
const {
  BLOCK_USERS_BY_ADMIN,
  GET_ALL_USERS,
  DEACTIVTAE_ACCOUNT,
  BLOCK_USERS,
  UPDATE_USER,
  FORGET_PASSWORD,
  RESET_PASSWORD
} = require('./UserEndPoints')

Urouter.post('/signup', signUp)
Urouter.post('/login', login)

Urouter.get('/', isAuth(GET_ALL_USERS), getAllUsers) // only by admin
Urouter.put('/deActivate', isAuth(DEACTIVTAE_ACCOUNT), deActivate) // user can deactivate his account
Urouter.put('/BlockUser', isAuth(BLOCK_USERS), Block_User) // user block another users
Urouter.put('/blockByAdmin', isAuth(BLOCK_USERS_BY_ADMIN), Block_User_By_Admin) //only for admin
Urouter.put('/update', isAuth(UPDATE_USER), updateUser) // user can deactivate his account
Urouter.post('/forgetPassword', isAuth(FORGET_PASSWORD), forgetpassword)
Urouter.put('/resetpassword', isAuth(RESET_PASSWORD), resetPassword)

module.exports = Urouter
