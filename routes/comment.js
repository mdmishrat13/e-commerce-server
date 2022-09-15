import express from "express";
import{
    createComment,
    getComments,
    deleteComment
} from "../controllers/comment.js";
const router = express.Router();


router.route('/').post(createComment)

  router.route('/:id').get(getComments)
  router.route('/:id').delete(deleteComment)


export default router