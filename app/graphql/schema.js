const searchResolver = require('./resolvers');

const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLSchema,
    GraphQLList
} = require('graphql')


// Person Type
const ClientType = new GraphQLObjectType({
    name: 'Client',
    fields: () => ({
        id: {
            type: GraphQLString
        },
        first_name: {
            type: GraphQLString
        },
        last_name: {
            type: GraphQLString
        },
        email: {
            type: GraphQLString
        },
        gender: {
            type: GraphQLString
        },
        photo: {
            type: GraphQLString
        },
        origin: {
            type: GraphQLString
        }
    })
})

// Root Query
const RootQuery = new GraphQLObjectType({
    name: 'Root',
    fields: {
        clients: {
            type: new GraphQLList(ClientType),
            args: {
                search: {
                    type: GraphQLString
                },
                limit: {
                    type: GraphQLInt
                }
            },
            resolve(parentValue, args) {
                return searchResolver(parentValue, args)
            }
        }
    }
})



module.exports = new GraphQLSchema({
    query: RootQuery
})