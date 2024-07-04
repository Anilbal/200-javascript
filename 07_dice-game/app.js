
document.getElementById("btn").addEventListener("click",()=>{
    let dice=document.querySelectorAll("span")
    let result=document.getElementById("result")
    const myArray=Array.from(dice)
    const randomIndex=Math.floor(Math.random()*myArray.length)
    let myDice=myArray[randomIndex]
    myArray.forEach(span => {
        span.classList.remove('active');
        span.classList.add('inactive');
    });

    //randomly selected span to active
    myDice.classList.remove('inactive');
    myDice.classList.add('active');
    result.innerHTML=`Dice Number is ${randomIndex+1}`
})
