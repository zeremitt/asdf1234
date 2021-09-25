const mongoose = require('mongoose')

var Schema = mongoose.Schema

var userSchema = new Schema({
    username: {
        type: String
    },
    password: {
        type: String
    }
},
    {
        timestamps: true
    }
)

var User = mongoose.model('User', userSchema)

exports.User = User
exports.userSchema = userSchema