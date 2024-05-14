import express from 'express';
import bodyParser from 'body-parser';
import childProfileRouter from '../routes/orphanageManager/childProfileRouter.js'; 
// import testRouter from '../routes/orphanageManager/testRouter.js'; 
import adoptiveParentRouter from '../routes/orphanageManager/adoptiveparentRouter.js';
// import caseRouter from '../routes/orphanageManager/caseRouter.js'; 
import cors from "cors";



const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(cors({ origin: 'http://localhost:5173' }));
app.use('/Create_Child_Profile', childProfileRouter);
// app.use('/marefiya/api/test', testRouter);
app.use('/Create_Parent', adoptiveParentRouter);
// app.use('/marefiya/api/case', caseRouter);


export default app;
