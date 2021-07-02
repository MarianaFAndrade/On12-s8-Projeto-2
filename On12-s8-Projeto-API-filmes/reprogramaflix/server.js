//a única responsabilidade do Server é inicializar o servidor

const app = require ('./src/app.js') //aqui eu só crio a const app e faço a requisição pea ele puxar ela do arquivo app.js

app.listen(3000, () =>{
    console.log('Servidor rodando na porta 3000') //aqui eu vou e faço a inicialização do servidor
})

