const typeDefs = `

  type Product {
    _id: ID
    name: String
    description: String
    fragranceNotes: String
    signatureNotes: String
    inspiration: String
    intendedExperience: String
    pleaseNote: String
    image: String
    quantity: Int
    price: Float
    size: String
  }

  type Order {
    _id: ID
    purchaseDate: String
    products: [Product]
  }

  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    orders: [Order]
  }

  type Checkout {
    session: ID
  }

  type Auth {
    token: ID
    user: User
  }

  input ProductInput {
    _id: ID
    name: String
    description: String
    fragranceNotes: String
    signatureNotes: String
    inspiration: String
    intendedExperience: String
    pleaseNote: String
    image: String
    quantity: Int
    price: Float
    size: String
    purchaseQuantity: Int
  }

  type Query {
    products(name: String): [Product]
    product(_id: ID!): Product
    user: User
    users: [User]
    order(_id: ID!): Order
    checkout(products: [ProductInput]): Checkout
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    addOrder(products: [ID]!): Order
    updateUser(firstName: String, lastName: String, email: String, password: String): User
    updateProduct(_id: ID!, quantity: Int!): Product
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
