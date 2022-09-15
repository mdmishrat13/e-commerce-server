import express from "express";
import multer from 'multer';
import path from 'path';
import Product from '../model/product.js'


import { deleteProduct, getProduct, getProducts, updateProduct } from "../controllers/product.js";
const router = express.Router();


const storage = multer.diskStorage({
  destination:(req, file, cb)=> {
    cb(null, 'uploads')
  },
  filename: function (req, file, cb) {
    const extName = path.extname(file.originalname)
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.originalname.replace(extName,"").toLowerCase().split(" ").join('-') + '-' + uniqueSuffix + extName)
    }
})

const upload = multer({ storage: storage,
  fileFilter: (req, file, cb) => {
    if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
        cb(null, true);
    } else {
        cb(null, false);
        return cb(new Error('Only .png,.webp, .jpg and .jpeg format allowed!'));
    }
} })


  // create product 
router.route('/upload').post(upload.fields([
  {name:'images',maxCount:4},
  {name:'image',maxCount:1}
]),async(req,res,next)=>{
    try {
      const images =[]
      Array.from(req.files.images).forEach(item=>{
        images.push(item.path)
      })
      console.log('post hitted successfully ',images)
    const productData = {
      name:req.body.name,
      image: req.files.image[0].path,
      images: images,
      sku: req.body.sku,
      price:req.body.price,
      brand:req.body.brand,
      description: req.body.description,
      color: req.body.color,
      vendor: req.body.vendor,
    }
    console.log('post hitted successfully!',productData)
    const uploadedProduct= await Product.create(productData)
    console.log(uploadedProduct)
    res.status(201).json(uploadedProduct)
    
    } catch (error) {
        res.status(500).json(error)
    }
  })

  // get all products 
  router.route('/').get(getProducts)

  // get a single product 
  router.route('/:id').get(getProduct)
  router.route('/:id').patch(updateProduct)
  router.route('/:id').delete(deleteProduct)

export default router