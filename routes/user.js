const express = require('express');

const { isLoggedIn } = require('./middlewares');
const { addFollowing, deleteFollowing, updateNick } = require('../controllers/user')

const router = express.Router();

router.post('/:id/follow', isLoggedIn, addFollowing);
router.delete('/:id/follow', isLoggedIn, deleteFollowing);
router.post('/update', isLoggedIn, updateNick)

module.exports = router;