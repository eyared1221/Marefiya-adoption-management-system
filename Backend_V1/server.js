import express from 'express'; 
import dotenv from 'dotenv'; 
import connectDB from "./config/connectDB.js"; 
import bodyParser from 'body-parser';
import orphanageManagerApp from '../Backend_V1/app/orphanageManagerApp.js';
import socialWorkerApp from '../Backend_V1/app/socialWorkerApp.js'; 
import systemAdminApp from './app/systemAdminApp.js';
import cors from 'cors'; 
 
dotenv.config(); 
  
connectDB(); 
 
const app = express(); 

 
const PORT1 = process.env.ORPHANAGE_MANAGER_PORT || 3001; 
const PORT2 = process.env.SOCIAL_WORKER_PORT || 3006; 
const PORT3 = process.env.SYSTEM_ADMIN_PORT || 3007; 
app.use(cors({ origin: 'http://localhost:5173' }));
app.use(express.json()); 
//app.use(errorHandler); 
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

orphanageManagerApp.listen(PORT1, () => { 
    console.log(`MAREFIYA_ORPHANAGE_MANAGER PORT ${PORT1}...`); 
});
// socialWorkerApp.listen(PORT2, () => { 
//     console.log(`MAREFIYA_SOCIAL_WORKER PORT ${PORT2}...`); 
// });
systemAdminApp.listen(PORT3, () => { 
    console.log(`MAREFIYA_SYSTEM_ADMIN PORT ${PORT3}...`); 
});
