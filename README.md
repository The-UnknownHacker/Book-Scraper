# Book-Scraper

**Book-Scraper** is a tool that allows you to convert your online books into PDFs, even if they are not directly downloadable.

## Getting Started

Follow these steps to set up and use the scraper:

### 1. Clone the Repository
First, clone the repository to your local machine using Git:
```
git clone https://github.com/The-UnknownHacker/Book-Scraper
```

### 2. Unzip (If Applicable) or Go to `index.js`
- If you downloaded a ZIP file, unzip it.
- If you cloned the repository using Git, navigate directly to the `index.js` file in the project folder.

### 3. Install Dependencies
Before running the script, make sure you have installed the necessary dependencies. Run:
```
npm install
```

### 4. Run the Scraper Script
To start the screenshot scraping process, run the following command:
```
node index.js
```

### 5. Set Screenshot Coordinates
Use any tool to get the exact coordinates for the screenshot area you want to capture on the screen. You can use tools like:

- **Snipping Tool** (Windows)
- **Snip & Sketch** (Windows)
- **Screenshot Tool** (Mac)
- **Any other screenshot tool** that allows you to select a specific area of the screen.

### 6. Start and Stop the Script
- Press `g` to **start** the script.
- Press `g` again to **stop** the script once you’ve captured enough pages.

### 7. How the Script Works
The script will:
1. **Take a screenshot** of the selected area.
2. **Save the screenshot** to your local storage.
3. **Flip to the next page** by simulating the right arrow key (`→`) press.

### 8. Combine Screenshots into a PDF
Once you've captured all your screenshots, you can use the `combine.py` script in the repository to combine them into a single **PDF** file. Here's how to use it:

1. Ensure you have **Python** installed on your system.
2. Run the following command to combine all screenshots into a **PDF** file:
   ```
   python combine.py
   ```
3. The output will be a `.pdf` file containing all the screenshots.

### Notes for Combining Screenshots:
- Ensure all screenshots are in the same directory as the `combine.py` script.
- The script will automatically order the screenshots in the filename sequence (`screenshot-1.png`, `screenshot-2.png`, etc.).
  
## Requirements
- Node.js (v12 or higher)
- Python (for `combine.py`)
- Any web browser with the book loaded

## Example Usage
1. Open the book page you want to scrape.
2. Start the script with the `g` key.
3. Stop it when you’ve captured all the pages you need.
4. Run the `combine.py` script to combine the screenshots into a PDF.

## License
This project is open source and available under the MIT License.
