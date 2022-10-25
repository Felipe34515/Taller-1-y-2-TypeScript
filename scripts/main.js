"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_js_1 = require("./data.js");
let serieCard = document.getElementById('card');
const AvgSeasonsElm = document.getElementById("seasons-avg");
const coursesTbody = document.getElementById("series");
renderSeriesInTable(data_js_1.data);
AvgSeasonsElm.innerHTML = `${getTotaltemporadas(data_js_1.data)}`;
function renderSeriesInTable(series) {
    console.log(`mostrando series`);
    series.forEach((serie) => {
        let trElement = document.createElement("tr");
        trElement.innerHTML = `<td class "table-active bolded">${serie.id}</td>
                           <tdlass "table-active" > <a href ="#" class = "stretched-link" id "serie ${serie.id} ">${serie.nombre}</a></td>
                           <td class "table-active ">${serie.canal}</td>
                           <td class "table-active ">${serie.temporadas}</td>`;
        coursesTbody.appendChild(trElement);
    });
}
const serie1 = document.getElementById("serie 1");
const serie2 = document.getElementById("serie 2");
const serie3 = document.getElementById("serie 3");
const serie4 = document.getElementById("serie 4");
const serie5 = document.getElementById("serie 5");
const serie6 = document.getElementById("serie 6");
serie1.onclick = () => showCard(1);
serie2.onclick = () => showCard(2);
serie3.onclick = () => showCard(3);
serie4.onclick = () => showCard(4);
serie5.onclick = () => showCard(5);
serie6.onclick = () => showCard(6);
function getTotaltemporadas(series) {
    let TotalSeries = 0;
    let Totaltemporadas = 0;
    series.forEach((serie) => {
        TotalSeries = TotalSeries + 1;
        Totaltemporadas = Totaltemporadas + serie.temporadas;
    });
    let prometidoTemporadas = Totaltemporadas / TotalSeries;
    return prometidoTemporadas;
}
function limpiarCard() {
    while (serieCard.hasChildNodes()) {
        if (serieCard.firstChild != null) {
            serieCard.removeChild(serieCard.firstChild);
        }
    }
}
function buscarSeriePorId(idKey, series) {
    return idKey === 0 ? data_js_1.data : series.filter(s => s.id == idKey);
}
function showCard(id) {
    limpiarCard();
    let series = buscarSeriePorId(id, data_js_1.data);
    series.forEach((serie) => {
        let cardElement = document.createElement("card");
        cardElement.innerHTML = `<img src = "./img/${serie.id}.jpg" class= "card-img-top">
                                <div class= "card-body">
                                <h5 class = "card-title">${serie.nombre}</h5> 
                                <p class = "card-title">${serie.descripcion}</p> 
                                <a class = "card-title">${serie.pagina}</a> `;
        serieCard.appendChild(cardElement);
    });
}
