const User = require('../models/user');

exports.addFollowing = async (req, res, next) => {
    try {
        const user = await User.findOne({ where: {id: req.user.id }});
        if (user) {
            await user.addFollowing(parseInt(req.params.id, 10));
            res.send('success');
        } else {
            res.status(404).send('no user');
        }
    } catch (err) {
        console.error(err);
        next(err);
    }
};

exports.deleteFollowing = async (req, res, next) => {
    try {
        const user = await User.findOne({ where: {id: req.user.id }});
        if (user) {
            await user.removeFollowing(parseInt(req.params.id, 10));
            res.send('success');
        } else {
            res.status(404).send('no user');
        }
    } catch (err) {
        console.error(err);
        next(err);
    }
};

exports.updateNick = async (req, res, next) => {
    const { nick } = req.body;
    try {
        const user = await User.findOne({ where: {id: req.user.id }});
        if (user) {
            await user.update({ nick : nick });
            return res.redirect('/');
        } else {
            res.status(404).send('no user');
        }
    } catch (err) {
        console.error(err);
        next(err);
    }
};