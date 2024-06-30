let slide1=document.getElementById("slider-1")
let slide2=document.getElementById("slider-2")
let result1=document.getElementById("result1")
let result2=document.getElementById("result2")

let gap=0;

function slideOne(){
    if(parseInt(slide2.value)-parseInt(slide1.value)<=gap){
        slide1.value=parseInt(slide2.value)-gap;
    }
    result1.textContent=slide1.value
}
function slideTwo(){
    if(parseInt(slide2.value)-parseInt(slide1.value)<=gap){
        slide1.value=parseInt(slide2.value)+gap;
    }
    result2.textContent=slide2.value
}