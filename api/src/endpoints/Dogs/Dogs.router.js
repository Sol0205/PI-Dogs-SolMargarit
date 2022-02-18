const { Router } = require('express')
const router = Router();
const { getAll, getById, create } = require('./Dogs.controller');

router.get('/', getAll)
router.get('/dogs/?name=', getAll)
router.get('/dogs/:id', getById)
router.get('/new', create)

module.exports = router;