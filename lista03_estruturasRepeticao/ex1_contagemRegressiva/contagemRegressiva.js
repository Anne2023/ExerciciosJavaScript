var btn = document.getElementById('btnCalcular')
btn.addEventListener('click', contar)

function contar(){
    let n = Number.parseInt(document.getElementById('n1').value)

    let resultado = 'resultado='
    while(n>0){
        resultado+= n + ','
        
        n--

    }
    document.getElementById('result').innerText = resultado
}