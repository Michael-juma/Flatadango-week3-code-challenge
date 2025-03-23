
const filmMenu = document.getElementById('films');
const movieTitle = document.getElementById('movie-title');
const moviePoster = document.getElementById('movie-poster');
const movieDescription = document.getElementById('movie-description');
const movieRuntime = document.getElementById('movie-runtime');
const movieShowtime = document.getElementById('movie-showtime');
const availableTickets = document.getElementById('available-tickets');
const buyTicketBtn = document.getElementById('buy-ticket-btn');

const apiUrl = 'http://localhost:3000/films';  // Replace with your actual API URL

// Fetch all films
function fetchFilms() {
    fetch(apiUrl)
        .then(response => response.json())
        .then(films => {
            films.forEach(film => {
                const filmItem = document.createElement('li');
                filmItem.textContent = film.title;
                filmItem.classList.add('film-item');
                filmItem.addEventListener('click', () => showFilmDetails(film.id));
                filmMenu.appendChild(filmItem);
            });
        })
        .catch(error => console.error('Error fetching films:', error));
}

// Show details for a selected film
function showFilmDetails(filmId) {
    fetch(`${apiUrl}/${filmId}`)
        .then(response => response.json())
        .then(film => {
            movieTitle.textContent = film.title;
            moviePoster.src = film.poster;
            movieDescription.textContent = film.description;
            movieRuntime.textContent = film.runtime;
            movieShowtime.textContent = film.showtime;
            availableTickets.textContent = film.capacity - film.tickets_sold;

            // Handle the "Buy Ticket" button behavior
            buyTicketBtn.disabled = film.tickets_sold >= film.capacity;
            buyTicketBtn.textContent = film.tickets_sold >= film.capacity ? 'Sold Out' : 'Buy Ticket';
            
            // Track available tickets for buying
            buyTicketBtn.onclick = () => buyTicket(filmId, film.tickets_sold, film.capacity);
        })
        .catch(error => console.error('Error fetching film details:', error));
}

// Buy ticket for a movie
function buyTicket(filmId, ticketsSold, capacity) {
    if (ticketsSold < capacity) {
        const updatedTicketsSold = ticketsSold + 1;

        // Update ticket count on the server
        fetch(`${apiUrl}/${filmId}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ tickets_sold: updatedTicketsSold })
        })
        .then(response => response.json())
        .then(film => {
            // Update the available tickets displayed on the page
            availableTickets.textContent = film.capacity - film.tickets_sold;
            buyTicketBtn.disabled = film.tickets_sold >= film.capacity;
            buyTicketBtn.textContent = film.tickets_sold >= film.capacity ? 'Sold Out' : 'Buy Ticket';
        })
        .catch(error => console.error('Error buying ticket:', error));
    }
}

// Initialize the app
function init() {
    fetchFilms();
}

init();
