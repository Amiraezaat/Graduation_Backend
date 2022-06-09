// Block_Post_By_Admin

const { StatusCodes } = require('http-status-codes')
const UserModel = require('../../Users/UserModel')
const PostModel = require('../PostsModel')

exports.blockPostByAdmin = async (req, res) => {
  const { createdBy, title } = req.body
  try {
    const UserIdCheck = await UserModel.findOne({ _id: createdBy })
    if (UserIdCheck) {
      const post = await PostModel.find({ createdBy , reported:true })
      console.log(post)
      if (post){
         const blockedpost = await PostModel.updateOne(
          { title  , reported:true},
          {
            Block_Post_By_Admin: true,
          },
        )
        res
          .status(StatusCodes.OK)
          .json({ MESSAGE: 'blocked done', blockedpost })
      } else {
        res
          .status(StatusCodes.BAD_REQUEST)
          .json({ MESSAGE: 'there is no post with this requirements' })
      }
    } else {
      res.status(StatusCodes.BAD_REQUEST).json({ MESSAGE: 'invalid user id' })
    }
  } catch (error) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ MESSAGE: 'BLOCK  POST IS FAIL' })
  }
}
