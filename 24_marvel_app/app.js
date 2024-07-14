let result=document.querySelector(".result")
let input=document.getElementById("input-text")

document.getElementById("btn").addEventListener('click',()=>{
    const publicKey = '7f2ecc3dc73ae711cb7c0109a09128c9';
    const privateKey = '99f4dbca2e710acf3db2e31e596924d07353f1ab';
    // const characterName = 'hulk';
    const ts = new Date().getTime();
    const hash = CryptoJS.MD5(ts + privateKey + publicKey).toString();

    const url = `https://gateway.marvel.com:443/v1/public/characters?name=${input.value}&ts=${ts}&apikey=${publicKey}&hash=${hash}`;

    fetch(url)
        .then(response => response.json())
        .then(data =>{
            if(data.data.results.length>0){
                const character = data.data.results[0];
                // console.log(data.data.results)
                result.innerHTML=`
                <img src="${character.thumbnail.path}.${character.thumbnail.extension}" alt="">
                <h2>${character.name}</h2>
                <p>${character.description}</p>
                `
            }else{
                result.innerHTML="Charater not found"
            }
        })
        .catch(error => console.error('Error:', error));
})