const images = [
    'https://png.pngtree.com/thumb_back/fh260/background/20230817/pngtree-lotus-flower-jpg-pink-lotus-flower-image_13023952.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLtUumQyTW5fKo6ED3RcelfFgDEh9CoCoMCw&s',
    'https://onlinejpgtools.com/images/examples-onlinejpgtools/sunflower.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY74vdaqT8kTGvJP7_TKh5LbGJO7hrWgoBcb043tfm6rPtbOP3RO26xw7zOHWHfYR6mzM&usqp=CAU', 
]

let current_images=document.getElementById("current-image")
const prev=document.getElementById("prev")
const next=document.getElementById("next")

let index=0;

function displayImage(){
    current_images.src=images[index]
}
displayImage()

next.addEventListener("click",()=>{
    index+=1;
    if(index>=images.length){
        index=0;
    }
    displayImage()
})
prev.addEventListener("click",()=>{
    index--;
    if(index<0){
        index = images.length - 1
    }
    displayImage()
})