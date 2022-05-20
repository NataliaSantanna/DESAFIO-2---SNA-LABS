let converter = document.getElementById('Converter')
function Converter(){
    var dolar =  window.prompt('Antes de mais nada. Quanto está a cotação do dólar agora?')
    var reais =  window.prompt('Quantos reais você tem na carteira?')
    
    
    
    let divisao = reais / dolar
    
    
    
    converter.innerHTML = `<h2> A coversão é de ${divisao}  </p>`
  
   
    
    
    }
    
    
    