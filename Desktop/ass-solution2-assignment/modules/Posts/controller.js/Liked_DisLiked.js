const { StatusCodes } = require("http-status-codes")
const UserModel = require("../../Users/UserModel")
const PostModel = require("../PostsModel")

exports.likedPost =async(req,res)=>{

    const {createdBy , title} = req.body
    try{
  const createdByCheck = await UserModel.findOne({_id:createdBy})
  if(createdByCheck){
       const postFound = await PostModel.findOne({ createdBy , title})
       if(postFound){
           if(postFound.liked){
            
            await PostModel.updateOne({title}, { liked:false})
            res.json({message:"post disliked"})
           }else{
            await PostModel.updateOne({title}, {liked :true})
            res.json({message:"post liked"})
           }
       }else{
    res.status(StatusCodes.BAD_REQUEST).json({ MESSAGE: 'no post for this user with this title ' })

       }
  }else{
    res.status(StatusCodes.BAD_REQUEST).json({ MESSAGE: 'Invalid userId' })

  }
    
    }catch(err){
        console.log(err)
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ MESSAGE: 'liked fail' })

    }
}