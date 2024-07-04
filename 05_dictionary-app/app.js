let input=document.getElementById("input-text")
let result=document.getElementById("result")
let sound=document.getElementById("sound")
let button=document.getElementById("btn").addEventListener("click",()=>{
    let search=input.value
    let url=`https://api.dictionaryapi.dev/api/v2/entries/en/${search}`
    fetch(url)
    .then(data=>data.json())
    .then(data=>{
         data.map((item)=>{
            // console.log(item)
            result.innerHTML=`<div class="word">
                <h2>${search}</h2>
                <button id="volume" onclick="playSound()">
                    <i class="fa-solid fa-volume-high"></i>
                </button>
            </div>
            <div class="details">
                <p>${item.meanings[0].partOfSpeech}</p>
                <p id="meaning">${item.meanings[0].definitions[0].definition}</p>
                <p>Example: ${item.meanings[0].definitions[0].example}</p>
            </div>
            `;

            sound.setAttribute("src",`${item.phonetics[0].audio}`)
    })
    })
    .catch(()=>{
        result.innerHTML=`<h3>Couldnt find the word</h3>`
    })
})

function playSound(){
    sound.play()
}