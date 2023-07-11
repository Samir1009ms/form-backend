const express = require('express');
const { getProfile, addProfile, updateProfile, deleteProfile } = require('../controllers/profile.js')
const router = express.Router();

router.get('/getProfile', getProfile);
router.post('/addProfile', addProfile);
router.put('/updateProfile/:id', updateProfile);
// router.delete('/deleteProfile/:userId/delete/:profileId',deleteProfile);

module.exports = router;
