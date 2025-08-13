//CRIA UM SERVIDOR EXPRESS
const express = require('express');
const {param} = require('express/lib/application')
const app = express();

app.use(express.json());

let produtos = [
    {id: 1, nome:"mouse"},
    {id: 2, nome:"Teclado"}
];

//GET
app.get('/', (req, res)=>{
    res.send('Servidor Express...')
});

//POST
app.post('/api/produtos', (req, res)=>{
    const novoProduto = {
        id:produtos.length + 1,
        nome: req.body.nome
    };
    produtos.push(novoProduto);
    res.status(201).json(novoProduto);
})

//PUT
app.put('/api/produtos/:id', (req,res)=>{
    const id = parseInt(req.params.id, 10);
    const produto = produtos.find(p=> p.id === id);
    if (isNaN(id)){
        return res.status(400).json({mensagem: 'O ID não é um número válido'});
    }
    if (!produto){
        return res.status(404).json({mensagem: 'produto não encontrado'});
    }
    const novoNome = req.body.nome;
    if (!novoNome || novoNome.trim() === ""){
        return res.status(400).json({mensagem: 'O campo "nome" é obrigatório e não pode sere vazio'});
    }

    produto.nome = novoNome;
    res.json(produto);

})

//DELETE
app.delete('/api/produtos/:id', (req,res)=>{
    const id = parseInt(req.params.id, 10);
    if (isNaN(id)){
        return res.status(400).json({mensagem: 'O ID fornecido é inválido'});
    }

    const tamanhoOriginal = produtos.length;
    produtos = produtos.filter(p => p.id !== id);
    if (tamanhoOriginal === produtos.length){
        return res.status(404).json({mensagem: "Produto não encontrado"})
    }
    res.status(204).send();
})

//Rota principal
//O GET precisa ser feito para o browser conseguir identificar
//GET  precisa do caminho e o retorno da aquisição (request e response)
app.get('/', (req, res)=>{
    res.json(produtos);
});

//Rota SOBRE
app.get('/sobre', (req, res)=>{
    res.send('Sobre');
});

//Rota PRODUTOS
app.get('/produtos', (req, res)=>{
    res.send('Página de produtos');
});

//API REST
app.get('/api/produtos', (req, res)=>{
    const produtos=[
        //ID linha, nome coluna - tudo tabela incluida do JSON
        {id: 1, nome: "Mouse"},
        {id: 2, nome: "Teclado"}
    ];

    res.json(produtos);
});

//Inicia o servidor na porta 3000
//listen fica sempre no final
app.listen(3000, ()=>{
    console.log('http://localhost:3000');
});
