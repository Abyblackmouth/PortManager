const { setServers } = require("dns")
const http = require("http")

const server = http.createServer((request, response)=>{
    response.write("Servidor escuchando")
    response.end()
})

server.listen(8080,()=>{
    console.log("Servidor Conectado")
})

