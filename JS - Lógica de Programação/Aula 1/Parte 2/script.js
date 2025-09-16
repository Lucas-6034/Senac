/* OPERADORES LOGICOS */
/*
    &&  ===  AND  ===  E        // Todas as expressoes precisam ser verdadeiras para retornar true, se tiver ao menos uma falsa, toda a expressao retorna false

    ||  ===  OR   ===  OU       // Todas as expressoes precisam ser falsas para retornar false, se tiver ao menos uma verdadeira, toda a expressao retorna true

    !   ===  NOT  ===  NAO      // Nega a expressao, se for true, retorna false, se for false, retorna true
*/

const expressaoAnd = true && true && false;
console.log(expressaoAnd); // Retorna false, pois o JS encontrou um valor falso.

const expressaoOr = true || false || false;
console.log(expressaoOr); // Retorna true, pois o JS encontrou um valor verdadeiro.

const negaExpressao = true && true;
console.log(!negaExpressao); // Retorna false, pois o negamos a expressao com o operador !.

////////////////////////////////////////////

const usuario = 'Aluno';
const senha = 12345;

const vaiLogar = usuario === 'Aluno' && senha === 12345;
console.log('O usuario conseguiu logar? '  + !vaiLogar);