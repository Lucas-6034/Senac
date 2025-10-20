//////////////// TRATAMENTO DE ERROS ////////////////
// Quando o JavaScript encontra um erro, ele para a execução do código.
// No dia a dia isso pode causar falhas em sistemas, travar o programa ou parar tudo.
// Para evitar isso, utilizamos 3 comandos principais: try, catch e finally.

// O 'try' (tentar) serve para colocar o código que queremos testar.
// O 'catch' (capturar) serve para capturar o erro, se caso ele ocorrer.
// O 'finally' (finalmente) é um bloco que SEMPRE roda, ele dando certo ou errado.

try{
    // Tudo o que estiver dentro desse bloco, será executado.
    // Se ocorrer algum erro nesse bloco, o JS PULA para o bloco de CATCH
    console.log('Abre um arquivo'); // Simula que abrimos um arquivo
    console.log('Manipulei o arquivo e... gerou erro!');
    console.log(a); // Forçamos um erro, pois 'a' não foi declarada
    console.log('Fechei o arquivo.'); // Essa linha não será executada, por conta do erro acima
} catch(e){
    // Se deu erro no try, o programa cai nesse bloco
    // O parâmetro 'e' (ou 'error'), guarda as informações do erro ocorrido
    console.log('Tratando erro...'); // Corrigimos o erro
} finally{
    // O bloco Finally é executado SEMPRE.
    // Mesmo que o try funcione ou dê erro, o finally sempre será executado.
    console.log('FINALLY: Forçando o fechamento do arquivo.');
}

////////////// THROW //////////////

function retornaHora(data){
    // Quero que o parâmetro data seja uma instância de Date.
    // Isso significa que ele precisa ser criado com um 'new Date()'.
    
    // O operador 'instanceof' (instância de) verifica se uma variável é de um tipo específico.
    // Se não for do tipo Date, lançamos um erro usando o "Throw".
    if(data && !(data instanceof Date)){
        // O throw (lançar) serve para gerar um erro manualmente
        throw new TypeError('Esperando instância de Date');
    }
    // Se nenhuma data for passada, criamos uma nova data com a hora atual
    if(!data){
        data = new Date();
    }
    return data.toLocaleTimeString('pt-BR', {
        // O método toLocaleTimeString() formata a hora para um padrão legível
        // O primeiro parâmetro 'pt-BR' define o idioma
        // O segundo parâmetro define o formato (sem AM/PM e com 2 digitos para cada parte da hora)
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false  // Desativa AM/PM
    });
}

// Usando a função dentro do bloco try/catch
try{
    // Cria uma data específica
    const data = new Date('25-09-1914 12:45:32');
    // Chama a função retornaHora() sem passar nenhum argumento (retornando a hora atual)
    const hora = retornaHora();
    // Exibe a hora formatada
    console.log(hora);
} catch(e){
    // Se algum erro acontecer dentro do try, ele será tratado aqui
    console.log('Ocorreu um erro ao tentar pegar a hora.');
} finally{
    // O bloco Finally é executado SEMPRE.
    console.log('Tenha um bom dia!');
}