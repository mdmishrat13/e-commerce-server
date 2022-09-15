import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    displayName:{
        type:String,
    },
    email:{
        type:String,
    },
    
    isAdmin:{
        type:Boolean,
        default:false
    },

})

export default mongoose.model('User',userSchema)