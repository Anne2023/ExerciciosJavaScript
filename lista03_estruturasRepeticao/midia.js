var btn = document.getElementById('btnCalcular')
btn.addEventListener("click",executar)

function executar(){
    let n1 = parseInt(document.getElementById('n1').value)
    let n2= parseInt(document.getElementById('n2').value)
    let result = document.getElementById('result')
    

    if(n1>n2){
        for(let ctrl=n2;ctrl>=1;ctrl--){
            if(n1%ctrl=0 && n2%ctrl==0){
                result.innerText=ctrl
                break
            }
        }
    }else{
        for(let ctrl=n1;ctrl>=1;ctrl--){
            if(n1%ctrl==0 && n2%ctrl==0){
                result.innerText=ctrl
                break
            }
        }
    }
}