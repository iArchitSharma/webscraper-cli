# WebScraper CLI

WebScraper CLI is a command-line tool that allows you to fetch the text content of an HTML element on a web page using a CSS selector.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Dependencies](#dependencies)

## Installation

To install WebScraper CLI, follow these steps:

1. Clone or download this repository to your local machine:

```bash
git clone https://github.com/iarchitsharma/webscraper-cli.git
```
## Usage
To use WebScraper CLI, simply run it from your command line with the URL and CSS selector as arguments. Here's the basic syntax:

```bash
webscraper-cli -u <url> -s <selector>
```

2. Navigate to the project directory:
```bash
cd webscraper-cli
```

3. Install the project dependencies using npm:
```bash
npm install
```

4. Make the CLI globally available on your system:
```bash
npm install -g .
```
After following these steps, you'll be able to use WebScraper CLI as a global command from your terminal.

## Usage
To use WebScraper CLI, simply run it from your command line with the URL and CSS selector as arguments. Here's the basic syntax:

```bash
webscraper-cli -u <url> -s <selector>
```

Replace <url> with the URL of the web page you want to scrape and <selector> with the CSS selector that identifies the element whose text content you want to retrieve.

## Dependencies
WebScraper CLI relies on the following npm packages:

- **axios:** Used for making HTTP requests.
- **cheerio:** Employed for parsing HTML.
- **yargs:** Provides command-line argument handling.

These dependencies are automatically installed when you run npm install as part of the installation process.