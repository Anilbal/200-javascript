let input=document.getElementById("input")
let genreIds={}
document.getElementById("btn").addEventListener("click",async ()=>{
    let api="4c1d0aa12f8000ecc700b00e9921b589"
    let userInput=input.value
    let url=`https://api.themoviedb.org/3/search/movie?api_key=${api}&query=${encodeURIComponent(userInput)}`
    await fetch(url)
    .then(data=>data.json())
    .then(data=>displayMovies(data.results[0]))
    // .then(data=>console.log(data.results[0]))
    .catch(error=>console.log(error))
})

function displayMovies(movie){
    let results=document.querySelector(".main")
    let rating=Math.floor(movie.vote_average)
    results.innerHTML=`
            <div class="top">
                <img src='https://image.tmdb.org/t/p/w500${movie.poster_path}' alt="">
                <div class="details">
                    <h2>${movie.original_title}</h2>
                    <p>
                        <i class="fa-solid fa-star"></i>

                        ${rating}
                    </p>
                    <p>${movie.release_date}</p>
                    <div class="category">
                        <div class="single-category">Adults only: ${movie.adult}</div>
                        <div class="single-category">Total votes: ${movie.vote_count}</div>
                        <div class="single-category">Lang: ${movie.original_language}</div>
                    </div>
                </div>
            </div>
            <div class="lower">
                <h2>Overview:</h2>
                <p>${movie.overview}</p>
            </div>
    `
}