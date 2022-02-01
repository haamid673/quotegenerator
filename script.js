const quoteContainer = document.getElementById('quote-container')
const quoteText = document.getElementById('quote')
const authorText = document.getElementById('author')
const twitterBtn = document.getElementById('twitter')
const newQuoteBtn = document.getElementById('new-quote')
const loader = document.getElementById('loader');

// Loading Spinner Shown
function loading() {
    loader.hidden = false;
    quoteContainer.hidden = true;
  }
  
  // Remove Loading Spinner
  function complete() {
    if (!loader.hidden) {
      quoteContainer.hidden = false;
      loader.hidden = true;
    }
  }

//Show New Quote
function newQuote() {
    loading();
    //pick a random quote from apiquotes array
    const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)];
    //Check if author field is blank then replace it with 'unknown'

    if (quote.author == null) {
        authorText.textContent = "Unknown"
    } else {
        authorText.textContent = quote.author;
    }

    //Check quote length to determine styling

    if (quote.text.length > 120) {
        quoteText.classList.add('long-quote');
    } else {
        quoteText.classList.remove('long-quote');
    }
    //Set quote, hide loader

    quoteText.textContent = quote.text;
    complete();
}

function tweetQuote() {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
    window.open(twitterUrl, '_blank');
}

//Event Listeners
newQuoteBtn.addEventListener('click', newQuote);
twitterBtn.addEventListener('click', tweetQuote); 

//On Load
 newQuote();
