const quoteContainer = document.getElementById('quote-container')
const quoteText = document.getElementById('quote')
const authorText = document.getElementById('author')
const twitterBtn = document.getElementById('twitter')
const newQuoteBtn = document.getElementById('new-quote')


// Get Quote From API
async function getQuote() {
    const proxyURL = 'http://cors-anywhere.herokuapp.com/'
    const apiURL = 'http://api.forismatic.com/api/1.0/?method=getQuote&lang=ru&format=json'
    try {
        const response = await fetch(proxyURL + apiURL)
        const data = await response.json()
        // If author is blank, add 'unkown'
        if (data.quoteAuthor === '') {
            authorText.innerText = 'Неизвестный автор'
        } else {
            authorText.innerText = data.quoteAuthor
        }

        // Reduce font size for long quotes
        if (data.quoteText.length > 120) {
            quoteText.classList.add('long-quote')
        } else {
            quoteText.classList.remove('long-quote')
        }
        
        quoteText.innerText = data.quoteText

    } catch (error) {
        getQuote()
        console.log('Ой, ничего не вышло', error)
    }
}

//Tweet Quote
const tweetQuote = () => {
    const quote = quoteText.innerText
    const author = authorText.innerText
    const twitterURL = `http://twitter.com/intent/tweet?text=${quote} - ${author}`
    window.open(twitterURL, '_blank')
}

//Event Listners
newQuoteBtn.addEventListener('click', getQuote)
twitterBtn.addEventListener('click', tweetQuote)