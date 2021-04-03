const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    firstname: String,
    lastname: String,
    phone: Number,
    email: String,
    password: String
        /* created_at: {
             type: Date,
             default: Date.now
         }*/
})
module.exports = mongoose.model('user', UserSchema);