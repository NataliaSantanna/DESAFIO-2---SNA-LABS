function Converter(){
    var dolar =  window.prompt('Antes de mais nada. Quanto está a cotação do dólar agora?')
    var reais =  window.prompt('Quantos reais você tem na carteira?')
    
    let converter = document.getElementById('Converter')
    
    let dolar= 0,20
    let real =  4,88
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
    
    
    