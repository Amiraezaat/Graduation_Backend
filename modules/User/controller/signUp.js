const { userModel } = require('../../../DB/UserModel')
// const { nanoid } = require('nanoid')
// const jwt = require('jsonwebtoken')
const { StatusCodes } = require('http-status-codes')

exports.signUp = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      age,
      phone,
      Current_Address,
      city,
      Gender,
      country,
      Birth_Day,
      Job,
      Social_Status,
      Eduction_Status,
      National_ID
    } = req.body
  //  console.log(National_ID)
  //  console.log(req.body)
     const user =  await userModel.findOneAndUpdate({National_ID},{
      firstName,
      lastName,
      age,
      phone,
      Current_Address,
      city,
      Gender,
      country,
      Birth_Day,
      Job,
      Social_Status,
      Eduction_Status
    }, {new:true})
     console.log(user)
      res
        .status(StatusCodes.CREATED)
        .json({ message: 'Added Done' , user})
    
  } catch (error) {
    console.log(error)
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: 'Oops! its look like internal server error'
    })
  }
}
