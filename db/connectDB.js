import mongoose from "mongoose";

const connectDb = (uri)=> mongoose.connect(uri)

export default connectDb;