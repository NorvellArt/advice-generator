let apiQuotes = [];
const loader = document.getElementById('loader')
const quoteContainer = document.getElementById('quote-container')

// Get quotes from API

const loading = () => {
    loader.hidden = false;
    quoteContainer.hidden = true;

}
const complete = () => {
    quoteContainer.hidden = false;
    loader.hidden = true;
}

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

document.getElementById('new-quote').addEventListener('click', () => {
    getQuotes();
})