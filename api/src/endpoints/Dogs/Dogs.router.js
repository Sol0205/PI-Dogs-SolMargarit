const { Router } = require('express')
const router = Router();
const { getAll, getById, create } = require('./Dogs.controller');

router.get('/', getAll)
router.get('/?name=', getAll)
router.get('/:id', getById)
router.get('/new', create)

module.exports = router;