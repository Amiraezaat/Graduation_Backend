const { StatusCodes } = require('http-status-codes')
const PostModel = require('../PostsModel')
 

exports.getAllPosts = async (req, res) => {

  try {
    const posts = await PostModel.find({reported:false}).populate("createdBy","name email").select("title")
    res.status(StatusCodes.OK).json({ MESSAGE: 'get success', posts })
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ MESSAGE: 'get fail' })
  }
}
