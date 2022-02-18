const { Router } = require('express');
const router = Router();
const dogsRouter = require('../endpoints/Dogs/Dogs.router')
const temperamentRouter = require('./Temperament')

router.use('/dogs', dogsRouter)
router.use('/temperaments', temperamentRouter)

module.exports = router;