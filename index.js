const mongoose = require("mongoose")
require('dotenv').config()
const clientesSchema = require("./models/clientes.model")

const {DB_USER, DB_PASSWORD, DB_NAME, DB_HOST} = process.env
const URL = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`

const { setServers } = require("dns")
const http = require("http")

const server = http.createServer((request, response)=>{
    response.write("Servidor escuchando")
    response.end()
})


const clientes = mongoose.model('clientes', clientesSchema)

mongoose.connect(URL)
    .then( async (connection)=>{
        console.log('Database conected :D')

        const allClientes = await clientes.find({})
        console.log(allClientes)

        server.listen(8080,()=>{
            console.log("Servidor Conectado")
        })  
    })
    .catch((error)=>{
        console.log('Error', error)
    })