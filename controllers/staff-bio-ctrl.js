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

getStaffBios = async (req, res) => {
  try {
    const staff = await StaffBio.find({});

    if(!staff.length) {
      return res.status(404).json({ success: false, error: 'Staff Bio not found' });
    }

    return res.status(200).json({ success: true, data: staff});
  } catch (err) {
    console.error(err);
    return res.status(400).json({ success: false, error: err.message });
  }
}

module.exports = {
  createStaffBio,
  getStaffBios
}
