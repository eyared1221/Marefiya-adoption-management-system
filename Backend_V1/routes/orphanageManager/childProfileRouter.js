import express from "express";
import { 
    createChildProfile,
    getChildProfile,
    getSingleChildProfile, 
    updateChildProfile, 
}  from '../../controllers/orphanageManager/childProfileController.js';

const router = express.Router();

router
    .route('/')
    .post(createChildProfile)
    .get(getChildProfile)


router
    .route('/:id')
    .get(getSingleChildProfile)
    .put(updateChildProfile)

export default router;