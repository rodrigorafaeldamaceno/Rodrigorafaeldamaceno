//define as resolvers ou 'rotas' da aplicação

const users = [
  { id: '1', name: 'Rodrigo Rafael', email: 'rodrigorafaeldamaceno@gmail.com', age: 25 },
  { id: '2', name: 'Cleonice da maceno', email: 'cleonice@gmail.com', age: 38 },
  { id: '3', name: 'Jair Dias de Souza', email: 'jair@gmail.com', age: 40 }
]

module.exports = {
  Query: {
    users: () => users,
    user: (_, { id }) => users[id - 1]
  },
  Mutation: {
    createUser: (_, { name, email, age }) => {
      const user = { id: users.length + 1, name, email, age }
      users.push(user)
      return user
    },
    editUsers: (_, { id, name, email, age }) => {
      let user
      users.forEach((value) => {
        if (value.id === id) {
          if (name) value.name = name
          if (email) value.email = email
          if (age) value.age = age
          console.log(value.name)
          user = value
        }
      })
      return user
    }
  }

}



