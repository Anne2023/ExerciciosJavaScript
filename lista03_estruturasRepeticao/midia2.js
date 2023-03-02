var btn = document.getElementById('btnCalcular')
btn.addEventListener("click",executar)

var result = document.getElementById('result')


function executar(){
    let n1 = parseInt(document.getElementById('n1').value)
    result.innerText = fatorar (n1)
}

function fatorar (n){
    let mult=1;
    for( ;n>1; n--){
        mult=mult*n      
    }
    return mult
}