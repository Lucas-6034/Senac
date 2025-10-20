///////////////// ARROW FUNCTIONS /////////////////

// O que é uma função:
// Função é um bloco de código que executa uma tarefa específica.
// Ela pode receber valores (chamados de parâmetros) e devolve um resultado (return, no DOM ou no console.log)
//
// Exemplo de função tradicional
function saudacao(nome){
    return `Olá, ${nome}!`; // Retorna uma saudação com o nome informado
}
console.log(saudacao('Aluno')); // Exibe: Olá, Aluno!

// Função de seta (arrow function)
// A sintaxe usa a seta => no lugar da palavra 'function'.
// Normalmente, atribuímos a função a uma constante ou variável.

// Exemplo com arrow function
const saudacaoArrow = (nome) => {return `Olá, ${nome}!`};
console.log(saudacaoArrow('Aluno')); // Exibe: Olá, Aluno!

///////////////// SIMPLIFICAÇÃO 1 /////////////////

// Se a função retornar apenas um comando, podemos remover as chaves {} e o return.

// Exemplo completo:
const dobroCompleto = (numero) => {
    return numero * 2;
}
// Exemplo simplificado
const dobro = (numero) => numero * 2;
console.log(dobro(5)); // retorna 10


///////////////// SIMPLIFICAÇÃO 2 /////////////////

// Se a função tiver apenas 1 (UM) parâmetro, os parênteses também podem ser removidos.

const mostrarNome = nome => `Olá, ${nome}!`;
console.log(mostrarNome('Aluno'));

// Se houver mais de um parâmetro, os parênteses são obrigatórios.
const somar = (x , y) => x + y;
console.log(somar(2 , 2)); // Exibe 4 


///////////////// EXEMPLOS PRÁTICOS /////////////////

// EXEMPLO PRÁTICO 1

// Função tradicional
function maiorNumeroTradicional(a, b){
    if(a > b){ 
        return a; 
    } else { 
        return b; 
    }
}
console.log(maiorNumeroTradicional( 10, 5));

// Função com arrow function + operadores alternários
const maiorNumero = (a, b) => a > b ? a : b;
console.log(maiorNumero(100, 20));

// Explicação:
// (a, b) → são os parâmetros
// a > b ? a : b → Se lê: 'SE a for MAIOR QUE b, retorna a; SENÃO, retorna b';

// EXEMPLO PRÁTICO 2

// Quando o cálculo for simples, podemos resumir tudo em uma linha
const quadrado = n => n * n;
console.log(quadrado(5));

/////////////// OBSERVAÇÃO ///////////////

// 1. Arrow functions NÃO têm seu próprio THIS(ISSO).
// Elas herdam o 'this' do escopo(bloco) onde foram criadas.
// Isso é útil em alguns casos, porém pode causar confusão em outros.
// NEM SEMPRE É RECOMENDADA UTILIZAR

// 2. Arrow functions NÃO possuem o objeto 'arguments' (argumentos).
// Em funções tradicionais, podemos acessar 'arguments' para ver os valores passados.
// Em arrow functions, isso não existe

// 3. Arrow functions são indicadas para:
// Funções pequenas;
// Códigos curtos e diretos;
// Callbacks (funções dentro de funções, como em eventos e loops)