import mongoose from 'mongoose';

const caseSchema = new mongoose.Schema({

    case_name: {
        type: String,
    },
    case_description: {
        type: String,
    },
    child_name: {
        type: String,
    },
    social_worker_Name: {
        type: String,
    },
    case_log: {
        type: String,
    }
});


const Case = mongoose.model('Case', caseSchema);

export default Case;

