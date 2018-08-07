const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLSchema
} = require('graphql')

const ClientData = require('../data/clients.json')

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
    name: 'RootQueryType',
    fields: {
        client: {
            type: ClientType,
            args: {
                search: {
                    type: GraphQLString
                },
                limit: {
                    type: GraphQLInt
                }
            },
            resolve(parentValue, args) {
                const searchQuery = args.search.toLowerCase();
                console.log('SEARCHING FOR: ' + searchQuery)

                let results = [];
                for (let i = 0; i < args.limit; i++) {
                    let formattedFirstName = ClientData[i].first_name.toLowerCase();
                    let formattedLastName = ClientData[i].last_name.toLowerCase();
                    let formattedOrigin = ClientData[i].origin.toLowerCase();

                    if (formattedFirstName.indexOf(searchQuery) > -1 ||
                        formattedLastName.indexOf(searchQuery) > -1 ||
                        formattedOrigin.indexOf(searchQuery) > -1) {
                        results.push(ClientData[i])
                    }
                }
                console.log('RESULTS: ' + results)
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery
})