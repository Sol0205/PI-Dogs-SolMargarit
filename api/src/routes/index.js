const { Router } = require('express');
const router = Router();
const dogsRouter = require('./Dogs')
const temperamentRouter = require('./Temperament')

router.use('/dogs', dogsRouter)
router.use('/temperaments', temperamentRouter)

module.exports = router;