const express = require('express');

const StaffBioCtrl = require('../controllers/staff-bio-ctrl');
const { fileUpload } = require('../middleware/file-upload');

const router = express.Router();

router.post('/staff', StaffBioCtrl.createStaffBio);
router.put('/staff/:id', fileUpload.single('image'), StaffBioCtrl.updateStaffBio);
router.get('/staff', StaffBioCtrl.getStaffBios);

module.exports = router;
