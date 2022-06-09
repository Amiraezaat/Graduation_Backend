const UserModel = require('../UserModel')
 
const { StatusCodes } = require('http-status-codes')
const bcrypt = require('bcrypt')

exports.updateUser = async (req, res) => {
  const { email, pass, newemail, newpass, name } = req.body
  try {
    const emailCheck = await UserModel.findOne({ email })
    if (emailCheck) {
      const matchpasss = await bcrypt.compare(pass, emailCheck.pass)
      if (matchpasss) {
        const hashedpass = await bcrypt.hash(newpass, 8)
        const modified = await UserModel.updateOne({
          email: newemail,
          pass: hashedpass,
          name,
        })
        res.status(StatusCodes.OK).json({ MESSAGE: 'updated done', modified })
      } else {
        res
          .status(StatusCodes.BAD_REQUEST)
          .json({ MESSAGE: 'invalid password' })
      }
    } else {
      res.status(StatusCodes.BAD_REQUEST).json({ MESSAGE: 'invalid email' })
    }
  } catch (error) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ MESSAGE: 'update fail' })
  }
}
