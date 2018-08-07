const express = require('express')
const app = express()
const port = 8081
const dummyData = require('./data/clients.json')
const express_graphql = require('express-graphql')
const {
    buildSchema
} = require('graphql')

const schema = buildSchema(`
    type Query {
        persons(first_name: String): [Person]
    },
    
    type Person {
        first_name: String,
        last_name: String,
        email: String,
        gender: String,
        photo: String,
        origin: String,
      }
`)

const getPersons = function (args) {
    console.log(args)
    // const firstName = args.first_name,
    //     lastName = args.last_name,
    //     origin = args.origin;

    return dummyData.filter(person => person.first_name.indexOf(args.first_name) !== -1).slice(0, 10)
}

const rootResolver = {
    message: () => 'Hello GraphQL',
    persons: getPersons
}



app.use('/graphql', express_graphql({
    schema: schema,
    rootValue: rootResolver,
    graphiql: true
}))


app.get('/api/data', (req, res) => {
    res.send(dummyData)
})

app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`)
})