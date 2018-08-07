const express = require('express')
const app = express()
const port = 8080
const express_graphql = require('express-graphql')
const rootResolver = require('./graphql/resolvers/root')
const schema = require('./graphql/schema')

app.use('/graphql', express_graphql({
    schema: schema,
    graphiql: true
}))

app.get('/api/data', (req, res) => {
    res.send(dummyData)
})

app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`)
})