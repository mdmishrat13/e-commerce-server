import express from "express";
import{
    createUser,
    getUsers,
    getUser,
    updateUser,
} from "../controllers/user.js";
const router = express.Router();




  // create user 
router.route('/').post(createUser)

  // get all users
  router.route('/').get(getUsers)

  // get a single user 
  router.route('/:id').get(getUser)

//   update user 
  router.route('/:id').patch(updateUser)

export default router