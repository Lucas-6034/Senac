// CONDICOES
/*
    if          === SE              // if pode ser utilizado sozinho em uma condicao.
    else        === SE NAO          // Sempre que for utilizar um else, OBRIGATORIAMENTE precisamos utilizar um if antes.
    else if     === SE NAO, SE      // Podemos ter varios else if na checagem de uma condicao.

    **OBS:
    // Podemos ter apenas um else na checagem de uma condicao
    // Podemos ter condicoes sem else if, utilizando apenas if e else
*/

// const num1 = 10;
// const num2 = 11;
// if (num1 === num2){
//     console.log('numeros iguais');
// } else if (...){
//     resposta...
// } else {
//     console.log('numeros diferentes');
// }

// Crie UMA variavel do tipo const com o nome: hora e atribua um valor do tipo number(numero) a ela
// Crie condicoes que verifique os valores seguintes
// Entre 0 e 11 - imprime: Bom dia!
// Entre 12 e 18 - imprime: Boa tarde!
// Entre 19 e 23 - imprime: Boa noite!
// Se nenhuma das condicoes forem verdadeiras, imprime: 'O dia tem apenas 24 horas.'
// IMPRIMIR = console.log('');

const hora = 100;
if (hora >= 0 && hora <= 11){
    console.log(`Bom dia!`);
} else if (hora >= 12 && hora <= 18){
    console.log(`Boa tarde!`);
} else if (hora >= 19 && hora <= 23){
    console.log(`Boa Noite!`);
} else {
    console.log(`O dia tem apenas 24 horas.`);
}

const pessoa = 'Lucas';
const onibus = true;

if(pessoa && !onibus){
    console.log('Lucas perdeu o onibus');
} else {
    console.log('Lucas pegou o onibus');
}