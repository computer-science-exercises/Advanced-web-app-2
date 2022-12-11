const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    id: {
        type: Number,
        require: true
    },
    name: {
        type: String
    },
    mail: {
        type: String
    },
    phoneNumber: {
        type: String,
        require: true,
    }
})

const User = mongoose.model('users', userSchema);
module.exports = User;
