
let input=document.querySelector("#input")
let list=document.querySelector("#list")
document.querySelector("#button").addEventListener("click",(e)=>{
    e.preventDefault()
    let li=document.createElement('li')
    li.innerHTML=input.value

    let deleteBtn=document.createElement("button")
    deleteBtn.innerHTML='delete'
    deleteBtn.onclick=()=>{
        list.removeChild(li)
    }
    li.appendChild(deleteBtn)
    list.append(li)
})
