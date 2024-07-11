const quotes = [
    "The only limit to our realization of tomorrow is our doubts of today. — Franklin D. Roosevelt",
    "In the end, we will remember not the words of our enemies, but the silence of our friends. — Martin Luther King Jr.",
    "Life is what happens when you're busy making other plans. — John Lennon",
    "The best way to predict your future is to create it. — Abraham Lincoln",
    "The only way to do great work is to love what you do. — Steve Jobs",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. — Winston Churchill",
    "Believe you can and you're halfway there. — Theodore Roosevelt",
    "You miss 100% of the shots you don't take. — Wayne Gretzky",
    "The purpose of our lives is to be happy. — Dalai Lama",
    "Get busy living or get busy dying. — Stephen King",
    "You have within you right now, everything you need to deal with whatever the world can throw at you. — Brian Tracy",
    "The only impossible journey is the one you never begin. — Tony Robbins",
    "Act as if what you do makes a difference. It does. — William James",
    "When you have a dream, you've got to grab it and never let go. — Carol Burnett",
    "I can't change the direction of the wind, but I can adjust my sails to always reach my destination. — Jimmy Dean",
    "No matter what you're going through, there's a light at the end of the tunnel. — Demi Lovato",
    "Life is short, and it's up to you to make it sweet. — Sarah Louise Delany",
    "Keep smiling, because life is a beautiful thing and there's so much to smile about. — Marilyn Monroe",
    "The greatest glory in living lies not in never falling, but in rising every time we fall. — Nelson Mandela",
    "The way to get started is to quit talking and begin doing. — Walt Disney"
];

let result=document.getElementById("result")
document.getElementById("btn").addEventListener("click",()=>{
    let random=Math.floor(Math.random()*20)
    let value=quotes[random]
    result.innerText=value
})