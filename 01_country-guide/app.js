let input=document.getElementById("input")
let result=document.getElementById("result")
let button=document.getElementById("btn").addEventListener("click",()=>{
    let search=input.value
    let url=`https://restcountries.com/v3.1/name/${search}?fullText=true`
    fetch(url)
    .then(res=>res.json())
    .then((data)=>{
       result.innerHTML=`
        <div class="image">
                <img src='${data[0].flags.png}' alt="">
                <h2>${data[0].name.common}</h2>
            </div>
            <div class="details">
                <p>Capital: ${data[0].capital[0]}</p>
                <p>Continent: ${data[0].continents[0]}</p>
                <p>Popuation: ${(data[0].population).toLocaleString()}</p>
                <p>Currency: ${data[0].currencies[Object.keys(data[0].currencies)].name} - ${data[0].currencies[Object.keys(data[0].currencies)].symbol}</p>
                <p>Common language: ${Object.values(data[0].languages).toString().split(",").join(", ")}</p>
            </div>
       `
    })
    .catch(()=>{
        result.innerHTML=`<h2>Country not found !!</h2>`
    })
})

