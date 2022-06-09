const UserModel = require('../UserModel')
const jwt = require('jsonwebtoken')
const { StatusCodes } = require('http-status-codes')

const bcrypt = require("bcrypt")

exports.login = async (req, res) => {
  console.log(req.body)
  const { email, password } = req.body
   
  try {
    const emailCheck = await UserModel.findOne({ email })
    console.log(emailCheck);
    if (emailCheck) {
      const matchpass = await bcrypt.compare(password , emailCheck.password)
      console.log(matchpass);
      
      if (matchpass) {
        const token = jwt.sign(
          {
            email: emailCheck.email,
            _id: emailCheck._id,
            role: emailCheck.role,
          },
          process.env.PRIVATE_KEY,
        )
        
        res
          .status(StatusCodes.OK)
          .json({ MESSAGE: 'log in done', User_token: token })
      } else {
        
        res
          .status(StatusCodes.BAD_REQUEST)
          .json({ MESSAGE: 'invalid email or password' })
      }
    } else {
      res.status(StatusCodes.BAD_REQUEST).json({ MESSAGE: 'INVALID email or passowrd' })
    }
  } catch (error) {
    console.log(error)
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ MESSAGE: 'log in fail' })
  }
}
