// Condicoes

// A partir do momento que o JS encontra um else if verdadeiro(true), ele valida o valor e pula para o proximo bloco e nao vai executar mais nenhuma condicao naquele bloco.

// const numero = 15;

// if (numero >= 0 && numero <= 5){
//     console.log(`O numero esta entre 0 e 5.`);
// } else if (numero >= 6 && numero <= 10){
//     console.log(`O numero esta entre 6 e 10.`);
// } else if (numero >= 11 && numero <= 15){
//     console.log(`O numero esta entre 11 e 15.`);
// } else {
//     console.log(`O numero NAO esta entre 0 e 15.`);
// }

////////////////////////////////////////////////////////////////

// const numero = Number(prompt(`Digite um numero de 0 a 15.`));
// let numeroAtt;

// if (numero >= 0 && numero <= 5){
//     numeroAtt = `O numero esta entre 0 e 5.`;
// } else if (numero >= 6 && numero <= 10){
//     numeroAtt = `O numero esta entre 6 e 10.`;
// } else if (numero >= 11 && numero <= 15){
//     numeroAtt = `O numero esta entre 11 e 15.`;
// } else {
//     numeroAtt = `O numero NAO esta entre 0 e 15.`;
// }

// document.body.innerHTML = `${numeroAtt}`;


const pessoa = `Prof Lucas`;
const onibusCei = false; 
const onibusBraz = true;

if (pessoa && !onibusCei){
    console.log(`Prof Lucas, perdeu o Onibus para a Ceilandia.`);
} else if (pessoa && !onibusBraz){
    console.log(`Prof Lucas, perdeu o Onibus para a Brazlandia.`);
} else if (pessoa && onibusCei){
    console.log(`Prof Lucas, pegou o Onibus para a Ceilandia.`);
} else if (pessoa && onibusBraz){
    console.log(`Prof Lucas, pegou o Onibus para a Brazlandia.`);
} else {
    console.log(`Prof Lucas desistiu de pegar onibus.`);
}