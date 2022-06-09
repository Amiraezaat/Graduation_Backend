const { StatusCodes } = require('http-status-codes')
const UserModel = require('../UserModel')

exports.getAllUsers = async (req, res) => {
  try {
    const users = await UserModel.find({})
    res.status(StatusCodes.OK).json({ MESSAGE: 'get success', users })
  } catch (error) {
    console.log(error)
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ MESSAGE: 'get fail' })
  }
}
