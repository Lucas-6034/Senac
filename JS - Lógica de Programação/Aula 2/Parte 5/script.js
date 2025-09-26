// OPERADORES ALTERNARIOS

// Forma mais comum de condicao vista atualmente
// if(condicao){
//     console.log();
// } else {
//     console.log();
// }

/*
 * 
 *  ?   ===   if       // Se for verdadeiro, executa o que tiver apos a interrogacao
 * 
 *  :   ===   else     // Se for falso, executa o que tiver apos os dois pontos
 * 
*/

// Exemplo: (condicao) ? `Valor para verdadeiro (valor para True)` : `Valor para falso (valor para False)`;

// Exemplo de condicao comum
// const pontucaoEx = 500;
// if(pontucaoEx >= 1000){
//     console.log(`Usuario VIP`);
// } else {
//     console.log(`Usuario NORMAL`);
// }

// Exemplo utilizando Operadores alternarios
const pontucaoUsuario = 1001;
const nivelUsuario = pontucaoUsuario >= 1000 ? `Usuario VIP` : `Usuario NORMAL`;

const corUsuario = ``; // Se o valor inserido for Null, undefined, ``,'',"", NaN ou false, retorna o valor #f3f3f3 da variavel abaixo.
const corPadrao = corUsuario || `#f3f3f3`;

console.log(nivelUsuario, corPadrao);

/** Falsy = Falso literal: sempre vai retornar false se tivermos os valores abaixo
 * Null, 
 * undefined, 
 * ``,
 * '',
 * "", 
 * NaN,
 * false.
*/