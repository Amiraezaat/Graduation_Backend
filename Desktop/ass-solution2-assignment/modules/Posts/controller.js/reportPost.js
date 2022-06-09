const { StatusCodes } = require('http-status-codes')
const UserModel = require('../../Users/UserModel')
const PostModel = require('../PostsModel')

exports.reportPost = async (req, res) => {
  const { createdBy, title } = req.body
  try {
    const UserIdCheck = await UserModel.findOne({ _id: createdBy })
    if (UserIdCheck) {
      const post = await PostModel.find({ createdBy })
      console.log(post)
      if (post){
        const reportedpost = await PostModel.updateOne(
          { title },
          {
            reported: true,
          },
        )
        res
          .status(StatusCodes.OK)
          .json({ MESSAGE: 'reported done', reportedpost })
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
      .json({ MESSAGE: 'REPORT POST IS FAIL' })
  }
}
