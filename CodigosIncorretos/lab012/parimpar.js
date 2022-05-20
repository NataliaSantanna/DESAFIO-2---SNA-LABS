
function teste() {
    let num = Number(window.prompt('Digite um número: '))
    let tipo
    //A logica estava errada, pois para ser par o resto da divisao deve ser igual a 0 e nao 1
    if (num % 2 == 0) {
        tipo = '<strong>PAR</strong>'
    } else {
        tipo = '<strong>ÍMPAR</strong>'
    }
//Adicionei o "document" em querySlector
    let res = document.querySelector('section#result')
    res.innerHTML = `<p>O número ${num} que foi digitado é ${tipo}!</p>`
}