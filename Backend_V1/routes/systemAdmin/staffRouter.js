import express from "express";
import { 
   createStaff,
   getStaff, 
   getSingleStaff,
   updateStaff
}  from '../../controllers/systemAdmin/staffController.js';

const router = express.Router();

router
    .route('/')
    .post(createStaff)
    .get(getStaff)
 
router
    .route('/:id')
    .get(getSingleStaff)
    .put(updateStaff);


export default router;