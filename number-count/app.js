let startValue=0
let endValue=500
let data=document.querySelector("#data")
let duration=Math.floor(5000/endValue)
let counter=setInterval(()=>{
            startValue+=1;
            data.innerHTML=startValue
            if(startValue===endValue){
                clearInterval(counter)
            }
        },duration)
console.log(counter)