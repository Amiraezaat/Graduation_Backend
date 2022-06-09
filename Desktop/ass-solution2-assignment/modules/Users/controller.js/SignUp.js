// const { StatusCods } = require("http-status-codes")

const { StatusCodes } = require('http-status-codes')
const UserModel = require('../UserModel')
const nodemailer = require("nodemailer")
const { nanoid } = require("nanoid");
 
 

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


exports.signUp = async (req, res) => {
  const { email, password, name, cpassword , role } = req.body
  try {
    if (password == cpassword) {
      const emailCheck = await UserModel.findOne({ email })
      if (emailCheck){
        res
          .status(StatusCodes.BAD_REQUEST)
          .json({ MESSAGE: 'email is alrady exist' })
      } else {
          await transporter.sendMail({
          from: '"Fred Foo 👻" <amiraezaat.route@gmail.com>', // sender address
          to: email, // list of receivers
          subject: "Hello ✔", // Subject line
          text: "Hello world?", // plain text body
          html: "<b>Hello world from amiraezaat.route@gmail.com </b>", // html body
        });
        const newUser = UserModel({ email, password, name ,   Activation_Code : nanoid() , role})
        const savedUser = await newUser.save()
        res
          .status(StatusCodes.CREATED)
          .json({ MESSAGE: 'USER IS CREATED', savedUser })
      }
    } else {
      res
        .status(StatusCodes.BAD_REQUEST)
        .json({ MESSAGE: 'password must confirm the cpassword' })
    }
  } catch (err) {
  console.log(err)
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ MESSAGE: 'sign up fail' })
  }
}
