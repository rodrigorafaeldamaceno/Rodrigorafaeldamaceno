const mongoose = require('../database/database')

const BoletoSchema = new mongoose.Schema({
  valor: {
    type: Number,
    required: true,
  },
  dataVencimento: {
    type: String,
    required: true,
  },
  mesReferencia: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  codigo: {
    type: String,
    required: true,
  },
  link: {
    type: String,
  },
  cliente: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Cliente',
    required: true
  },
  empresa: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Empresa',
    required: true
  },
})

module.exports = mongoose.model('Boleto', BoletoSchema)