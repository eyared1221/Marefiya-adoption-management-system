import express from 'express';
import bodyParser from 'body-parser';
import caseLogRouter from '../routes/socialWorker/caseLogRouter.js'; 

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


app.use('/marefiya/api/caseLog', caseLogRouter);

export default app;
