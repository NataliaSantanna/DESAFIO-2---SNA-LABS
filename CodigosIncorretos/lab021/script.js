
function contar() {
    let saida = document.getElementById('saida')

    saida.innerHTML += `<h2>Contando de 1 até 10</h2>`

    let cont = 1
    while (cont <= 10) {
        saida.innerHTML += ` ${cont} &#x1F449;`
       // if (x === 0) {
        cont ++ // Corresponde a cont = cont + 1
       // }
       //comentei o if e assim o codigo voltou ao normal
    }
    saida.innerHTML += ` &#x1F3C1;`
}