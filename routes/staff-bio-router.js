const express = require('express');

const StaffBioCtrl = require('../controllers/staff-bio-ctrl');

const router = express.Router();

router.post('/staff', StaffBioCtrl.createStaffBio);
router.put('/staff/:id', StaffBioCtrl.updateStaffBio);
router.get('/staff', StaffBioCtrl.getStaffBios);

module.exports = router;
