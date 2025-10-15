// ENUNCIADO
// CRIEM UM SISTEMA DE BIBLIOTECA
// 1 - No arquivo index.html, criem um formulário com os campos: Titulo, Autor e Ano de publicação
// 2 - No script.js - Cada livro cadastrado deve ser salvo em um array de objetos {titulo, autor, ano}
// 3 - Liste todos os livros cadastrados no DOM (no HTML)
// 4 - Ainda no JS, faça uma verificação que
// // Se o ano for antes de 2000, mostrar em vermelho com a "tag" Clássico
// // Se não, mostrar em verde com a "tag" Moderno
// 5 - Ao final, estilize a página com style.css externo

const biblioteca = [];
const form = document.querySelector('#form-livro');
const lista = document.querySelector('#lista');

form.addEventListener('submit', function(e){
    e.preventDefault();

    const titulo = form.querySelector('#titulo').value;
    const autor = form.querySelector('#autor').value;
    const ano = form.querySelector('#ano').value;

    const livro = { titulo, autor, ano }
    biblioteca.push(livro);

    mostrarLivros();
    form.reset();
});
function criaTag(){
    const span = document.createElement('span');
    return span;
}
function mostrarLivros(){
    lista.innerHTML = '';
    for(let i = 0; i < biblioteca.length; i++){
        const livro = biblioteca[i];
        const card = document.createElement('div');
        card.classList.add('card');
        const span = criaTag();
        if(livro.ano < 2000){ 
            card.classList.add('classico');
            span.classList.add('tag-classica');
        } 
        else { 
            card.classList.add('moderno');
            span.classList.add('tag-moderna');
        }
        card.innerHTML = `
            <div>
                <h3>Título: ${livro.titulo}</h3><hr>                
                <p>Autor: ${livro.autor}</p>
            </div>
            <p>Ano de Publicação:<span>${livro.ano}</span></p>`;
        lista.appendChild(card);
        card.appendChild(span);
    }
}