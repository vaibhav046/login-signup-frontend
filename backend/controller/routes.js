var Users = require('../models/Users');
var express = require('express');
var router = express.Router();

router.get('/login/:id', async (req, res) => {
    // console.log(req.params.id);
    let loginId = req.params.id;
    let user = await Users.findOne({ email: loginId });
    res.send({ user: user });
});

router.post('/signup', async (req, res) => {
    let userData = req.body;
    let users = new Users(userData);
    users.save((err, result) => {
        if (err) {
            console.log('saving post is an error');
            return res.status(500).send({ message: 'user is not saved' });
        }
        res.status(200).send({ message: 'user saved sucesfully' });
    });

});

module.exports = router;