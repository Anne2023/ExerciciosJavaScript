var btn = document.getElementById('btnCalcular')
btn.addEventListener('click', mediadois)

function mediadois(){
    let n1 = Number(document.getElementById('n1').value)
    let n2 = Number(document.getElementById('n2').value)

    let result = document.getElementById('result')
    result.innerText = (n1 + 2*n2)/3 
}