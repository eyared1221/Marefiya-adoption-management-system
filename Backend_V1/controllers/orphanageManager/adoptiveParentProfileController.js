import asyncHandler from 'express-async-handler';
import adoptiveParent from '../../models/adoptiveParentModel.js';
  
export const createAdoptiveParent = asyncHandler(async (req, res) => {
    try {
      const newAdoptiveParent = await adoptiveParent.create(req.body);
      res.status(200).json({
        status: 'success',
        message: 'Adoptive Parent Created Successfully',
        data: {
          adoptiveParent: newAdoptiveParent,
        },
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        status: 'error',
        message: 'Failed to create Adopive Parent.',
        error: error.message,
      });
    }
  });

export const getSingleAdoptiveParent = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const adopiveParentData = await adoptiveParent.findById(id);

  if (!adopiveParentData) {
    return res.status(404).json({
      status: 'error',
      message: 'Parent not found',
    });
  }

  res.status(200).json({
    status: 'success',
    data: {
      adoptiveParent: adopiveParentData,
    },
  });
});

export const getAdoptiveParent = asyncHandler(async (req, res) => {
  try {
    const adoptiveParents = await adoptiveParent.find();

    res.status(200).json({
      status: 'success',
      data: {
        adoptiveParents,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: 'error',
      message: 'Failed to fetch Parent.',
      error: error.message,
    });
  }
});

export const updateAdoptiveParent = asyncHandler(async (req, res) => {
  try {
      const { id } = req.params; 
      const updateAdoptiveParent = await adoptiveParent.findByIdAndUpdate(id, req.body, {
      new: true, 
      runValidators: true, 
  });

  if (!updateAdoptiveParent) {
  return res.status(404).json({
      status: 'error',
      message: 'Parent not found',
  });
  }

  res.status(200).json({
  status: 'success',
  message: 'Parent profile Updated Successfully',
  data: {
      adoptiveParent: updateAdoptiveParent,
  },
  });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: 'error',
      message: 'Failed to update child profile.',
      error: error.message,
    });
  }
});

export const deleteAdoptiveParent = asyncHandler(async (req, res) => {
  const { id } = req.params;

  // Send confirmation message to client
  res.status(200).json({
    status: 'confirm',
    message: 'Are you sure you want to delete this parent profile?',
  });

  // Client confirms the deletion
  if (req.body.confirmDelete) {
    const deleteAdoptiveParent = await adoptiveParent.findByIdAndDelete(id);

    if (!deleteAdoptiveParent) {
      return res.status(404).json({
        status: 'error',
        message: 'Parent profile not found',
      });
    }

    res.status(200).json({
      status: 'success',
      message: 'Parent Deleted Successfully',
    });
  }
});


