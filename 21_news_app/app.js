function fetchNews() {
    const categoryBtn = document.querySelectorAll(".category ul li");

    categoryBtn.forEach((category) => {
        category.addEventListener("click", () => {
            const categoryValue = category.getAttribute("value");
            if (categoryValue === 'general') {
                fetchCategoryNews('general');
            } else {
                fetchCategoryNews(categoryValue);
            }
        });
    });

    function fetchCategoryNews(category) {
        const api = "0cac832d1f3247cb83134dc4675eef5f";
        const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${api}`;

        fetch(url)
            .then(res => res.json())
            .then(data => displayNews(data.articles))
            .catch(error => console.log(error));
    }

    function displayNews(articles) {
        const cards = document.querySelector(".cards");
        cards.innerHTML = ''; // Clear existing content

        articles.forEach(article => {
            let card = document.createElement("div");
            card.className = "card";
            card.innerHTML = `
                <img src='${article.urlToImage}' alt="">
                <h3>${article.title}</h3>
                <p>${article.description}</p>
                <a href="${article.url}">
                    <button id="link">Read more</button>
                </a>
            `;
            cards.appendChild(card);
        });
    }

    // Fetch news for the "General" category by default when the page loads
    fetchCategoryNews('general');
}

fetchNews();
