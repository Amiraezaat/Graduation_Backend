const { StatusCodes } = require("http-status-codes")
const UserModel = require("../../Users/UserModel")
const PostModel = require("../PostsModel")


exports.addPost = async(req,res)=>{
   const {title , postbody , createdBy} = req.body
   try {
       const UserIdCheck = await UserModel.findOne({_id:createdBy})
       if(UserIdCheck){

      const newpost = PostModel({title , postbody , createdBy})
      const savedPost = await newpost.save()
      res
      .status(StatusCodes.BAD_REQUEST)
      .json({ MESSAGE: 'added post done' , savedPost })

       }else{
        res
        .status(StatusCodes.BAD_REQUEST)
        .json({ MESSAGE: 'invalid user id' })
       }
       
   } catch (error) {
       console.log(error)
    res
    .status(StatusCodes.INTERNAL_SERVER_ERROR)
    .json({ MESSAGE: 'add fail' })
   }
}