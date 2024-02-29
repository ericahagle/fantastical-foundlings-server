const StaffBio = require('../models/staff-bio-model');

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
  const body = req.body;

  if (!body) {
    return res.status(400).json({
      success: false,
      error: 'You must provide something in the request body to update'
    });
  }

  try {
    const staffBio = await StaffBio.findOne({ _id: req.params.id });

    if (!staffBio) {
      return res.status(404).json({
        message: 'Staff bio not found!'
      });
    }
    staffBio.name = body.name
    staffBio.title = body.title
    staffBio.image = body.image
    staffBio.fave = body.fave

    await staffBio.save();

    return res.status(200).json({
      success: true,
      id: staffBio._id,
      message: 'Staff bio updated!'
    })
  }
  catch (error) {
    return res.status(500).json({
      error,
      message: 'Staff bio not updated!'
    })
  }
}

deleteStaffBio = async (req, res) => {
  try {
    const staffBio = await StaffBio.findOneAndDelete({ _id: req.params.id });

    if (!staffBio) {
      return res.status(404).json({ success: false, error: `Staff Bio not found` });
    }

    return res.status(200).json({ success: true, data: staffBio })
  } catch (err) {
    return res.status(400).json({ success: false, error: err.message });
  }
}

getStaffBioById = async (req, res) => {
  try {
    const staffId = req.params.id;
    const staffMember = await StaffBio.findOne({ _id: staffId });

    if (!staffMember) {
      return res.status(404).json({ success: false, error: 'Staff Bio not found' });
    }

    return res.status(200).json({ success: true, data: staffMember });
  } catch (err) {
    console.error(err);
    return res.status(400).json({ error: err.message });
  }
}

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
  deleteStaffBio,
  getStaffBioById,
  getStaffBios
}
