const router = require('express').Router();
const UserController = require('../../controllers/UserController');

router.get('/', UserController.get);
router.get('/:id', UserController.update);
router.post('/current', UserController.current);
router.post('/', UserController.store);
router.put('/:id', UserController.update);
router.delete('/:id', UserController.destroy);

module.exports = router;
