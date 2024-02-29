const StaffBio = require('../models/staff-bio-model');
const multer = require('multer');
const { fileUpload } = require('../middleware/file-upload');

createStaffBio = async (req, res) => {
  const body = req.body;

  if (!body) {
    return res.status(400).json({
      success: false,
      error: 'You must provide a bio'
    })
  }

  const staffBio = new StaffBio(body);

  if (!staffBio) {
    return res.status(400).json({
      success: false,
      error: err
    })
  }

  staffBio
    .save()
    .then(() => {
      return res.status(201).json({
        success: true,
        id: staffBio._id,
        message: 'Staff Bio created!'
      })
    })
    .catch(error => {
      return res.status(400).json({
        error,
        message: 'Staff Bio not created!'
      })
    })
}

updateStaffBio = async (req, res) => {
  try {

    console.log('Received request:', req.body);
    console.log('Full request object:', req);

    const staffBio = await StaffBio.findOne({ _id: req.params.id });

    if (!staffBio) {
      return res.status(404).json({
        message: 'Staff bio not found!'
      });
    }

    fileUpload.single('image')(req, res, async (err) => {
      if (err instanceof multer.MulterError) {

        console.error('Multer Error:', err);

        return res.status(400).json({
          error: err.message,
          message: 'File upload error!'
        });
      } else if (err) {

        console.error('Internal Server Error:', err);

        return res.status(500).json({
          error: err.message,
          message: 'Internal server error!'
        });
      }

      
      console.log('Received request body:', req.body);
      console.log('Received file:', req.file);

      console.log('Staff Bio before update:', staffBio);

      staffBio.name = req.body.name;
      staffBio.title = req.body.title;
      staffBio.fave = req.body.fave;

      if (req.file) {
        staffBio.image = req.file.path;
        console.log('File uploaded:', req.file);
      }

      console.log('Staff Bio after update:', staffBio);

      await staffBio.save();

      return res.status(200).json({
        success: true,
        id: staffBio._id,
        message: 'Staff bio updated!'
      });
    });
  }
  catch (error) {
    console.error(error);
    return res.status(500).json({
      error,
      message: 'Staff bio not updated!'
    });
  }
};

getStaffBios = async (req, res) => {
  try {
    const staff = await StaffBio.find({});

    if (!staff.length) {
      return res.status(404).json({ success: false, error: 'Staff Bio not found' });
    }

    return res.status(200).json({ success: true, data: staff });
  } catch (err) {
    console.error(err);
    return res.status(400).json({ success: false, error: err.message });
  }
}

module.exports = {
  createStaffBio,
  updateStaffBio,
  getStaffBios
}
