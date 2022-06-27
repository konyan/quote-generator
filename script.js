import { QUOTES } from "./quote.js";

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

let RANDOM_VALUE = getRandomInt(QUOTES.length);
let DEFAULT_QUOTE = QUOTES[RANDOM_VALUE];

console.log("DFAU", DEFAULT_QUOTE);

const quoteText = document.getElementById("quote-text");
const quoteAuthor = document.getElementById("quote-author");

{
  /* <small>hello World</small> */
}
const quoteProfession = document.createElement("small");
quoteProfession.classList = "text-sm";
quoteProfession.id = "author-profession";
quoteProfession.innerText = DEFAULT_QUOTE["profession"];

quoteText.innerText = DEFAULT_QUOTE["quote"];
quoteAuthor.innerText = `${DEFAULT_QUOTE["author"]} ; `;
quoteAuthor.append(quoteProfession);

const topicDOMUL = document.getElementById("topics");
const topicItems = DEFAULT_QUOTE["topics"];

{
  /* <li
class="rounded-full bg-indigo-600 px-4 flex items-center text-white h-8"
>
hello
</li> */
}

for (let t of topicItems) {
  const topicItem = document.createElement("li");
  topicItem.classList =
    "rounded-full bg-indigo-600 px-4 flex items-center text-white h-8 ml-2";
  topicItem.innerText = t;
  topicDOMUL.append(topicItem);
}
//append
//createElement
//getElementById
//innnerHTML
//innerText
