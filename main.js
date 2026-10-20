
const form = document.querySelector('form');

const nomeUtente = document.getElementById("name-field")
const kminput = document.getElementById("km")
const età = document.getElementById("age")
const buttonReset = document.getElementById("button-reset");


const fullname = document.getElementById("ticket-name")
const offerta = document.getElementById("ticket-offer")
const costoBiglietto = document.getElementById("ticket-price")

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const km = Number(kminput.value);
    const Age = Number(età.value);

    let prezzo = km * 0.21;
    let nomeOfferta = "Biglietto standard";
    if (Age < 18) {
        prezzo = prezzo * 0.8;
        nomeOfferta = "Sconto Minorenni";
    } else if (Age >= 65) {
        prezzo = prezzo * 0.6;
        nomeOfferta = "Sconto Over 65";
    }

    fullname.innerHTML = nomeUtente.value;
    costoBiglietto.innerHTML = prezzo.toFixed(2) + "euro";
    offerta.innerHTML = nomeOfferta;




});

buttonReset.addEventListener("click", function () {
    form.reset();
    fullname.innerHTML = "";
    costoBiglietto.innerHTML = "-";
    offerta.innerHTML = "-";



});
