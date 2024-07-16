let text=document.getElementById("areas")
let result=document.getElementById("result")
let limit=60
result.innerText="0/"+limit

text.addEventListener("input",()=>{
    let textlength=text.value.length
    if (textlength > limit) {
        text.value = text.value.substring(0, limit);
        textlength = limit;
        alert("Your letter exceeded the limit");
    }
    result.innerText = textlength + "/" + limit;
})