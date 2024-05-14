import mongoose from 'mongoose';

const adoptiveParentSchema = new mongoose.Schema({

    // Foster father's detail
    f_firstName: {
        type: String,
    },
    f_lastName: {
        type: String,
    },
    f_phoneNumber: {
        type: Number,
    },
    f_email: {
        type: String,
    },
    f_nationality: {
        type: String,
    },
    f_occupation: {
        type: String,
    },
    address: {
        type: String,
    },
    f_kebeleDocument: {
        type: String, 
    },
    f_medicalDocument: {
        type: String, 
    },
    f_birthCertificate: {
        type: String, 
    },
    
    // Foster mother's detail
    m_firstName: {
        type: String,
    },
    m_lastName: {
        type: String,
    },
    m_phoneNumber: {
        type: Number,
    },
    // m_email: {
    //     type: String,
    // },
    m_nationality: {
        type: String,
    },
    m_occupation: {
        type: String,
    },
    m_kebeleDocument: {
        type: String, 
    },
    m_medicalDocument: {
        type: String, 
    },
    m_birthCertificate: {
        type: String, 
    },

    // Additional Information
    economicStatus: {
        type: String,
    },
    policeClearance: {
        type: String,
    },
    marriageCertificate: {
        type: String,
    },
    // marriage_status: {
    //     type: String,
    //     enum: [
    //         'married_status',
    //         'single',
    //     ]
    // },

});


const adoptiveParent = mongoose.model('adoptiveParent', adoptiveParentSchema);

export default adoptiveParent;

