var btn  = document.getElementById("btncalcular")
btn.addEventListener("cilck", mdc)

function(){
    n1 = parseInt(document.getElementById (id="n1").value)
    n2 = parseInt(document.getElementById (id="n2").value)

    if(n1==n2){
        let result = document.getElementById("result")
        result.innerText = n1
    }else{
        let ctrl
        n1 > n2 ? ctrl=n2 : ctrl=n1

        while(n1%ctrl!=0 || n2%ctrl!=0)
            ctrl--

        result.innerText = ctrl

    }
}