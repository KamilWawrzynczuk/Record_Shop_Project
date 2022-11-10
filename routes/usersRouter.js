import express from 'express';
import cors from 'cors';
import { corsOptions } from "../middleware/security.js";
import { addUser, deleteUser, getAllUsers, getSingleUser, updateUser } from '../controllers/userControllers.js';

const router = express.Router();

router.route('')
.get(getAllUsers)
.post(addUser)


router.route('/:email')
.get(getSingleUser)
.put(updateUser)
.delete(deleteUser)


export default router;