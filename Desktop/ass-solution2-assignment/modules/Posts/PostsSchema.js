const mongoose = require("mongoose")

const PostSchema = new mongoose.Schema({
    title:String,
    postBody:String,
    createdBy:{
        type: mongoose.Schema.Types.ObjectId , 
        ref:"User"
    },
    reported:{
        type:Boolean,
        default:false
    },
    Block_Post_By_Admin:{
        type:Boolean,
        default:false
    },
    liked:{
        type:Boolean,
        default:false
    }
},{
    timestamps:true
})


module.exports = PostSchema