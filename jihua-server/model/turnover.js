const mongoose = require('mongoose')
const { Schema, model } = mongoose

const turnoverSchema = new Schema({
    date: { type: String, required: true },
    typeId: { type: String, required: true },
    remarks: { type: String, required: false },
    cost: { type: Number, required: true, default: 0 }
})

const Turnover = model('turnover', turnoverSchema)

module.exports = Turnover