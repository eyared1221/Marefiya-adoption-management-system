import mongoose from 'mongoose';


const orphanageStaffSchema = new mongoose.Schema({

    // Personal Information
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    },
    dateOfBirth: {
        type: Date,
      },
    gender: {
        type: String,
    },
    phoneNumber: {
        type: Number,
    },
    nicNumber: {
        type: String,
    },
    email: {
        type: String,
    },
    password: {
        type: String,
    },
    address: {
        type: String,
    },
    country: {
        type: String,
    },
    kebeleDocument: {
        type: String,
    },
    selectedRole: {
        type: String,
        enum: [
            'Orphanage Manager/Director',
            'Social Worker',
            'Caregivers/Nannies',
            'Education Coordinator/Teacher',
            'Medical Staff/Nurse',
            'Psychologist/Counselor',
            'Administrative Staff',
            'Maintenance/Support Staff'
        ],
    },

    // Affiliated organization 
    organizationName: {
        type: String,
    },
    selectedInteraction: {
        type: String,
        enum: [
            'Employment',
            'Contractual Agreement',
            'Referral Network',
            'Professional Association',
            'Resource Sharing',
            'Collaboration and Support',
            'None'
        ],
    },
},
    {
        timestamps: true,
    }
);


const orphanageStaff = mongoose.model('staff', orphanageStaffSchema);

export default orphanageStaff;

