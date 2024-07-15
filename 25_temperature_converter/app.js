let cels=document.getElementById("celsius")
let fah=document.getElementById("fahrenheit")

function celToFir(){
    let output=(parseFloat(cels.value)*9/5+32)
    fah.value=parseFloat(output.toFixed(2));
}
function firToCel(){
    let output=(parseFloat(fah.value)-32)*5/9;
    cels.value=parseFloat(output.toFixed(2));
}