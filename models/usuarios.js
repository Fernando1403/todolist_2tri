//importar mongoosee
const mongoose = require('mongoose')

//criar a estrutura para o armazenamento das informações do usuario
const modelo = mongoose.Schema({
    nome:String,
    email:String,
    senha:String 
})

//gravar a estrutura na model usuarios
const usuarios = mongoose.model('usuarios',modelo)

//exportar os dados
module.exports = usuarios