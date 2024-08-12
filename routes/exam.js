const express = require('express');
const { createExam ,getAllexam, AddQuestion,getSingleExam,toggleExamEnable} = require('../controllers/exam');
const router = express.Router();

router.post('/createexam', createExam)
router.get('/getallexam', getAllexam)
router.get('/getsingle/:_id', getSingleExam)
router.put('/addquestion/:examId', AddQuestion)
router.put('/toggleExam/:examId', toggleExamEnable)


module.exports = router;