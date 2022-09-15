import Order from '../model/order.js';


const createOrder = async(req,res,next)=>{
      try {
      const orderData = req.body;
      console.log('post hitted successfully! got from body',orderData)
      const uploadedOrder= await Order.create(orderData)
     if (uploadedOrder){
        console.log('sent to the server',uploadedOrder)
        res.status(201).json(uploadedOrder)
     }
     else{res.status(500).json('something wrong')}
      
      } catch (error) {
          res.status(500).json(error)
      }
}
  

const getOrders = async(req,res)=>{
    try {
      const getOrders= await Order.find({}).populate({ 
        path: 'orderItem',
        populate: {
          path: 'product'
        } 
     })
      res.status(200).json(getOrders)
    } catch (error) {
      res.status(500).json(error)
    }
    
  }

const getOrder = async(req,res)=>{
   try {
    const email = req.params.id;
    console.log(email)
   const order = await Order.find({email:email}).populate({ 
    path: 'orderItem',
    populate: {
      path: 'product'
    } 
 })
   console.log(order)
   if(!order){
    return res.status(404).json({msg:'Order not found with id:',email})
   }
   res.status(200).json(order)
   } catch (error) {
    res.status(500).json(error)
   }
}

const getOrderById = async(req,res)=>{
   try {
    const id = req.params.id;
    console.log(id)
   const order = await Order.find({_id:id}).populate({ 
    path: 'orderItem',
    populate: {
      path: 'product'
    } 
 })
   console.log(order)
   if(!order){
    return res.status(404).json({msg:'Order not found with id:',id})
   }
   res.status(200).json(order)
   } catch (error) {
    res.status(500).json(error)
   }
}

const updateOrder = async(req,res)=>{
    try {
        const {id:orderId}= req.params;
    const order = await Order.findByIdAndUpdate({_id:orderId},req.body,{new:true})
    if(!order){
        return res.status(404).json({msg:'product not found with id :',orderId})
    }
    res.status(200).json(order)
    } catch (error) {
        res.status(500).json(error)
    }
}
const deleteOrder = async(req,res)=>{
    try {
        const {id:orderId}= req.params;
       await Order.findByIdAndDelete({_id:orderId})
    
    res.status(200).json('Deleted Successfully!')
    } catch (error) {
        res.status(500).json(error)
    }
}



export{
    createOrder,
    getOrders,
    getOrder,
    getOrderById,
    updateOrder,
    deleteOrder
}