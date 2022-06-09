const { StatusCodes } = require('http-status-codes')
const UserModel = require('../UserModel')

exports.deActivate = async (req, res) => {
    const {email , pass  } = req.body
  try {
    const usermod = await UserModel.findOne({email})
     if(usermod){
        if (pass == usermod.pass) {
            const modified = await UserModel.updateOne({email},{deactivated : true})
            res
              .status(StatusCodes.OK)
              .json({ MESSAGE: 'deactibvated done'  , modified})
          } else {
            res
              .status(StatusCodes.BAD_REQUEST)
              .json({ MESSAGE: 'INVALID password' })
          }
     }else{
        res
        .status(StatusCodes.BAD_REQUEST)
        .json({ MESSAGE: 'invalid email' })
     }
 
  } catch (error) {
      console.log(error)
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ MESSAGE: 'deactivate fail' })
  }
}
