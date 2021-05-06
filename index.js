require('dotenv').config()
//ADD STUFF FOR FRONT END TO RENDER ON HEROKU
const path = require('path') //this is a node thing

console.log('it is working')

const express = require('express')

const server = express()

//RENDER FRONTEND ON HEROKU
server.use(express.static(path.join(__dirname, 'client/build'))) //node thing

server.use(express.json())

const PORT = process.env.PORT 

server.get('/api/*', (req, res) => {
    res.json({
        cohort: 'Web 41',
    })
})

server.use('*', (_, res) => {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html')) //render REACT APP, which is the index.html
})

server.listen(PORT, ()=> {
    console.log(`listening on ${PORT}`)
})
