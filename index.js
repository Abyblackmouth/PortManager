const mongoose = require("mongoose")

const DB_USER = ''
const DB_PASSWORD = ''
const DB_NAME = ''
const DB_HOST = ''

const URL = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`

mongoose.connect(URL)
    .then((connection)=>{
        console.log('Database conected :D')
    })
    .catch((error)=>{
        console.log('Error', error)
    })


const { setServers } = require("dns")
const http = require("http")

const server = http.createServer((request, response)=>{
    response.write("Servidor escuchando")
    response.end()
})

server.listen(8080,()=>{
    console.log("Servidor Conectado")
})

