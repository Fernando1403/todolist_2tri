module.exports = (app)=>{
    //abrir a view login.ejs
    app.get('/registro',(req,res)=>{
        res.render('registro.ejs')
    })

    //gravar os dados do formulario na database
    app.post('/registro',(req,res)=>{
        //recuperar as informações do formulario
        var dados = req.body
        //exibir o conteudo de dados no console
        console.log(dados)
    })
}