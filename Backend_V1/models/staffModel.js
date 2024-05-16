import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

function generateRandomNumber() {
    return Math.floor(1000 + Math.random() * 9000);
  }
  function generateStaffId(role) {
    let prefix;
    switch (role) {
      case 'Orphanage Manager/Director':
        prefix = 'OM';
        break;
      case 'Social Worker':
        prefix = 'SW';
        break;
      case 'System Administrator':
        prefix = 'SA';
        break;
      default:
        prefix = 'UNK'; // Unknown role prefix
    }
  
    return prefix + generateRandomNumber();
  }
const staffSchema = new mongoose.Schema({

    // Personal Information
    staffId: {
        type: String,
        default: function() {
            return generateStaffId(this.role);
        },
        unique: true
    },
    firstName: {
        type: String,
    },
    middleName: {
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
    role: {
        type: String,
        enum: [
            'Orphanage Manager/Director',
            'Social Worker',
            'System Administrator'
        ],
    },
    emergancyPersonFirstName: {
        type: String,
    },
    emergancyPersonLastName: {
        type: String,
    },
    emergancyPersonPhone: {
        type: String,
    },
    emergancyPersonAddress: {
        type: String,
    },
    current_case: {
        type: Number,
        default: 0,
        required: function() {
            return this.role === 'Social Worker';
        },
    },
},
    {
        timestamps: true,
    }
);

staffSchema.pre('save', async function(next) {
    if (!this.password) {
        const currentYear = new Date().getFullYear();
        this.password = `${this.last_name}@${currentYear}`;
    }
    if (!this.isModified('password')) return next();

    const existingStaff = await this.constructor.findOne({ email: this.email });
    if (existingStaff) {
        const err = new Error('Email already exists');
        return next(err);
    }
    
    this.password = await bcrypt.hash(this.password, 12);
    next();
});
    
staffSchema.methods.comparePasswordInDb = async function(pswd) {
return await bcrypt.compare(pswd, this.password);
};

const staff = mongoose.model('staff', staffSchema);

export default staff;

