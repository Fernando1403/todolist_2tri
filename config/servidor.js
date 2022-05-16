//importar o express
const express = require('express')
//executar o express
const app = express()
//definir a porta do servidor local
const porta = 3535

//definir a pasta dos arquivos esteticos (css,imagens,jquery)
app.use(express.static('./assets'))

//exportar o app e a porta
module.exports={app,porta}