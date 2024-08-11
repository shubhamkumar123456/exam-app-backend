const express = require('express');
const { attempted, getSignleAllAttemptedExam, addQuestions,getSinglePaper, getAllAttemptedExam } = require('../controllers/attemptedExam');
const router = express.Router();

router.post('/create/:_userId/:_examId',attempted)
router.put('/create/:_userId/:_examId',addQuestions)
router.get('/getSingleAttempted/:_userId/:_examId',getSinglePaper)
router.get('/getAttemptedAll/:_userId/',getAllAttemptedExam)
router.get('/getSingleUser/:_userId',getSignleAllAttemptedExam)



module.exports = router