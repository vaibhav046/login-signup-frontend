var mongoose = require('mongoose');
// var bcrypt = require('bcrypt-nodejs');
var userSchema = new mongoose.Schema({
    email: String,
    password: String,
    username: String
});



// userSchema.pre('save', function (next) {
//     var user = this;

//     if (!user.isModified('password'))
//         return next();
//     bcrypt.hash(user.password, null, null, (err, hash) => {
//         //console.log(hash);
//         if (err) return next(err)
//         user.password = hash;
//         //console.log(user.password);
//         next();
//     });
// })


module.exports = mongoose.model('User', userSchema);
