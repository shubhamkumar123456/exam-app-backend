const express = require('express');
const { createUser, loginUSer, getSingle, getAllusers } = require('../controllers/user');
const router = express.Router();

router.post('/create', createUser)
router.post('/login', loginUSer)
router.get('/get/:_id', getSingle)
router.get('/getall', getAllusers)



module.exports = router;