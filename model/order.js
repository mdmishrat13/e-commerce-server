import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    displayName:{
        type:String
    },

    email:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },

    location:{
        type:String,
        required:true
    },

    district:{
        type:String,
        required:true
    },
    paymentStatus:{
        type:String,
        default:'UNPAID'
    },

    shippingStatus:{
        type:String,
        default:'PLACED'
    },
    senderNumber:{
        type:String
    },
    trxId:{
        type:String
    },
    orderItem:[{
        product: {
            type: mongoose.Types.ObjectId,
            ref: "Product",
            required:true
         },
         quantity:{
            type:Number,
            default:1
        },
    }],
    paymentMethod:{
        type:String
    }

})

export default mongoose.model('Order',orderSchema)