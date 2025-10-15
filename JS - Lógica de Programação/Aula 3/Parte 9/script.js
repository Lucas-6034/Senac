// Seleciona o elemento <h1> que está dentro de um elemento com a classe .container
const h1 = document.querySelector('.container h1');

// Função que recebe um número (0 a 6) representando o dia da semana
// e retorna o nome correspondente por extenso (em português)
function getDiaSemanaTexto(diaSemana) {
    switch (diaSemana) {
        case 0:
            return 'domingo'; // 0 = domingo
        case 1:
            return 'segunda-feira'; // 1 = segunda
        case 2:
            return 'terça-feira'; // 2 = terça
        case 3:
            return 'quarta-feira'; // 3 = quarta
        case 4:
            return 'quinta-feira'; // 4 = quinta
        case 5:
            return 'sexta-feira'; // 5 = sexta
        case 6:
            return 'sábado'; // 6 = sábado
        default:
            return ''; // caso o número não seja de 0 a 6
    }
}

// Função que recebe um número (0 a 11) representando o mês
// e retorna o nome do mês correspondente por extenso
function getNomeMes(numeroMes) {
    const meses = [
        'janeiro',   // 0
        'fevereiro', // 1
        'março',     // 2
        'abril',     // 3
        'maio',      // 4
        'junho',     // 5
        'julho',     // 6
        'agosto',    // 7
        'setembro',  // 8
        'outubro',   // 9
        'novembro',  // 10
        'dezembro'   // 11
    ];
    return meses[numeroMes] || ''; // retorna o mês ou string vazia se inválido
}

// Função que adiciona um zero à esquerda de números menores que 10
// Ex: 5 -> '05', 12 -> '12'
function zeroAEsquerda(num) {
    return num >= 10 ? num : `0${num}`;
}

// Função que formata uma data do tipo Date para uma string legível
// Ex: "quarta-feira, 1 de outubro de 2025 às 14:05:09"
function formataData(data) {
    const diaSemana = getDiaSemanaTexto(data.getDay()); // dia da semana por extenso
    const dia = data.getDate();                          // número do dia (1 a 31)
    const mes = getNomeMes(data.getMonth());            // mês por extenso
    const ano = data.getFullYear();                     // ano com 4 dígitos
    const hora = zeroAEsquerda(data.getHours());        // horas com 2 dígitos
    const min = zeroAEsquerda(data.getMinutes());       // minutos com 2 dígitos
    const seg = zeroAEsquerda(data.getSeconds());       // segundos com 2 dígitos

    // Monta e retorna a string final formatada
    return `${diaSemana}, ${dia} de ${mes} de ${ano} às ${hora}:${min}:${seg}`;
}

// Função que atualiza o conteúdo do <h1> a cada 1 segundo (1000 ms)
// para mostrar a data e hora atualizadas em tempo real
setInterval(() => {
    const dataAtual = new Date();                // cria uma nova data com o momento atual
    h1.innerHTML = formataData(dataAtual);       // insere a data formatada dentro do <h1>
}, 1000);
