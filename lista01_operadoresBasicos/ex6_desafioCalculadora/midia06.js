var btn = document.getElementById('btnCalcular')
btn.addEventListener('click', soma)

function soma(){
    let n1 = Number(document.getElementById('n1').value)
    let n2 = Number(document.getElementById('n2').value)

    let result = document.getElementById('result')
    result.innerText = n1 + n2
}

var btn = document.getElementById('btnSub')
btn.addEventListener('click', sub)

function sub(){
    let n1 = Number(document.getElementById('n1').value)
    let n2 = Number(document.getElementById('n2').value)

    let result = document.getElementById('result')
    result.innerText = n1 - n2
}

var btn = document.getElementById('btnMult')
btn.addEventListener('click', mult)

function mult (){
    let n1 = Number(document.getElementById('n1').value)
    let n2 = Number(document.getElementById('n2').value)

    let result = document.getElementById('result')
    result.innerText = n1 * n2
}

var btn = document.getElementById('btnDiv')
btn.addEventListener('click', div)

function div(){
    let n1 = Number(document.getElementById('n1').value)
    let n2 = Number(document.getElementById('n2').value)

    let result = document.getElementById('result')
    result.innerText = n1 / n2
}

