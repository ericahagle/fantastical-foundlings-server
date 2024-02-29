const express = require('express');

const StaffBioCtrl = require('../controllers/staff-bio-ctrl');

const router = express.Router();

router.post('/staff', StaffBioCtrl.createStaffBio);
router.put('/staff/:id', StaffBioCtrl.updateStaffBio);
router.delete('/staff/:id', StaffBioCtrl.deleteStaffBio);
router.get('/staff/:id', StaffBioCtrl.getStaffBioById);
router.get('/staff', StaffBioCtrl.getStaffBios);

module.exports = router;
