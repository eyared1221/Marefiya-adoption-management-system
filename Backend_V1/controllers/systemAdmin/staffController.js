import asyncHandler from 'express-async-handler';
import staff from '../../models/staffModel.js';


export const createStaff = asyncHandler(async (req, res) => {
    try {
    console.log("Create Staff")
    const newStaff = await staff.create(req.body);
    res.status(200).json({
      status: 'success',
      message: 'Child Profile Created Successfully',
      data: {
        staff: newStaff,
      },
    });
  
      res.status(200).json({
        status: 'success',
        message: 'Staff Created Successfully',
        data: {
          staff: newStaff,
        },
      }); 
    
    } catch (error) {
      console.log(error);
      res.status(500).json({
        status: 'error',
        message: 'Failed to create Staff.',
        error: error.message,
      });
    }
  });

export const getSingleStaff = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const staffData = await staff.findById(id);

  if (!staffData) {
    return res.status(404).json({
      status: 'error',
      message: 'Staff not found',
    });
  }

  res.status(200).json({
    status: 'success',
    data: {
      staff: staffData,
    },
  });
});

export const getStaff = asyncHandler(async (req, res) => {
  try {
    const staffs = await staff.find();

    res.status(200).json({
      status: 'success',
      data: {
        staffs,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: 'error',
      message: 'Failed to Staffs.',
      error: error.message,
    });
  }
});

export const updateStaff = asyncHandler(async (req, res) => {
  try {
      const { id } = req.params; 
      const updatedStaff = await staff.findByIdAndUpdate(id, req.body, {
      new: true, 
      runValidators: true, 
  });

  if (!updatedStaff) {
  return res.status(404).json({
      status: 'error',
      message: 'Staff not found',
  });
  }

  res.status(200).json({
  status: 'success',
  message: 'Staff Updated Successfully',
  data: {
      staff: updatedStaff,
  },
  });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: 'error',
      message: 'Failed to update Staff.',
      error: error.message,
    });
  }
});


