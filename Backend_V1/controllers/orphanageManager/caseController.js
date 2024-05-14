import asyncHandler from 'express-async-handler';
import Case from '../../models/CaseModel.js';
  
export const createCase = asyncHandler(async (req, res) => {
    try {
      const newCase = await Case.create(req.body);
      res.status(200).json({
        status: 'success',
        message: 'Case Created Successfully',
        data: {
          Case: newCase,
        },
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        status: 'error',
        message: 'Failed to create Case.',
        error: error.message,
      });
    }
  });

export const getCase = asyncHandler(async (req, res) => {
  try {
    const Cases = await Case.find();

    res.status(200).json({
      status: 'success',
      data: {
        Cases,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: 'error',
      message: 'Failed to fetch Case.',
      error: error.message,
    });
  }
});

export const getSingleCase = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const caseData = await Case.findById(id);

  if (!caseData) {
    return res.status(404).json({
      status: 'error',
      message: 'Case not found',
    });
  }

  res.status(200).json({
    status: 'success',
    data: {
      Case: caseData,
    },
  });
});

export const updateCase = asyncHandler(async (req, res) => {
  try {
      const { id } = req.params; 
      const updateCase = await Case.findByIdAndUpdate(id, req.body, {
      new: true, 
      runValidators: true, 
  });

  if (!updateCase) {
  return res.status(404).json({
      status: 'error',
      message: 'Case not found',
  });
  }

  res.status(200).json({
  status: 'success',
  message: 'Case Updated Successfully',
  data: {
      Case: updateCase,
  },
  });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: 'error',
      message: 'Failed to update Case.',
      error: error.message,
    });
  }
});

export const deleteCase = asyncHandler(async (req, res) => {
  const { id } = req.params;

  res.status(200).json({
    status: 'confirm',
    message: 'Are you sure you want to delete this data?',
  });

  if (req.body.confirmDelete) {
    const deleteCase = await Case.findByIdAndDelete(id);

    if (!deleteCase) {
      return res.status(404).json({
        status: 'error',
        message: 'Case not found',
      });
    }

    res.status(200).json({
      status: 'success',
      message: 'Case Deleted Successfully',
    });
  }
});

