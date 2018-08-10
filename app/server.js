const express = require('express');
const app = express();
const cors = require('cors');
const express_graphql = require('express-graphql');
const schema = require('./graphql/schema');
const port = 3001;

// Allow cross-origin requests
app.use(cors());

// Main GraphQL Endpoint
app.use('/graphql', express_graphql({
    schema: schema,
    graphiql: true
}));


app.get('/api/data', (req, res) => {
    res.send(dummyData)
});

// Start server on provided port
app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`)
});