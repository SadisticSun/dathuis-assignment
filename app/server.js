const express = require('express')
const app = express()
const port = 8080


app.get('/api/routes', (req, res) => {
    const routes = [
        {
            id: 1,
            name: 'Home',
            path: '/'
        },
        {
            id: 2,
            name: 'About',
            path: '/about'
        }
    ]
    res.json(routes)
})

app.listen(port, () => {
    console.log(`Server started on ${port}`)
})