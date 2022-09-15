import Product from '../model/product.js'




//   create a single product 

  

const getProducts = async(req,res)=>{
    try {
      const getProducts = await Product.find({})
      res.status(200).json(getProducts)
    } catch (error) {
      res.status(500).json(error)
    }
    
  }

const getProduct = async(req,res)=>{
   try {
    const {id:productId} = req.params;
    console.log(productId)
   const product = await Product.findById({_id:productId})
   console.log(product)
   if(!product){
    return res.status(404).json({msg:'product not found with id:',productId})
   }
   res.status(200).json(product)
   } catch (error) {
    res.status(500).json(error)
   }
}

const updateProduct = async(req,res)=>{
    try {
        const id = req.params.id;
    const product = await Product.findByIdAndUpdate({_id:id},req.body,{new:true})
    if(!product){
        return res.status(404).json({msg:'product not found with id :',id})
    }
    res.status(200).json(product)
    } catch (error) {
        res.status(500).json(error)
    }
}

const deleteProduct = async(req,res)=>{
    try {
        const id= req.params.id;
        const deleteProduct = await Product.findByIdAndDelete({_id:id})
        if(!deleteProduct){
            return res.status(404).json({msg:'product not found with id :',id})
        }
        res.status(200).json({msg:'product deleted successfully!'})
    } catch (error) {
        res.status(500).json(error)
    }
}

export{
    getProducts,
    getProduct,
    updateProduct,
    deleteProduct
}