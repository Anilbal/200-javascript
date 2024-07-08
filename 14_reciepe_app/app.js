function toggle(){
    let top=document.querySelector(".top")
    let bottom=document.querySelector(".bottom")
    //view recipe btn
    document.getElementById("view").addEventListener("click",()=>{
        if(top.classList.contains("hide")){
            top.classList.remove("hide")
        }else{
            top.classList.add("hide")
            bottom.classList.remove("hide")
        }
    })
    //cross btn
    document.getElementById("hide").addEventListener("click",()=>{
        if(top.classList.contains("hide")){
            top.classList.remove("hide")
            bottom.classList.add("hide")
        }else{
            top.classList.add("hide")
            bottom.classList.remove("hide")
        }
    })
}
document.getElementById("btn").addEventListener("click", async ()=>{
        const input=document.getElementById("input").value
        let url=`https://www.themealdb.com/api/json/v1/1/search.php?s=${input}`
        await fetch(url)
        .then(res=>res.json())
        // .then(data=>console.log(data.meals[0]))
        .then(data=>displayData(data.meals[0]))
        .catch(error=>console.log(error))
})

let details=document.querySelector(".details")
let hideDetails=document.getElementById("bottom-details")
//displayData
function displayData(meal){
    const filteredData = Object.entries(meal)
    .filter(([key, value]) => value !== null && value.trim() !== '')
    .reduce((acc, [key, value]) => {
        acc[key] = value;
        return acc;
    }, {});

    console.log(filteredData)
    details.innerHTML=`<img src="${filteredData.strMealThumb}" alt="">
                <div class="title">${filteredData.strMeal}</div>
                <ul>
                    <li>${filteredData.strMeasure1} ${filteredData.strIngredient1}</li>
                    <li>${filteredData.strMeasure2} ${filteredData.strIngredient2}</li>
                    <li>${filteredData.strMeasure3} ${filteredData.strIngredient3}</li>
                    <li>${filteredData.strMeasure4} ${filteredData.strIngredient4}</li>
                    <li>${filteredData.strMeasure5} ${filteredData.strIngredient5}</li>
                    <li>${filteredData.strMeasure6} ${filteredData.strIngredient6}</li>
                    <li>${filteredData.strMeasure7} ${filteredData.strIngredient7}</li>
                    <li>${filteredData.strMeasure8} ${filteredData.strIngredient8}</li>
                    <li>${filteredData.strMeasure9} ${filteredData.strIngredient9}</li>
                    <li>${filteredData?.strMeasure10} ${filteredData.strIngredient10}</li>
                </ul>
    `
    let splitData=filteredData.strInstructions.split(".").filter(item=>item!=="")
    splitData.forEach(element =>{
        let singleData=document.createElement("li")
        singleData.innerText=`${element}`
        hideDetails.appendChild(singleData)
    }
    )
    console.log(splitData)
    
}

toggle()