const { Router } = require('express')
const router = Router()
const  { temperamentsTypes } = require('../controllers/Temperament')

router.get('/temperamentsTypes', temperamentsTypes)

module.exports = router