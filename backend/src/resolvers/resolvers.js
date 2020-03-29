//define as resolvers ou 'rotas' da aplicação
const clientes = require('./controllers/clienteController')
const boletos = require('./controllers/boletoController')
const empresas = require('./controllers/empresaController')

module.exports = {
  Query: {
    // clientes
    getClientes: clientes.index,
    getCliente: clientes.show,

    // empresas
    getEmpresas: empresas.index,

    // boletos
    getBoletos: boletos.index,
    getBoleto: boletos.show
  },
  Mutation: {
    // clientes
    criarCliente: clientes.store,
    editarCliente: clientes.update,
    deletarCliente: clientes.destroy,

    // empresas
    criarEmpresa: empresas.store,
    deletarEmpresa: empresas.destroy,
    editarEmpresa: empresas.update,

    // boletos
    criarBoleto: boletos.store,
    deletarBoleto: boletos.destroy,
  }
}
