const express = require('express');
const router = express.Router();
const teacController = require('../controllers/teacherController')

router.post('/',teacController.createteacher);
router.get('/',teacController.getallteachers);
router.get('/:id',teacController.getsingleteacher);
router.patch('/:id',teacController.updateteacher);
router.delete('/:id',teacController.deleteteacher);


module.exports = router;