let apiQuotes = [];
const loader = document.getElementById('loader')
const quoteContainer = document.getElementById('quote-container')


// Loading spinner functions

const loading = () => {
    loader.hidden = false;
    quoteContainer.hidden = true;

}
const complete = () => {
    quoteContainer.hidden = false;
    loader.hidden = true;
}

// Get quotes from API

async function getQuotes() {
    loading();
    const apiUrl = 'https://fucking-great-advice.ru/api/random';
    try {
        const response = await fetch(apiUrl);
        apiQuotes = await response.json()
        document.getElementById('quote').innerHTML = apiQuotes.text
        complete();
    } catch (error) {
        document.getElementById('quote').innerHTML = 'Ошибка. Что-то пошло нек так!'
    }
}
// On load
getQuotes();

// On click event

document.getElementById('new-quote').addEventListener('click', () => {
    getQuotes();
})