// Get Quote From API
async function getQuote() {
    const proxyURL = 'http://cors-anywhere.herokuapp.com/'
    const apiURL = 'http://api.forismatic.com/api/1.0/?method=getQuote&lang=ru&format=json'
    try {
        const response = await fetch(proxyURL + apiURL)
        const data = await response.json()
        console.log('ghghfjfdd', data)
    } catch (error) {
        getQuote()
        console.log('Ой, ничего не вышло', error)
    }
}

// On Load
getQuote()