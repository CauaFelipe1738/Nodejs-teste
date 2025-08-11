console.log("Início...");

setTimeout(()=>{
    console.log('Esperou 2 segundos');
}, 2000);

console.log("Fim...");

//Pega a função exportada no somar.js
const somar = require('./somar');
console.log(somar(10,3));