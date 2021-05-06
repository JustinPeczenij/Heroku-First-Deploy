require('dotenv').config()
console.log('it is working')
const express = require('express')

const server = express()
server.use(express.json())

server.get('/api/*', (req, res) => {
    res.json({
        cohort: 'Web 41',
    })
})

const PORT = process.env.PORT || 5000

server.listen(PORT, ()=> {
    console.log(`listening on ${PORT}`)
})
