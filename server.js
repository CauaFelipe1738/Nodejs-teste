//CRIA UM SERVIDOR EXPRESS
const express = require('express');
const app = express();

//Rota principal
//O GET precisa ser feito para o browser conseguir identificar
//GET  precisa do caminho e o retorno da aquisição (request e response)
app.get('/', (req, res)=>{
    res.send('Servidor Express...')
})

//Rota SOBRE
app.get('/sobre', (req, res)=>{
    res.send('Sobre')
})

//Rota PRODUTOS
app.get('/produtos', (req, res)=>{
    res.send('Página de produtos')
})

//API REST
app.get('/api/produtos', (req, res)=>{
    const produtos=[
        //ID linha, nome coluna - tudo tabela incluida do JSON
        {id: 1, nome: "Mouse"},
        {id: 2, nome: "Teclado"}
    ];

    res.json(produtos);
})

//Inicia o servidor na porta 3000
//listen fica sempre no final
app.listen(3000, ()=>{
    console.log('http://localhost:3000')
})
