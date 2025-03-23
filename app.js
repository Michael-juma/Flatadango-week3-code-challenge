const films = [
    {
      id: 1,
      title: "The Giant Gila Monster",
      runtime: 108,
      capacity: 30,
      showtime: "04:00PM",
      tickets_sold: 27,
      description: "A giant lizard terrorizes a rural Texas community and a heroic teenager attempts to destroy the creature.",
      poster: "https://www.gstatic.com/tv/thumb/v22vodart/2157/p2157_v_v8_ab.jpg"
    },
    {
      id: 2,
      title: "Manos: The Hands Of Fate",
      runtime: 118,
      capacity: 50,
      showtime: "06:45PM",
      tickets_sold: 44,
      description: "A family gets lost on the road and stumbles upon a hidden, underground, devil-worshiping cult led by the fearsome Master and his servant Torgo.",
      poster: "https://www.gstatic.com/tv/thumb/v22vodart/47781/p47781_v_v8_ac.jpg"
    },
    {
      id: 3,
      title: "Plan 9 from Outer Space",
      runtime: 79,
      capacity: 100,
      showtime: "07:30PM",
      tickets_sold: 90,
      description: "Aliens try to stop humans from creating a doomsday weapon that could destroy the galaxy, but their plan leads to an army of the undead.",
      poster: "https://upload.wikimedia.org/wikipedia/en/3/34/Plan9fromouterspace_poster.jpg"
    }
  ];

  
  function displayFilms() {
    const filmListContainer = document.getElementById('film-list');
    filmListContainer.innerHTML = ''; 

    films.forEach(film => {
      
      const filmCard = document.createElement('div');
      filmCard.classList.add('film-card');

      const posterImg = document.createElement('img');
      posterImg.src = film.poster;
      posterImg.alt = `${film.title} poster`;
      filmCard.appendChild(posterImg);

      
      const title = document.createElement('h3');
      title.textContent = film.title;
      filmCard.appendChild(title);

      
      const description = document.createElement('p');
      description.textContent = film.description;
      filmCard.appendChild(description);

      
      const showtime = document.createElement('p');
      showtime.classList.add('showtime');
      showtime.textContent = `Showtime: ${film.showtime}`;
      filmCard.appendChild(showtime);


      const ticketsSold = document.createElement('p');
      ticketsSold.classList.add('tickets-sold');
      ticketsSold.textContent = `Tickets Sold: ${film.tickets_sold}`;
      filmCard.appendChild(ticketsSold);

    
      filmListContainer.appendChild(filmCard);
    });
  }

  
  displayFilms();