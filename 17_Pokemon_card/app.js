
/*
Normal: #A8A77A
Fire: #EE8130
Water: #6390F0
Electric: #F7D02C
Grass: #7AC74C 
Ice: #96D9D6
Fighting: #C22E28
Poison: #A33EA1
Ground: #E2BF65
Flying: #A98FF3
Psychic: #F95587
Bug: #A6B91A
Rock: #B6A136
Ghost: #735797
Dragon: #6F35FC
Dark: #705746
Steel: #B7B7CE
Fairy: #D685AD
*/

let url="https://pokeapi.co/api/v2/pokemon/"
let card=document.querySelector(".details")
let btn=document.getElementById("btn")

let getPokeData=async()=>{
    let id=Math.floor(Math.random()*150)+1
    let finalUrl=url+id
    await fetch(finalUrl)
    .then(res=>res.json())
    .then(data=>displayData(data))
    .catch(error=>console.log(error))
}
let displayData=(data)=>{
    console.log(data)
    let type=document.createElement('p')
    data.types.forEach((element)=>{
        type.innerText=`${element.type.name}`
        type.style.textTransform="capitalize"
    })
    card.innerHTML=`
         <p class="hp">Hp: ${data.stats[0].base_stat}</p>
            <img src="${data.sprites.other.dream_world.front_default}" alt="">
            <h2>${data.name}</h2>
            <div class="category" id="cats">

            </div>
            <div class="status">
                <div class="status-power">
                    <h4>${data.stats[1].base_stat}</h4>
                    <p>Attack</p>
                </div>
                <div class="status-power">
                    <h4>${data.stats[2].base_stat}</h4>
                    <p>Defence</p>
                </div>
                <div class="status-power">
                    <h4>${data.stats[5].base_stat}</h4>
                    <p>Speed</p>
                </div>
            </div>
    `
    let cats=document.getElementById("cats")
    cats.appendChild(type)
}

btn.addEventListener("click",getPokeData)