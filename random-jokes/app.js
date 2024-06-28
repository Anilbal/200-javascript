const jokes = [
    "Why don't scientists trust atoms? Because they make up everything!",
    "What do you call fake spaghetti? An impasta!",
    "Why did the scarecrow win an award? Because he was outstanding in his field!",
    "Why don't skeletons fight each other? They don't have the guts.",
    "What did one wall say to the other wall? 'I'll meet you at the corner.'",
    "Why did the bicycle fall over? Because it was two-tired!",
    "What do you call cheese that isn't yours? Nacho cheese!",
    "Why can't you give Elsa a balloon? Because she will let it go.",
    "How does a penguin build its house? Igloos it together.",
    "What do you call a belt made out of watches? A waist of time!"
];

document.querySelector("button").addEventListener("click",()=>{
        let randomNumber=Math.floor(Math.random()*jokes.length)
        let joke=document.querySelector('p')
        let random=jokes[randomNumber]
        joke.innerHTML=random
})