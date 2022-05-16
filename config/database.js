//importar o mongoose
const mongoose = require('mongoose')
//scripts de conexao 
const conn = async()=>{
    const atlas = await mongoose.connect('mongodb+srv://Fernando1403:Cluster111@cluster1.uman3.mongodb.net/todo_list')
}

//exportar as informaçõs para o acesso externo
module.exports = conn