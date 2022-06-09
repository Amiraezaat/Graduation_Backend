const { StatusCodes } = require("http-status-codes")
const PostModel = require("../PostsModel")

exports.editPost = async(req,res)=>{
    console.log(req.user)
    const{createdBy , title , newtitle , newbody}  = req.body
    try {
         if(createdBy == req.user._id){
           const modifiedPost = await PostModel.findOne({createdBy , title})
           if(modifiedPost){
            
            await PostModel.updateOne({title} , { title:newtitle , postBody : newbody})
            res.status(StatusCodes.OK). json({message:"the post is updated"})

           }else{
             res.status(StatusCodes.BAD_REQUEST). json({message:"there is no post with this title createdBy this user"})

           }
         }else{
             res.status(StatusCodes.BAD_REQUEST). json({message:"soory you can't edit this post"})
         }
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR). json({message:"edit fail"})
        
    }
}