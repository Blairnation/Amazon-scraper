// Import required modules
const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');

// Create an Express application
const app = express();
const port = 3000;

// Define a route to handle the scraping process
app.get('/api/scrape', async (req, res) => {
  try {
    // Get the keyword from the query parameter
    const keyword = req.query.keyword;

    // Fetch the Amazon search results page for the given keyword
    const response = await axios.get(`https://www.amazon.com/s?k=${keyword}`);

    // Load the HTML content of the page into Cheerio
    const $ = cheerio.load(response.data);

    // Extract product details using Cheerio selectors
    const products = [];
    $('.s-result-item').each((index, element) => {
      const title = $(element).find('h2').text().trim();
      const rating = $(element).find('.a-icon-star-small .a-icon-alt').text().trim();
      const reviews = $(element).find('.s-title-instructions-mode .a-size-base').text().trim();
      const image = $(element).find('.s-image').attr('src');

      // Add the extracted details to the products array
      products.push({ title, rating, reviews, image });
    });

    // Send the extracted data as a JSON response
    res.json(products);
  } catch (error) {
    // Handle errors and send an error response
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Serve static files from the 'frontend' directory
app.use(express.static('frontend'));

// Start the Express server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
