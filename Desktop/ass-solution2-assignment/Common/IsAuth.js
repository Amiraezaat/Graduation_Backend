const { StatusCodes } = require('http-status-codes')
require('dotenv').config()
const jwt = require('jsonwebtoken')
const UserModel = require('../modules/Users/UserModel')
const rbac = require('./enum/RBAC/rbac')

module.exports = endpoint => {
  return async (req, res, next) => {
    if (req.headers.authorization.split(' ')[1]) {
      // console.log(req)
      const token = req.headers.authorization.split(' ')[1]
      try {
        var decode = jwt.verify(token, process.env.PRIVATE_KEY)
        console.log('decode', decode)
        const user = await UserModel.findOne({ _id: decode._id })
        if (!user) {
          res.status(StatusCodes.UNAUTHORIZED).json({ message: 'UNAUTHORIZED' })
        } else {
          req.user = user
          const isAllowed = await rbac.can(decode.role, endpoint)
          console.log(endpoint, decode.role)
          console.log(isAllowed)
          if (isAllowed) {
            next()
          } else {
            res
              .status(StatusCodes.UNAUTHORIZED)
              .json({ message: 'UNAUTHORIZED************' })
          }
        }
      } catch (error) {
        console.log(error)
        res
          .status(StatusCodes.INTERNAL_SERVER_ERROR)
          .json({ message: ' INTERNAL SERVER ERROR' })
      }
    }
  }
}
