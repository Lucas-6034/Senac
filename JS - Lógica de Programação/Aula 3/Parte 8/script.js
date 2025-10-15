// Switch / Case

const data = new Date('1995-11-28 00:00:00'); // Crio uma data
let diaSemana = data.getDay(); // Capturo o indice do dia da semana
let diaSemanaTexto = getDiaSemanaTexto(diaSemana);
function getDiaSemanaTexto(diaSemana){
    let diaSemanaTexto;
    switch(diaSemana){
    case 0:
        diaSemanaTexto = `Domingo`; 
        return diaSemanaTexto;
    case 1:
        diaSemanaTexto = `Segunda-feira`;
        return diaSemanaTexto;
    case 2:
        diaSemanaTexto = `Terca-feira`;
        return diaSemanaTexto;
    case 3:
        diaSemanaTexto = `Quarta-feira`;
        return diaSemanaTexto;
    case 4:
        diaSemanaTexto = `Quinta-feira`;
        return diaSemanaTexto;
    case 5:
        diaSemanaTexto = `Sexta-feira`;
        return diaSemanaTexto;
    case 6:
        diaSemanaTexto = `Sabado`;
    default:
        diaSemanaTexto = ``;
        return diaSemanaTexto;
    }
}

// let diaSemanaTextoEx;
// switch(diaSemana){
//     case 0: // Se caso o indice for 0 executa o bloco abaixo
//         diaSemanaTextoEx = `Domingo`; // Se for 0 Define um texto para a variavel diaSemanaTextoEx como Domingo
//         break; // Finaliza a funcao e pula para o proximo bloco de execucao
//     case 1: // 1 = Segunda
//         diaSemanaTextoEx = `Segunda-feira`;
//         break;
//     case 2: // 2 = Terca
//         diaSemanaTextoEx = `Terca-feira`;
//         break;
//     case 3: // 3 = Quarta
//         diaSemanaTextoEx = `Quarta-feira`;
//         break;
//     case 4: // 4 = Quinta
//         diaSemanaTextoEx = `Quinta-feira`;
//         break;
//     case 5: // 5 = Sexta
//         diaSemanaTextoEx = `Sexta-feira`;
//         break;
//     case 6: // 6 = Sabado
//         diaSemanaTextoEx = `Sabado`;
//         break;
//     default:
//         diaSemanaTextoEx = ``; // Retorna valor vazio padrao
//         break;
// }

// Forma comum
// if(diaSemana === 0){ // Verifico se o indice é estreitamente igual ao número 0
//     diaSemanaTexto = 'Domingo'; // Crio uma variável de texto da semana e dou um nome a ela tendo como referência o indice do dia
// } else if(diaSemana === 1){
//     diaSemanaTexto = 'Segunda-Feira';
// } else if(diaSemana === 2){
//     diaSemanaTexto = 'Terça-Feira';
// } else if(diaSemana === 3){
//     diaSemanaTexto = 'Quarta-Feira';
// } else if(diaSemana === 4){
//     diaSemanaTexto = 'Quinta-Feira';
// } else if(diaSemana === 5){
//     diaSemanaTexto = 'Sexta-Feira';
// } else if(diaSemana === 6){
//     diaSemanaTexto = 'Sábado';
// } else {
//     diaSemanaTexto = ''; // Retorna String vazia caso o indice fique de fora
// }

console.log(diaSemana, diaSemanaTexto);