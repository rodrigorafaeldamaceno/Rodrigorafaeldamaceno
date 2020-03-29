const Empresa = require('../../model/empresa')

module.exports = {
  index(_, ) {
    return Empresa.find()
  },
  show(_, { id }) {
    return Empresa.findById(id)
  },
  store(_, { nome, email, cnpj, telefone }) {
    return Empresa.create({ nome, email, cnpj, telefone })
  },
  update(_, { id, nome, email, telefone }) {
    return Empresa.findByIdAndUpdate(id, { nome, email, telefone })
  },
  destroy(_, { id }) {
    return Empresa.findByIdAndRemove(id)
  },
}