const express = require('express');
const router = express.Router();
const { createSnapshot } = require('../controllers/viewersSnapshotController');
const { protect, admin } = require('../middleware/authMiddleWare');




//router.get("/", protect, getViewers);
router.get("/",  protect, createSnapshot);




module.exports = router;