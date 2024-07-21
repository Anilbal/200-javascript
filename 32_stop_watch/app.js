let [second,minute,hour]=[0,0,0]
let watch=document.querySelector(".watch")
let timer;

document.getElementById("start").addEventListener("click",()=>{
    timer=setInterval(displayTimer,1000)
})
document.getElementById("pause").addEventListener("click",()=>{
    clearInterval(timer)
})
document.getElementById("restart").addEventListener("click",()=>{
    clearInterval(timer)
    // [second,minute,hour]=[0,0,0];
    watch.innerHTML="00: 00: 00"
})


function displayTimer(){
    second+=1
    if(second==60){
        second=0;
        minute++;
        if(minute==60){
            minute=0;
            hour++;
        }
    }
    let h=hour<10?"0"+hour:hour;
    let m=minute<10?"0"+minute:minute;
    let s=second<10?"0"+second:second;
    watch.innerHTML=`${h}: ${m}: ${s}`
}