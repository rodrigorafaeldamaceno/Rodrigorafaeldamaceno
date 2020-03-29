const Cliente = require('../../model/cliente')

module.exports = {
  index(_) {
    return Cliente.find()
  },
  show(_, { id, email, password }) {
    if (id)
      return Cliente.findById(id)

    if (email && password)
      return Cliente.findOne({ email, password })
  },
  store(_, { nome, email , password}) {
    return Cliente.create({ nome, email , password})
  },
  update(_, { id, nome, email }) {
    return Cliente.findByIdAndUpdate(id, { nome, email })
  },
  destroy(_, { id }) {
    return Cliente.findByIdAndRemove(id)
  },
}