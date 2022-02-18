const { Router } = require('express')
const temperamentsRouter = require('./endpoints/Temperaments')
const dogRouter = require('./endpoints/Dogs')
const router = Router()

router.use('/Temperaments', temperamentsRouter)
router.use('/Dogs', dogRouter)

module.exports = router