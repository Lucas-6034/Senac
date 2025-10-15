///////////////// WHILE ////////////////
const nome = "Aluno"; // cria constante chamada nome e guarda o texto (valor) Aluno nessa variável
let i = 0;// Cria uma variavel chamada i (indice) e inicia com o valor 0 

// while(i <= 10){// ENQUANTO 'i' for menor ou igual a 10, repete o bloco abaixo
//     console.log(i); // Mostrar o valor de 'i' no console
//     i++; // Incrementa +1 na variável 'i' a cada repetição
// }
// while (i < nome.length){ // ENQUANTO 'i' for menor que o tamanho da palavra 'Aluno', repete o bloco abaixo
//     console.log(nome[i]); // Mostra a letra correspondente à posição 'i'
//     i++; // Incrementa +1 na variável 'i' a cada repetição e vai para a próxima letra
// }

///////////////// FUNÇÃO PARA GERAR NÚMEROS ALEATÓRIOS ////////////////

function random(min, max){ // Cria função chamada 'random' com dois parâmetros: mínimo e máximo
    const r = Math.random() * (max - min + 1) + min; // gera um número aleatório entre 'min' e 'max'
    return Math.floor(r); // Arredonda o número aleatório para baixo e retorna o valor inteiro
}
const min = 1; // valor mínimo
const max = 10; // valor máximo
// let rand = 10; // cria variável 'rand' (random === aleatório) e atribui o valor 10 inicialmente
let rand = random(min, max); // começa com um número aleatório dentro do intervalo

///////////////// EXEMPLO COM O WHILE ////////////////

// while(rand !== 10){ // ENQUANTO o valor de rand for diferente de 10, repete o bloco abaixo
//     rand = random(min, max); // Gera um novo número aleatório e guarda o valor na variável rand
//     console.log(rand); // Exibe o valor gerado
// }

do { // o bloco DO (FAÇA) será executado pelo menos uma vez 
    rand = random(min, max); // Gera um novo número aleatório e guarda o valor na variável rand
    console.log(rand); // Exibe o valor gerado
    if(rand === 10){
        console.log("Número 10 encontrado! Loop encerrado.");
    }
} while(rand !== 10); // ENQUANTO o valor de rand for diferente de 10, o laço de repetição continua rodando
