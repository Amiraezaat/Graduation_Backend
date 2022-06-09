const mongoose = require("mongoose")
const bcrypt = require("bcrypt")
const UserSchema = new mongoose.Schema({
    name:String,
    email:String,
    password:String,
    role:{
        type:String,
        default:"user"
    },
    verified_Account :{
        type:Boolean,
        default:false
    },
    deactivated:{
        type:Boolean,
        default:false
    },
    Blocked_User:{
        type:Boolean,
        default:false
    }
    ,Blocked_User_admin:{
        type:Boolean,
        default:false
    }, reported:{
        type:Boolean,
        default:false
    },
    Activation_Code:String,
},{
    timestamps:true
})

UserSchema.pre("save" , async function(next){
    this.password = await bcrypt.hash(this.password , 8)
})
module.exports = UserSchema