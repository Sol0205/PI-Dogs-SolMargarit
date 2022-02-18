const { Router } = require('express')
const router = Router();
const { dogs, dogsById, newDog } = require('../controllers/Dog')

router.get('/', dogs)
router.get('/?name=', dogs)
router.get('/:id', dogsById)
router.get('/new', newDog)

module.exports = router;