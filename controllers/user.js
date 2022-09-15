import User from '../model/user.js';


const createUser = async(req,res,next)=>{
      try {
      const userData = req.body;
      console.log('post hitted successfully!',userData)
      const uploadeduser= await User.create(userData)
      console.log(uploadeduser)
      res.status(201).json(uploadeduser)
      
      } catch (error) {
          res.status(500).json(error)
      }
}
  

const getUsers = async(req,res)=>{
    try {
      const getUsers= await User.find({isAdmin:true})
      res.status(200).json(getUsers)
    } catch (error) {
      res.status(500).json(error)
    }
    
  }

const getUser = async(req,res)=>{
   try {
    const email = req.params.id;
    console.log(email)
   const user = await User.findOne({email:email})
   console.log(user)
   if(!user){
    return res.status(404).json({msg:'product not found with id:',email})
   }
   res.status(200).json(user)
   } catch (error) {
    res.status(500).json(error)
   }
}

const updateUser = async(req,res)=>{
    try {
        const email= req.params.id;
        console.log(email)
    const user = await User.findOneAndUpdate({email:email},req.body,{new:true})
    if(!user){
        return res.status(404).json({msg:'product not found with id :',email})
    }
    res.status(200).json(product)
    } catch (error) {
        res.status(500).json(error)
    }
}



export{
    createUser,
    getUsers,
    getUser,
    updateUser,
}