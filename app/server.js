const express = require('express')
const app = express()
const port = 8080
const dummyData = require('./data/clients.json')


app.get('/api/data', (req, res) => {
    res.send(dummyData)
})

app.listen(port, () => {
    console.log(`Server started on ${port}`)
})