var btnSomar = document.getElementById('btnSomar')
btnSomar.addEventListener('click', ()=>{calcular('+')})

var btnmenos = document.getElementById('btnSub')
btnmenos.addEventListener('click', ()=>{calcular('-')})

var btnmultiplicacao = document.getElementById('btnMult')
btnmultiplicacao.addEventListener('click', ()=>{calcular('*')})

var btndivisao = document.getElementById('btnDiv')
btndivisao.addEventListener('click', ()=>{calcular('/')})


function calcular(operacao) {
    let n1 = Number(document.getElementById('n1').value)
    let n2 = Number(document.getElementById('n2').value)
    let exibir;

    switch (operacao) {
        case '+':
            exibir = n1+n2
            break;
        case '-':
            exibir = n1-n2
            break;
        case '*':
            exibir = n1*n2;
            break;
        default:
            exibir = n1/n2
            break
            
    }
    document.getElementById('result').innerText = exibir
}