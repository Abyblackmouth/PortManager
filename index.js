const mongoose = require("mongoose")

const DB_USER = 'Abraham'
const DB_PASSWORD = 'Abraham32'
const DB_NAME = 'PortManager'
const DB_HOST = 'atlascluster.qpaiavk.mongodb.net'

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

