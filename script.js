const buttonInput = document.querySelector('.button-input')
const buttonChoose = document.querySelector('.button-choose')

buttonInput.addEventListener('click', button1)
buttonChoose.addEventListener('click', button2)

function button1 (e) {
    var color = document.querySelector('.color-input').value
    document.body.style.backgroundColor = color
}

function button2 (e) {
    var color = document.querySelector('.color-choose').value
    document.body.style.backgroundColor = color
    document.querySelector('.color-input').value = color
}