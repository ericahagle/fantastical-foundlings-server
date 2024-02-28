const express = require('express');

const StaffBioCtrl = require('../controllers/staff-bio-ctrl');

const router = express.Router();

router.post('/staff', StaffBioCtrl.createStaffBio);
router.get('/staff', StaffBioCtrl.getStaffBios);

module.exports = router;
