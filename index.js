import express from 'express';
import product from './routes/product.js'
import order from './routes/order.js'
import comment from './routes/comment.js';
import user from './routes/user.js'
import connectDb from './db/connectDB.js';
import cors from 'cors'
import bodyParser from 'body-parser';
import dotenv from 'dotenv'
dotenv.config()
const app = express();
const port = 5000;


app.use(bodyParser.json())
app.use(cors())
app.use('/uploads', express.static('uploads'))


const uri = process.env.URI


  app.use('/product',product)
  app.use('/user',user)
  app.use('/order',order)
  app.use('/comment',comment)

  const run = async()=>{
    try {
        await connectDb(uri)
        app.listen(port,()=>{
            console.log(`connected to db and listening on port ${port}`)
        })
    } catch (error) {
        console.log(error)
    }
}

run()

