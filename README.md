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

### 4. Run the Script
To start the script, run the following command:
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
The script is designed to:
1. **Take a screenshot** of the selected area.
2. **Save the screenshot** to your local storage.
3. **Flip to the next page** by simulating the right arrow key (`→`) press.

### Notes
- Make sure the book page you want to capture is open and fully visible on your screen before running the script.
- The script will continue capturing pages and saving them as screenshots until you stop it.

## Requirements
- Node.js (v12 or higher)
- Any web browser with the book loaded

## Example Usage
1. Open the book page you want to scrape.
2. Start the script with the `g` key.
3. Stop it when you’ve captured all the pages you need.

## License
This project is open source and available under the MIT License.
