const Boleto = require('../../model/boleto')
const Empresa = require('../../model/empresa')
const Cliente = require('../../model/cliente')


module.exports = {
  async index(_, { cliente, empresa, distinct }) {
    if (distinct) {
      const emp = await Boleto.distinct('empresa', { cliente }).populate('empresa')

      const boletos = emp.map(async (value) => {
        const boleto = await Boleto.findOne({ empresa: value }).populate(`cliente`).populate(`empresa`)
        return boleto
      })
      console.log(boletos)

      return boletos
    }

    if (!cliente && !empresa)
      return Boleto.find().populate(`cliente`).populate(`empresa`)

    if (!empresa)
      return Boleto.find({ cliente }).populate(`cliente`).populate(`empresa`)

    if (!cliente)
      Boleto.find({ empresa }).populate(`cliente`).populate(`empresa`)

    return Boleto.find({ cliente, empresa }).populate(`cliente`).populate(`empresa`)

  },
  show(_, { id }) {
    return Boleto.findById(id).populate(`cliente`).populate(`empresa`)
  },
  async store(_, { valor, dataVencimento, mesReferencia, status, codigo, link, idCliente, idEmpresa }) {
    if (!link) link = 'https://drive.google.com/open?id=1FhDpSBSNgz_wR7nNtx8f-9SVuMEZbp92'

    if (!status) status = 'ABERTO'

    const empresa = await Empresa.findById(idEmpresa)

    const cliente = await Cliente.findById(idCliente)

    if (!empresa || !cliente)
      return { "error": "sem empresa ou cliente" }

    return Boleto.create({ valor, dataVencimento, mesReferencia, status, codigo, link, cliente, empresa })
  },
  destroy(_, { id }) {
    return Boleto.findByIdAndRemove(id)
  },
}