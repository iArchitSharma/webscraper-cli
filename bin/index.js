#!/usr/bin/env node

const yargs = require("yargs");
const axios = require("axios");
const cheerio = require("cheerio");

const options = yargs
  .usage("Usage: -u <url> -s <selector>")
  .option("u", {
    alias: "url",
    describe: "The URL to fetch data from",
    type: "string",
    demandOption: true,
  })
  .option("s", {
    alias: "selector",
    describe: "The CSS selector to match elements",
    type: "string",
    demandOption: true,
  }).argv;

async function fetchHtml(url) {
  try {
    const response = await axios.get(url);
    if (response.status === 200) {
      const htmlString = response.data;
      return htmlString;
    } else {
      throw new Error(`Failed to fetch HTML. Status code: ${response.status}`);
    }
  } catch (error) {
    console.error(`Error fetching HTML: ${error.message}`);
    return null;
  }
}

fetchHtml(options.url)
.then((htmlString)=>{
    if(htmlString){
        const $ = cheerio.load(htmlString);
        console.log($(options.selector).text());
    } else {
        console.log('HTML content not available.');
      }
})
.catch((error) => {
    console.error('An error occurred:', error);
  });
