const mongoose = require('../database/database')

const ClienteSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    select: false
  }
})

module.exports = mongoose.model('Cliente', ClienteSchema)