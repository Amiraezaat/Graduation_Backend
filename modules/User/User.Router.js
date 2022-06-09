
const validation = require('../../Middelware/validation')
const { searchUser } = require('./controller/getUsers')
const { signUp } = require('./controller/signUp')
const { Sign_up_schema } = require('./User.Validation')

const router = require('express').Router()


router.post('/signup', validation(Sign_up_schema), signUp) // insert person
router.get('/users', searchUser) //search api 

module.exports = router
