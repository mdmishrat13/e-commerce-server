import express from "express";
import{
    createOrder,
    getOrders,
    getOrder,
    getOrderById,
    updateOrder,
    deleteOrder
} from "../controllers/order.js";
const router = express.Router();




  // create order 
router.route('/').post(createOrder)

  // get all orders
  router.route('/').get(getOrders)

  // get a single order
  router.route('/:id').get(getOrder)

  router.route('/pay/:id').get(getOrderById)

//   update order 
  router.route('/:id').patch(updateOrder)
  router.route('/:id').delete(deleteOrder)

export default router