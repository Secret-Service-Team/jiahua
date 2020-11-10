const mongoose = require('mongoose')
const { Schema, model } = mongoose

const averageSchema = new Schema({
  end: { type: String, required: true },
  start: { type: String, required: true },
  openid: { type: String, required: true },
  fid: { type: String, required: true },
})

const Average = model('average', averageSchema)

module.exports = Average