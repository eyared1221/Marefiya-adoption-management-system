import express from "express";
import { 
    createAdoptiveParent,
    getAdoptiveParent,
    getSingleAdoptiveParent, 
    updateAdoptiveParent, 
    deleteAdoptiveParent,
}  from '../../controllers/orphanageManager/adoptiveParentProfileController.js';

const router = express.Router();

router
    .route('/')
    .post(createAdoptiveParent)
    .get(getAdoptiveParent)
 

router
    .route('/:id')
    .get(getSingleAdoptiveParent)
    .put(updateAdoptiveParent)
    .delete(deleteAdoptiveParent);

export default router;