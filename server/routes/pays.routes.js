const router = require('express').Router();
const controller = require('../controllers/pays.controller')

router.post('/add', controller.add );
router.post('/delete/:id', controller.deleteById);
router.post('/update/:id', controller.updateById);
router.post('/filter/:month', controller.filterByMonth);
router.post('/filterByKey/:key', controller.filterByKey);
router.get('/getAll', controller.getAll);


module.exports = router