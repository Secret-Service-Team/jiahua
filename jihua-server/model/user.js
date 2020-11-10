const mongoose = require('mongoose')
const { Schema, model } = mongoose

const UserSchema = new Schema({
  username: { type: String, required: false },
  openid: { type: String, required: true },
})

const User = model('User', UserSchema)

module.exports = User