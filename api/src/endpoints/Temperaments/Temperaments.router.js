const { Router } = require("express")
const router = Router()
const { temperamentsTypes } = require('./Temperaments.controller')

router.get('/types', temperamentsTypes)

module.exports = router