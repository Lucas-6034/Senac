// Operadores Alternarios
//  ? === if    // se for verdadeiro, executa o que vier adiante
//  : === else  // se for falso, executa o que vier adiante
//  Exemplo: (condicao) ? `Valor para verdadeiro` : `Valor para falso`;

function zeroAEsquerda(num){
    return num >= 10 ? num : `0${num}`; // Operadores Alternarios
}

// Formatando a data para o padrao Brasileiro
function formataData(data){ 
    const dia = zeroAEsquerda(data.getDate()); // captura o dia
    const mes = zeroAEsquerda(data.getMonth() + 1); // captura o mes
    const ano = data.getFullYear(); // captura o ano

    const hora = zeroAEsquerda(data.getHours()); // captura a hora
    const min = zeroAEsquerda(data.getMinutes()); // captura os minutos
    const seg = zeroAEsquerda(data.getSeconds()); // captura os segundos

    return `${dia}/${mes}/${ano} - ${hora}:${min}:${seg}`; // Retorna ao objeto data a string formatada
}

const data = new Date(); // Cria funcao que captura a data, porem no padrao americano
const dataBrasil = formataData(data); // Cria uma variavel para armazenar o resutado da funcao formataData no padrao Brasileiro
console.log(dataBrasil); // Exibe a data formatada