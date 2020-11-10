const mongoose = require('mongoose')
const { Schema, model } = mongoose

const presetSchema = new Schema({
  typeId: { type: String, required: true },
  frequent: { type: String, required: true },
  openid: { type: String, required: true },
})

const Preset = model('preset', presetSchema)

module.exports = Preset