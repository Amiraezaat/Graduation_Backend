const { StatusCodes } = require("http-status-codes")
const UserModel = require("../UserModel")
const jwt  = require("jsonwebtoken")
const bcrypt = require("bcrypt")
const nodemailer = require("nodemailer")

let transporter = nodemailer.createTransport({
  host: "smtp.ether eal.email",
  service:"gmail" ,
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: "amiraezaat.route@gmail.com", // generated ethereal user
    pass: "Amira1122", // generated ethereal password
  },
});

exports.forgetpassword = async(req,res)=>{
    const { email } = req.body
 
    try {
        const findemail = await UserModel.findOne({ email})
        if(findemail){
            await transporter.sendMail({
                from: '"Fred Foo 👻" <amiraezaat.route@gmail.com>', // sender address
                 to: email, // list of receivers
                 subject: "Hello ✔", // Subject line
                 text: "Hello world?", // plain text body
                 html: `<div><b> if you want to reset your password</b>
                 <a href = "https://localhost:3000/resetpassword"> click here </a>
                 <P> YOUR ACTIVATIO CODE ID "${findemail.Activation_Code}"</P></div>`, // html body
               });
               res
               .status(StatusCodes.OK)
               .json({ MESSAGE: "check your email please to reset password  "}) 
          
        }else{
            res
            .status(StatusCodes.BAD_REQUEST)
            .json({ MESSAGE: "Email isnot exist "})
        }
         
    } catch (error) {
        console.log(error)
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ MESSAGE: 'reset password is fail' })
    }
}


exports.resetPassword  = async(req,res )=>{
    const {password , cPass , Code , email} = req.body
    try {
        const findemail = await UserModel.findOne({email})
        if(findemail){
            if( Code == findemail.Activation_Code){
              
                if(password == cPass){
     
                   // const decode  =   jwt.verify(req.params.tokenEmail , process.env.PRIVATE_KEY)
                   const hashedPass = await bcrypt.hash(password , 8)
                      const updated = await UserModel.updateOne({ email} , 
                       {password : hashedPass})
                       res
             .status(StatusCodes.OK)
             .json({ MESSAGE: 'your password is reset' , updated  })
               
               } else{
                   res
             .status(StatusCodes.BAD_REQUEST)
             .json({ MESSAGE: 'confirmpassword must match password and the new password must be diffreent from old password' })
               }
             }else{
               res
               .status(StatusCodes.BAD_REQUEST)
               .json({ MESSAGE: "Code is incorrect"})
             }
        }else{
            res
            .status(StatusCodes.BAD_REQUEST)
            .json({ MESSAGE: "Emial isnot exist "})
        }
    } catch (error) {
        res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json({ MESSAGE: "reset passowrd is fail "})
    }

}