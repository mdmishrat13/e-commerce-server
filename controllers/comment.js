import Comment from '../model/comment.js';


const createComment = async(req,res,next)=>{
      try {
      const commentData = req.body;
      console.log('post hitted successfully!',commentData)
      const uploadedComment= await Comment.create(commentData)
      console.log(uploadedComment)
      res.status(201).json(uploadedComment)
      
      } catch (error) {
          res.status(500).json(error)
      }
}
  

const getComments = async(req,res)=>{
    try {
      const productId = req.params.id
      const comments = await Comment.find({productId:productId})
      res.status(200).json(comments)
    } catch (error) {
      res.status(500).json(error)
    }
    
  }
const deleteComment = async(req,res)=>{
    try {
      const id = req.params.id
      await Comment.findByIdAndDelete({_id:id})
      res.status(200).json('deleted successfully')
    } catch (error) {
      res.status(500).json(error)
    }
    
  }


export{
    createComment,
    getComments,
    deleteComment
}