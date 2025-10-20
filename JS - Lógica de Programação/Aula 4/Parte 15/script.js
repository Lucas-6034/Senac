//////// CONTROLE DE TEMPO ////////

// O JS consegue executar comandos com atraso (depois de alguns segundos)
// ou repetir comandos várias vezes em um intervalo de tempo

// Para isso, temos duas funções muito importantes:
// setTimeout() → executa uma função depois de um tempo.
// setInterval() → executa uma função várias vezes, de tempos em tempos.

// Função que mostra a hora atual
function mostrarHora(){
    // Criamos um objeto Date, que representa a data e horas atuais
    let data = new Date();

    // Usamos o toLocaleTimeString() para formatar a hora no padrão brasileiro
    // O parâmetro {hour12: false} remove o AM/PM, mostrando no formato 24hr
    return data.toLocaleTimeString('pt-BR', {hour12: false});
}

// APLICANDO O SET INTERVAL, SET TIMEOUT, CLEAR INTERVAL

// O setInterval() vai repetir uma ação em um intervalo definido (em milissegundos)
// 1000 milissegundos equivale a 1 segundo
const timer = setInterval(function(){
    console.log(mostrarHora()); // Mostra a hora atual a cada 1 segundo
});
// O código acima vai rodar para sempre... a menos que a gente pare ele.
// Para isso, usamos o clearInterval() dentro de um setTimeout().

// O setTimeout() executa algo APENAS UMA VEZ, depois de um tempo definido 
setTimeout(function(){
    clearInterval(timer); // Para o setInterval() acima
    console.log('Timer parado após 11 Segundos');
}, 11000); // Esse bloco de código vai rodar depois de 11 segundos (11 segundos definidos em milissegundos)

// RODANDO UM CÓDIGO APÓS 6 SEGUNDOS, APENAS UMA VEZ
// Somente para exibir uma mensagem separada (esse código vai rodar antes do código acima).
setTimeout(function(){
    console.log('Olá Mundo!');
}, 6000);