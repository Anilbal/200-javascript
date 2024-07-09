let buttons=document.querySelectorAll("button")
let result=document.querySelector(".result")
let firstNumber=Number()
let secondNumber=Number()
buttons.forEach((button)=>{
    button.addEventListener("click",(e)=>{
        let id=e.target.id
        if(id=="del"){
            result.innerHTML=""
        }
        if(id=="mod"){
            let modulus=firstNumber%secondNumber
            
        }
    
    })
})