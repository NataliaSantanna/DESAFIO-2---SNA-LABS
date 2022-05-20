
var paragrafo = document.getElementById('paragrafo');

function Verificar(){
   let ano = window.prompt('Qual é o ano que você quer verificar?')

   if((ano%400 == 0) || (ano%4==0 && ano%100!=0)){
    paragrafo.innerHTML = `<p> O ano de ${ano} é <span style="color: green; background: #80FF80"><strong>É BISSEXTO<strong></span> &#9989`
   }else{
        paragrafo.innerHTML = `<p> O ano de ${ano} é <span style="color: red; background:#FF8080"><strong>NÃO É BISSEXTO<strong></span> &#10060`
    }
}


