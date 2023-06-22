const {getDataco, postDataco, putDataco, deleteDataco} = require('../controller/crud');

const express = require('express');
const router  = express.Router();

router.get('/getData', getDataco);
router.post('/postData', postDataco);
router.put('/putData/:ID', putDataco);
router.delete('/deleteData/:ID', deleteDataco);


module.exports = router