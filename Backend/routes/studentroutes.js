const express = require('express');
const router = express.Router();
const stuController = require('../controllers/studentController')

router.post('/',stuController.createstudent);
router.get('/',stuController.getallstudents);
router.get('/:id',stuController.getsinglestudent);
router.patch('/:id',stuController.updatestudent);
router.delete('/:id',stuController.deletestudent);


module.exports = router;