const api = "https://fakestoreapi.com/products";
let allproducts=[]
// Function to create a card element
function createCard(product) {
  const card = document.createElement('div');
  card.className = "card";

  // Create and append image element
  const img = document.createElement('img');
  img.className = "images";
  img.src = product.image;
  img.alt = product.title;

  // Create and append title element
  const title = document.createElement('p');
  title.innerHTML = product.title;

  // Create and append price element
  const price = document.createElement('p');
  price.innerHTML = `$${Math.floor(product.price)}`;

  // Create details container and append title and price
  const details = document.createElement('div');
  details.className = "details";
  details.appendChild(title);
  details.appendChild(price);

  // Append image and details to the card
  card.appendChild(img);
  card.appendChild(details);

  return card;
}

// Function to display products
function displayProducts(products) {
  const productsContainer = document.getElementById('products');
  productsContainer.innerHTML = ''; // Clear existing products

  products.forEach(product => {
    const card = createCard(product);
    productsContainer.appendChild(card);
  });
}

// Function to fetch data
async function fetchData() {
    try {
      const response = await fetch(api);
      const data = await response.json();
      allproducts=data
      displayProducts(data);
  
      // Add event listener to search input
      const searchInput = document.getElementById('input');
      searchInput.addEventListener('input', () => {
        const query = searchInput.value.toLowerCase();
        const filteredProducts = data.filter(product =>
          product.title.toLowerCase().includes(query)
        );
        displayProducts(filteredProducts);
      });


      //category data
      const listItems = document.querySelectorAll('ul li');

      // Loop through each li element
      listItems.forEach(function(item) {
          // Add click event listener to each li
          item.addEventListener('click', function() {
              // Retrieve the text content of the clicked li
                const text = this.textContent;
                
                const categoryFiltered=text.toLowerCase()==="all"?allproducts:data.filter(product=>
                    product.category.toLowerCase()===text.toLowerCase()
                )
                displayProducts(categoryFiltered)
          });
      });
    } catch (error) {
      console.log(error);
    }
  }
  
  fetchData();