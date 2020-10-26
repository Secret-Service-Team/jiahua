const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const { Schema, model } = mongoose

const UserSchema = new Schema({
    username: { type: String, required: true },
    password: {
        type: String,
        required: true,
        set(val) {
            return bcrypt.hashSync(val, 10)
        }
    },
    name: { type: String, required: true },
    isAdmin: { type: String, default: 0 } // 身份： 1->admin 0->user
})

const User = model('User', UserSchema)

module.exports = User