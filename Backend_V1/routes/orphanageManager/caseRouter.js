import express from "express";
import { 
    createCase,
    getCase,
    getSingleCase,
    updateCase,
    deleteCase
}  from '../../controllers/orphanageManager/caseController.js';

const router = express.Router();

router
    .route('/')
    .post(createCase)
    .get(getCase)
 

router
    .route('/:id')
    .get(getSingleCase)
    .put(updateCase)
    .delete(deleteCase);

export default router;