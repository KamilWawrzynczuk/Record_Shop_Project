import express from 'express';
import cors from 'cors';
import { corsOptions } from "../middleware/security.js";
import { addOrder, deleteOrder, getAllOrders, getSingleOrder, updateOrder } from '../controllers/ordersControllers.js';


const router = express.Router();

router.route('',cors(corsOptions))
.get(getAllOrders)
.post(addOrder)


router.route('/:id', cors(corsOptions))
.get(getSingleOrder)
.put(updateOrder)
.delete(deleteOrder)


export default router;