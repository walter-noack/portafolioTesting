const User = require('../models/user.model');

const createUser = (req, res) => {
    const user = new User(req.body);

    user.save().then(() => {
        res.json({
            ok: true,
            user
        });
    }).catch(() => {
        res.json({
            ok: false,
            msg: 'Create user failed'
        });
    })
}

const getUser = (req, res) => {
    res.json({
        ok: true,
        msg: 'Hola Mundo'
    })
};


module.exports = {
    getUser,
    createUser
}