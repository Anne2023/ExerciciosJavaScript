var btn = document.getElementById('btnCalcular')
btn.addEventListener('click', calcularMedia)  // nonitorando o elemento botão, quando tiver um click

function calcularMedia(){
    let n1 = Number( document.getElementById('n1').value )    //(let) variável local
    let n2 = Number( document.getElementById('n2').value )   //(var) variavel global 
                                                            //(const) variavel local e a diferença do let é que ela é fixa
     
    let result = document.getElementById('result').innerText = (n1*n2) 
     
} 