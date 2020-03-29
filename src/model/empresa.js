const mongoose = require('../database/database')

const EmpresaSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  cnpj: {
    type: String,
    required: true,
  },
  telefone: {
    type: String,
    required: true,
  },
})

module.exports = mongoose.model('Empresa', EmpresaSchema)