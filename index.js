const http = require('http')
const listaDeMoedas = require('./moedas.json')

const app = http.createServer((req, res) => {


    // Para permitir que outros servidores acessem o nosso servidor
    res.setHeader("Access-Control-Allow-Origin", "*")

    res.setHeader("Content-Type", "application/json")

    res.write(JSON.stringify(listaDeMoedas))
    // Serve para finalizar e enviar a resposta
    res.end()
})

app.listen(3000, () => console.log('Servidor rodando na porta 3000') )