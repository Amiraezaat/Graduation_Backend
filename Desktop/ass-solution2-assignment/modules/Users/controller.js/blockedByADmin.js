const { StatusCodes } = require('http-status-codes')
const UserModel = require('../UserModel')

exports.Block_User_By_Admin = async (req, res) => {
  const { email } = req.body
  try {
    const usermod = await UserModel.findOne({ email, reported: true })
    if (usermod) {
      const modified = await UserModel.updateOne(
        { email },
        { Blocked_User_admin: true },
      )
      res.status(StatusCodes.OK).json({ MESSAGE: 'blocked done', modified })
    } else {
      res.status(StatusCodes.BAD_REQUEST).json({ MESSAGE: 'invalid email' })
    }
  } catch (error) {
    console.log(error)
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ MESSAGE: 'blocked fail' })
  }
}
