// ENUNCIADO:
// CRIEM UM SISTEMA DE TIMER DIGITAL
//
// 1 - No arquivo index.html:
//   Criar uma estrutura com um título principal "Meu Timer".
//   Adicionar um parágrafo com a classe "relogio" que exibirá o tempo (inicialmente "00:00:00").
//   Criar três botões com as classes "iniciar", "pausar" e "zerar".
//
// 2 - No arquivo script.js:
//   Criar uma função para iniciar o cronômetro e fazer a contagem dos segundos.
//   O cronômetro deve exibir o tempo no formato HH:MM:SS dentro do elemento com a classe "relogio".
//   Criar os eventos de clique para os três botões:
//      - "Iniciar": inicia ou continua a contagem do tempo.
//      - "Pausar": pausa o cronômetro, sem zerar o tempo atual.
//      - "Zerar": para o cronômetro e reseta o tempo para "00:00:00".
//
// 3 - Regras de funcionamento:
//   Utilizar setInterval e clearInterval para controlar a contagem do tempo.
//   Quando o cronômetro estiver pausado, adicionar a classe "pausado" no elemento do relógio.
//   Quando o cronômetro for reiniciado, remover a classe "pausado".
//
// 4 - No style.css:
//   Centralizar todo o conteúdo na tela.
//   Estilizar os botões e o relógio.
//   Quando a classe "pausado" estiver ativa, o número do relógio deve mudar de cor (ex: vermelho).



function cronometro(){
    function getSegundos(segundos){
        const data = new Date(segundos * 1000);
        return data.toLocaleString('pt-BR', {
            hour12: false,
            timeZone: 'GMT'
        });
    }
    const relogio = document.querySelector('.relogio');
    let segundos = 0;
    let timer;

    function iniciarCronometro(){
        timer = setInterval(function(){
            segundos++;
            relogio.innerHTML = getSegundos(segundos);
        }, 1000);
    }
    document.addEventListener('click', function(e){
        const elemento = e.target;
        if(elemento.classList.contains('iniciar')){
            relogio.classList.remove('pausado');
            clearInterval(timer);
            iniciarCronometro();
        }
        if(elemento.classList.contains('pausar')){
            relogio.classList.add('pausado');
            clearInterval(timer);
        }
        if(elemento.classList.contains('zerar')){
            relogio.classList.remove('pausado');
            clearInterval(timer);
            segundos = 0;
            relogio.innerHTML = '00:00:00';
        }
    });
}
cronometro();