////////////// CONTINUE E BREAK //////////////

// Continue → pula para a próxima repetição do laço
// Break → interrompe o laço completamente

const numeros = [1,2,3,4,5,6,7,8,9,10]; // Cria array com os números de 1 a 10

////////////// EXEMPLO COM FOR e OF //////////////

// for(let numero of numeros){ // Percorre cada número dentro do array 'numeros'
//     // Se o número for 2 ou 5
//     if(numero === 2 || numero === 5){ // || (ALT + 124)
//         console.log(`Pulei os numeros 2 e 5`); // Mostra mensagem informando que pulou esses números
//         continue; // Volta para o início do laço e ignora o restante do código abaixo
//     }
//     // Se o número for 8
//     if(numero === 8){
//         console.log('Pulei o número 8');
//         continue;
//     }
//     console.log(numero);
//     // Se o número for 7
//     if(numero === 7){
//         console.log('7 encontrado!');
//         break; // Interrompe completamente todo o laço de repetição
//     }
// }

////////////// EXEMPLO FOR e IN //////////////

// for(let i in numeros){ // Percorre os indices do array numeros 
//     let numero = numeros[i]; // Acessa o numero correspondente ao indice atual
//     if(numero === 2 || numero === 5){ 
//         console.log(`Pulei os numeros 2 e 5`);
//         continue;
//     }
//     if(numero === 8){
//         console.log('Pulei o número 8');
//         continue;
//     }
//     console.log(numero);
//     if(numero === 7){
//         console.log('7 encontrado!');
//         break;
//     }
// }

////////////// EXEMPLO COM FOR CLASSICO //////////////

// for(let i = 0; i < numeros.length; i++){
//     let numero = numeros[i];
//     if(numero === 2 || numero === 5){ 
//         console.log(`Pulei os numeros 2 e 5`);
//         continue;
//     }
//     if(numero === 8){
//         console.log('Pulei o número 8');
//         continue;
//     }
//     console.log(numero);
//     if(numero === 7){
//         console.log('7 encontrado!');
//         break;
//     }
// }

///////////// EXEMPLO COM WHILE /////////////
// let it = 0;
// while(it < numeros.length){
//     let numero = numeros[it];
//     if(numero === 2 || numero === 5){ 
//         console.log(`Pulei os numeros 2 e 5`);
//         it++;
//         continue;
//     }
//     if(numero === 8){
//         console.log('Pulei o número 8');
//         it++;
//         continue;
//     }
//     console.log(numero);
//     if(numero === 7){
//         console.log('7 encontrado!');
//         it++;
//         break;
//     }
//     it++;
// }

///////////// EXEMPLO COM DO e WHILE /////////////
let i = 0;
do {
    let numero = numeros[i];
    if(numero === 2 || numero === 5){ 
        console.log(`Pulei os numeros 2 e 5`);
        i++;
        continue;
    }
    if(numero === 8){
        console.log('Pulei o número 8');
        i++;
        continue;
    }
    console.log(numero);
    if(numero === 7){
        console.log('7 encontrado!');
        i++;
        break;
    }
    i++;
} while (i < numeros.length);