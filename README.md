# Amazon Scraper


## Setup

1. **Clone the repository:**
    ```bash
    git clone https://github.com/Blairnation/Amazon-scraper.git
    ```

2. **Navigate to the project directory:**
    ```bash
    cd amazon-scraper
    ```

3. **Install dependencies:**
    ```bash
    npm install express axios cheerio
    ```

## Running the Application

1. **Start the Node.js server:**
    ```bash
    node app.js
    ```

2. **Access the application:**
    Open your web browser and go to [http://localhost:3000](http://localhost:3000).

3. **Enter a search keyword and initiate the scraping process:**
    - Enter a keyword in the input field.
    - Click the "Scrape" button.

4. **View the results:**
    - The scraped data will be displayed below the input field in a formatted manner.

## Usage

Visit [http://localhost:3000/api/scrape?keyword=yourKeyword](http://localhost:3000/api/scrape?keyword=yourKeyword) in your browser.    

## Handling Errors

- Ensure to handle errors gracefully both on the backend and frontend to provide a smooth user experience.

## Note

- The application utilizes Node.js, Express, Axios, and Cheerio for web scraping.
- The backend provides an endpoint at `/api/scrape` to initiate the scraping process.

