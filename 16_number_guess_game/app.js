let randomGuess=Math.floor((Math.random()*100)+1)
let result=document.getElementById("result")
let couting=document.getElementById("counts")
console.log(randomGuess)
let guess=10;
let count=0;
let guessArray=[];

function guessing(){
    let input=document.getElementById("input").value 
    if(input<1 || input>100){
        alert("Please enter number between 1-100")
    }else if(input<randomGuess){
        result.innerText="Your guess is too low"
        guess-=1;
        count+=1;
        guessArray.push(input)
    }else if(input>randomGuess){
        result.innerText="Your guess is too high"
        guess-=1;
        count+=1;
        guessArray.push(input)
    }else if(input==randomGuess){
        result.innerText=`You guess ${randomGuess} is correct.`
        guess=10;
        count=0;
        guessArray=[];
    }

    couting.innerHTML=`
            <p>Total Guess: ${guess}</p>
            <p> No.of Guess remaining: ${count}</p>
            <p>Guessed number: ${guessArray}</p>
    `
}