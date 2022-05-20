function Converter(){
var metros =  window.prompt('Digite uma distancia em metros')
let converter = document.getElementById('Converter')

let kilometro = metros / 10000
let hectometro = metros / 100
let decametro = metros / 10
let decimetros = metros * 10
let centimetros = metros * 100
let milimetros = metros * 1000



converter.innerHTML = `<h2> A distancia de ${metros} é corresponde a : </p>`
converter.innerHTML += `<p> ${kilometro} quilômetros (km) </p>`
converter.innerHTML += `<p> ${hectometro} hectometros(hm) </p>`
converter.innerHTML += `<p> ${decametro}  decametros(dam) </p>`
converter.innerHTML += `<p> ${decimetros} decimetros (dm) </p>`
converter.innerHTML += `<p> ${centimetros} centimetros (cm) </p>`
converter.innerHTML += `<p> ${milimetros}  milimetros (ml) </p>`




}



