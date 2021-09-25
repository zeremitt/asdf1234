const { makeExecutableSchema } = require('graphql-tools')
const { resolvers } = require('../resolvers/guessResolver')

const typeDefs = `
    type Query {

        getUser(
            _id: ID, 
            username: String
        ): User
    }
    type Mutation {

        createUser(
            username: String!,
            password: String!
        ): User
    }

    scalar Date

    type User {
        _id: ID
        username: String
        password: String
    }
`

module.exports = makeExecutableSchema({
    typeDefs: typeDefs,
    resolvers: resolvers
}) 