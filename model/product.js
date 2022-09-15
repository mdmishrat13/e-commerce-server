import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name:{
        type:String,
    },
    sku:{
        type:String,
    },
    color:{
        type:String
    },
    vendor:{
        type:Number
    },
    images:{

    },
        
    image:{
        
    },

    price:{
        type:Number,
        default:0
    },
    brand:{
        type:String,
    },
    description:{
        type:String,
    },
    rating:{
        type:Number, 
        minLength: 0,
        maxLength: 5,
        default:0
    },
    paymentMethod:{
        type:String
    }
})

export default mongoose.model('Product',productSchema)