//importar mongoosee
const mongoose = require('mongoose')

//criar a estrutura para o armazenamento das informações da atividade
const modelo = mongoose.Schema({
    data:Date,
    tipo:String,
    entrega:String,
    disciplina:String,
    instrucoes:String,
    usuario:String 
})

//gravar a estrutura na model atividade
const atividades = mongoose.model('atividades',modelo)

//exportar os dados
module.exports = atividades