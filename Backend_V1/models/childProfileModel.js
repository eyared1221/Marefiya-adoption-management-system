import mongoose from 'mongoose';
//import vaildator from 'validator';

const childProfileSchema = new mongoose.Schema({

    // Child Information
    firstName: {
      type: String
    },
    middleName: {
      type: String
    },
    lastName: {
      type: String
    },
    childDoB: {
      type: Date
    },
    gender: {
      type: String
    },
    city: {
      type: String
    },
    country: {
      type: String
    },
    nationality: {
      type: String
    },
    language: {
      type: String
    },

    // Family Background  
    fatherName: {
      type: String
    },
    fatherDocument: {
      type: String
    },
    motherName: {
      type: String
    },
    motherDocument: {
      type: String
    },
    // Additional Information
    medicalStatus: {
      type: String
    },
    medicalDocument: {
      type: String
    },
    placement: {
      type: String
    },
    // photograph: {
    //   type: String
    // },
    cpaDocument: {
      type: String
    },
    remarks: {
      type: String
    },
    // Registration Information
    admission: {},
});

const childProfile = mongoose.model('childProfile', childProfileSchema);

export default childProfile;

