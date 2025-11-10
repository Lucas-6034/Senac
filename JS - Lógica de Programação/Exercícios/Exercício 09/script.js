// ENUNCIADO
// CRIEM UM SISTEMA DE RESERVA DE VIAGENS
// 1 - No arquivo index.html, criem um formulário com os campos: Nome do passageiro, Data da viagem e Destino
// 2 - No script.js - Cada reserva deve ser salva em um array de objetos {nome, data, destino}
// 3 - Liste todas as reservas cadastradas no DOM (no HTML)
// 4 - Ainda no JS, faça uma verificação que
//    // Se a data da viagem for anterior à data atual, mostrar em vermelho com a mensagem "Data inválida"
//    // Se a data da viagem for igual ao dia de hoje, mostrar em amarelo com a mensagem "A viagem é hoje!"
//    // Se a data da viagem for futura, mostrar em verde com a mensagem "Viagem confirmada"
// 5 - Ao final, estilize a página com style.css externo

///////////////////////SOLUCAO//////////////////////

const reservas = [];
const form = document.querySelector(`#form-reserva`);
const lista = document.querySelector(`#lista`);
form.addEventListener(`submit`, function(e){
    e.preventDefault();
    const nome = form.querySelector(`#nome`).value;
    const data = form.querySelector(`#data`).value;
    const destino = form.querySelector(`#destino`).value;
    const reserva = {nome, data, destino};
    reservas.push(reserva);
    mostrarReservas();
    form.reset();
});
function mostrarReservas(){
    lista.innerHTML = ``;
    const hoje = new Date().toISOString().split(`T`)[0];
    for(let i = 0; i < reservas.length; i++){
        const reserva = reservas[i];
        let status = ``;
        let classeStatus = ``;
        if(reserva.data < hoje){
            classeStatus = `passada`;
            status = `Data invalida!`;
        } else if(reserva.data === hoje){
            classeStatus = `hoje`;
            status = `A viagem e hoje!`;
        } else {
            classeStatus = `futura`;
            status = `Viagem confirmada!`;
        }
        const formataData = reserva.data.split(`-`).reverse().join(`/`); // antes: 2025-10-08 | depois: 08/10/2025
        lista.innerHTML += `
            <div class="reserva ${classeStatus}">
                <p><b>Passageiro: </b>${reserva.nome}</p>
                <p><b>Destino: </b>${reserva.destino}</p>
                <p><b>Data: </b>${formataData}</p>
                <span>${status}</span>
            </div>
        `;
    }
}