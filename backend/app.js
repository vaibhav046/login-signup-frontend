var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
// var Users = require('./models/Users');
var routes = require('./controller/routes');
var cors = require('cors');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors('*'));
app.use('/default', routes);

// app.get('/login/:id', async (req, res) => {
//     console.log('here');
//     let loginId = req.params.id;
//     let user = await Users.findOne({ "username": loginId });
//     res.send({ user: user });
// });

// app.post('/signup', async (req, res) => {
//     let userData = req.body;
//     let users = new Users(userData);
//     users.save((err, result) => {
//         if (err) {
//             console.log('saving post is an error');
//             return res.Status(500).send({ message: 'user is not saved' });
//         }
//         res.sendStatus(200);
//     });

// });

mongoose.connect('mongodb://localhost:27017/local', { useNewUrlParser: true }, (err) => {
    if (!err)
        console.log('mongo started');
});

app.listen(3000, (err) => {
    if (!err)
        console.log('Server runninng on 3000');
})