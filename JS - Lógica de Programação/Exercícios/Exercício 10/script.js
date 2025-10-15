// ENUNCIADO
// CRIEM UM SIMULADOR DE PARCELAS DE COMPRAS
// 1 - No arquivo index.html, criem um formulário com os campos: Valor total da compra e Quantidade de parcelas (máximo 12)
// 2 - No script.js - Calcule o valor de cada parcela (dividindo o total pelo número de parcelas)
// 3 - Gere a lista de parcelas no DOM (no HTML), mostrando:
//    // Número da parcela (Ex: 1ª, 2ª, 3ª ...)
//    // Valor da parcela
//    // Data de vencimento (a primeira vence hoje, as demais vencem mês a mês)
// 4 - Ainda no JS, faça uma verificação:
//    // Se a data de vencimento cair em final de semana (sábado ou domingo), mostrar a mensagem "Vencimento adiado"
// 5 - Ao final, estilize a página com style.css externo


////////////////// SOLUÇÃO //////////////////

const form = document.querySelector('#form-parcelas');
const resultado = document.querySelector('#resultado');

form.addEventListener('submit', function(e){
    e.preventDefault();
    const valorTotal = Number(form.querySelector('#valor').value);
    const quantParcelas = Number(form.querySelector('#quantidade').value);
    if(quantParcelas < 1 || quantParcelas > 12){
        resultado.innerHTML = '<p class="alerta">A Quantidade de Parcelas deve ser entre 1 e 12.</p>';
        return;
    }
    const valorParcela = valorTotal / quantParcelas;
    resultado.innerHTML = '';
    const hoje = new Date();
    for(let i = 1; i <= quantParcelas; i++){
        const vencimento = new Date(hoje);
        vencimento.setMonth(vencimento.getMonth() + (i - 1));
        const diaSemana = vencimento.getDay();
        let status = '';
        if(diaSemana === 0 || diaSemana === 6){
            status = '(Vencimento adiado.)';
        }
        const dia = String(vencimento.getDate()).padStart(2, '0');
        const mes = String(vencimento.getMonth() + 1).padStart(2, '0');
        const ano = vencimento.getFullYear();
        resultado.innerHTML += `
            <p>
                ${i}ª Parcela - R$${valorParcela.toFixed(2)} - Vencimento: ${dia}/${mes}/${ano}<br>${status}
            </p>
        `;
    }
});