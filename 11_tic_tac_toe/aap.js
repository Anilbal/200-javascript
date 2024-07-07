let buttons=document.querySelectorAll(".button-options")
let result=document.querySelector("#result")
let restartBtn=document.querySelector("#restart")
// let restartBtn
let  winningPatterns = [
    [0, 1, 2], // Top row
    [3, 4, 5], // Middle row
    [6, 7, 8], // Bottom row
    [0, 3, 6], // Left column
    [1, 4, 7], // Middle column
    [2, 5, 8], // Right column
    [0, 4, 8], // Main diagonal
    [2, 4, 6]  // Anti-diagonal
  ]

//player x plays first
let xTurn=true;
let count=0;

//disbales buttons
const disableButtons=()=>{
    buttons.forEach((btn)=>(btn.disabled=true))
}

const enableButtons=()=>{
    buttons.forEach((btn)=>{
        btn.innerText=""
        btn.disabled=false
    })
}

//restart
restartBtn.addEventListener("click",()=>{
    count=0;
    enableButtons();
    result.innerHTML="";
})

//win function
const winFunction=(letter)=>{
    disableButtons()
    if(letter=="x"){
        result.innerHTML=`<p id="message">X won</p>`
    }else{
        result.innerHTML=`<p id="message">o won</p>`
    }
}

//logic
const winCheck=()=>{
    for (let i of winningPatterns) {
        let [element1,element2,element3]=[
            buttons[i[0]].innerText,
            buttons[i[1]].innerText,
            buttons[i[2]].innerText,
        ]
        if(element1!="" && element2!="" && element3!=""){
            if(element1==element2 && element2==element3){
                winFunction(element1)
            }
        }
    }
}

//for each button click
buttons.forEach((btn)=>{
    btn.addEventListener("click",()=>{
        if(xTurn){
            xTurn=false
            btn.innerText="x"
            btn.disabled=true;
        }else{
            xTurn=true
            btn.innerText="o"
            btn.disabled=true;
        }

        count+=1
        if(count===9){

        }
        winCheck()
    })
})