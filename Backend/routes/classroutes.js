const express = require('express');
const router = express.Router();
const clasController = require('../controllers/classController')

router.post('/',clasController.createclass);
router.get('/',clasController.getallclasses);
router.get('/:id',clasController.getsingleclass);
router.patch('/:id',clasController.updateclass);
router.delete('/:id',clasController.deleteclass);


module.exports = router;