import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
    name:{
        type:String,
        // required:true
    },

    productId:{
        type: mongoose.Types.ObjectId,
        ref:'Product',
        required:true
    },
    comment:{
        type:String,
        required:true
    },
    rating:{
        type:Number,
        default:0
    }

   
})

export default mongoose.model('Comment',commentSchema)