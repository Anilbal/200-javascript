let wheels=document.getElementById("wheel")
let spinButton=document.getElementById("btn")
let result=document.getElementById("result")
spinButton.addEventListener("click",()=>{
    let randomDeg=Math.floor((Math.random()*360)+3600)
    wheels.style.transform=`rotate(${randomDeg}deg)`
})
