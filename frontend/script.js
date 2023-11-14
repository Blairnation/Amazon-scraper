// Function to initiate the Amazon scraping process
function scrapeAmazon() {
  // Get the search keyword from the input field
  const keyword = document.getElementById('keyword').value;

  // Make a GET request to the backend API endpoint for scraping
  fetch(`http://localhost:3000/api/scrape?keyword=${keyword}`)
    .then(response => response.json()) // Parse the response as JSON
    .then(data => {
      // Get the container element to display the results
      const resultsContainer = document.getElementById('results');
      resultsContainer.innerHTML = ''; // Clear previous results

      // Iterate through each product in the data and display details
      data.forEach(product => {
        // Create a div element for each product
        const productDiv = document.createElement('div');
        productDiv.innerHTML = `
          <h3>${product.title}</h3>
          <p>Rating: ${product.rating}</p>
          <p>Reviews: ${product.reviews}</p>
          <img src="${product.image}" alt="Product Image">
          <hr>
        `;
        // Append the product div to the results container
        resultsContainer.appendChild(productDiv);
      });
    })
    .catch(error => console.error(error)); // Handle any errors during the process
}
