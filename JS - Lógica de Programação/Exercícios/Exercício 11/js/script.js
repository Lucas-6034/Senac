/* 
Vocês devem criar uma página web simples e interativa que exiba frases motivacionais aleatórias quando o usuário clicar em um botão.
Ao final, o projeto deve ser publicado no GitHub.
Utilizem as aulas anteriores como base para esse exercício.

1) Estrutura do projeto
    Crie uma pasta chamada painel-frases.
    Dentro dela, criem:
        index.html
        pasta "css" > style.css
        pasta "js" > script.js

2) HTML
    Monte uma estrutura básica:
        Uma tag header com:
            <h1> "Painel de Frases Motivacionais"
        Uma tag main com:
            Uma section e dentro dela:
                Um parágrafo onde a frase será exibida <p id="frase">
                Um botão com o texto Gerar nova frase        
        Um rodapé (footer) simples com o nome de vocês e a data do dia

    Dica:
    Usem tags semânticas e organizem o conteúdo dentro de uma <section> centralizada.

3) CSS
    Deixem a página visualmente agradável e responsíva:
        Fundo com uma cor suave (pode ser gradiente)
        Centralizem o conteúdo na tela
        Apliquem bordas arredondadas e sombra leve no painel
        Deixem o texto da frase em destaque
        Quando tiver interação com o botão (hover), mude a cor dele

    Dica:
    Usem classes e IDs para estilizar.
    Evitem usar style direto no HTML.

4) JavaScript
    No arquivo script.js:
    Criem um array com pelo menos 6 frases motivacionais (cada frase é um texto dentro de aspas).
    Exemplo:
        const frases = [
        "Acredite no seu potencial!",
        "Você é capaz de ir além!"."
        ];

    Usem document.querySelector para pegar o botão e o parágrafo da frase.
    Criem uma função chamada gerarFrase() que:
        Escolhe uma frase aleatória do array (Math.random() e Math.floor() vão ajudar);
        Substitui o texto do parágrafo (innerText) pela frase escolhida.
        Adicionem um event listener ao botão (addEventListener("click", gerarFrase)).

    Dica:
    Podem testar no console.log() antes de aplicar no HTML.

5) Publicação no GitHub
    Abram o GitHub Desktop.
    Criem um novo repositório chamado painel-frases.
    Copiem os arquivos do projeto para dentro da pasta do repositório.

    Façam:
        Commit com mensagem: Adiciona projeto Painel de Frases Motivacionais
        Push origin
*/

//////////////Solução//////////////

const frases = [
    "Acredite no seu potencial!",
    "Você é capaz de ir além!",
    "Todo grande sonho começa com um pequeno passo.",
    "A persistência é o caminho do exito.",
    "Você pode mais do que imagina!",
    "Cada dia é uma nova chance para fazer melhor!"
];

const botao = document.querySelector(`#botao`);
const frase = document.querySelector(`#frase`);

function gerarFrase(){
    const indiceAleatorio = Math.floor(Math.random() * frases.length);
    frase.innerText = frases[indiceAleatorio];
};

botao.addEventListener('click', gerarFrase);