value = 0
max = 100

setTimeout(() => {document.querySelector('button').forEach((elm) => {elm.style.color = 'white'})}, 100)

function add() {
    value += 1
    if (max < 0) {max = 0}
    if (value > max) {console.log('asd');value = max}
    document.querySelector('.inner').style.height = `${(document.querySelector('.outer').offsetHeight) - 20}px`
    document.querySelector('.inner').style.width = `${value/max * document.querySelector('.outer').offsetWidth - 20}px`
    document.querySelector('.inner').innerHTML = value.toString()
}

function subtract() {
    value -= 1
    if (value < 0) {value = 0}
    if (max < 0) {max = 0}
    if (value > max) {value = max}
    document.querySelector('.inner').style.height = `${(document.querySelector('.outer').offsetHeight) - 20}px`
    document.querySelector('.inner').style.width = `${value/max * document.querySelector('.outer').offsetWidth - 20}px`
    document.querySelector('.inner').innerHTML = value.toString()
}

function reset() {
    value = 0
    if (max < 0) {max = 0}
    if (value > max) {value = max}
    document.querySelector('.inner').style.height = `${(document.querySelector('.outer').offsetHeight) - 20}px`
    document.querySelector('.inner').style.width = `${value/max * document.querySelector('.outer').offsetWidth}px`
    document.querySelector('.inner').innerHTML = value.toString()
}

document.querySelector('input').addEventListener('input', () => {
    max = document.querySelector('input').value
    if (max < 0) {max = 0}
    if (max < value) {max = value}
    document.querySelector('.inner').style.height = `${(document.querySelector('.outer').offsetHeight) - 20}px`
    document.querySelector('.inner').style.width = `${value/max * document.querySelector('.outer').offsetWidth - 20}px`
    document.querySelector('input').value = max
    document.querySelector('.inner').innerHTML = value.toString()
})
