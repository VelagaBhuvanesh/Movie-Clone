// Main JavaScript for NILE
document.addEventListener('DOMContentLoaded', function() {
    const movieOverlay = document.querySelector('.movie-overlay');
    const contentSections = document.querySelector('.content-sections');
    const closeOverlayBtn = document.querySelector('.close-overlay');
    const favouritesGrid = document.getElementById('favourites-grid');
    const favouritesMessage = document.getElementById('favourites-message');
    const thumbnailsGrid = document.getElementById('thumbnails-grid');

    // Sample content data
    const contentData = {
        // Movies
        '1': { type: 'movie', title: 'Coolie', description: 'Rajanikanth stars in this classic action movie.', imdb: '7.8/10', tomato: '85%', poster: 'coolie.jpeg', cast: ['Rajanikanth', 'Actor 2', 'Actor 3'] },
        '2': { type: 'movie', title: 'Joker', description: 'A failed comedian spirals into madness in Gotham City.', imdb: '8.4/10', tomato: '88%', poster: 'https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg', cast: ['Joaquin Phoenix', 'Robert De Niro'] },
        '3': { type: 'movie', title: 'Oppenheimer', description: 'Biography of J. Robert Oppenheimer and the development of the atomic bomb.', imdb: '8.5/10', tomato: '92%', poster: 'oppenheimer.jpeg', cast: ['Cillian Murphy', 'Emily Blunt'] },
        '4': { type: 'movie', title: 'Interstellar', description: 'A team travels through a wormhole to save humanity.', imdb: '8.6/10', tomato: '72%', poster: 'https://image.tmdb.org/t/p/w500/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg', cast: ['Matthew McConaughey', 'Anne Hathaway'] },
        '5': { type: 'movie', title: 'Inception', description: 'A thief steals secrets through dream-sharing technology.', imdb: '8.8/10', tomato: '87%', poster: 'inception.jpeg', cast: ['Leonardo DiCaprio', 'Joseph Gordon-Levitt'] },
        '6': { type: 'movie', title: 'Avengers: Endgame', description: 'The Avengers assemble to reverse Thanos’s actions.', imdb: '8.4/10', tomato: '94%', poster: 'https://image.tmdb.org/t/p/w500/ulzhLuWrPK07P1YkdWQLZnQh1JL.jpg', cast: ['Robert Downey Jr.', 'Chris Evans'] },
        '7': { type: 'movie', title: 'The Dark Knight', description: 'Batman faces the Joker in Gotham City.', imdb: '9.0/10', tomato: '94%', poster: 'https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg', cast: ['Christian Bale', 'Heath Ledger'] },
        '8': { type: 'movie', title: 'Avatar', description: 'A marine explores Pandora and joins the Na’vi.', imdb: '7.8/10', tomato: '82%', poster: 'avatar.jpeg', cast: ['Sam Worthington', 'Zoe Saldana'] },

        // Series
        '11': { type: 'series', title: 'Breaking Bad', description: 'A chemistry teacher turns into a meth kingpin.', imdb: '9.5/10', tomato: '96%', poster: 'https://image.tmdb.org/t/p/w500/eSzpy96DwBujGFj0xMbXBcGcfxX.jpg', cast: ['Bryan Cranston', 'Aaron Paul'] },
        '12': { type: 'series', title: 'Stranger Things', description: 'Kids uncover supernatural events in Hawkins.', imdb: '8.7/10', tomato: '93%', poster: 'https://image.tmdb.org/t/p/w500/x2LSRK2Cm7MZhjluni1msVJ3wDF.jpg', cast: ['Millie Bobby Brown', 'Finn Wolfhard'] },
        '13': { type: 'series', title: 'The Witcher', description: 'A monster hunter navigates a dangerous world.', imdb: '8.2/10', tomato: '67%', poster: 'https://image.tmdb.org/t/p/w500/zrPpUlehQaBf8YX2NrVrKK8IEpf.jpg', cast: ['Henry Cavill', 'Anya Chalotra'] },
        '14': { type: 'series', title: 'Money Heist', description: 'Criminals execute perfect heists.', imdb: '8.3/10', tomato: '90%', poster: 'https://image.tmdb.org/t/p/w500/reEMJA1uzscCbkpeRJeTT2bjqUp.jpg', cast: ['Úrsula Corberó', 'Álvaro Morte'] },
        '15': { type: 'series', title: 'Game of Thrones', description: 'Noble families vie for the Iron Throne.', imdb: '9.3/10', tomato: '89%', poster: 'https://image.tmdb.org/t/p/w500/u3bZgnGQ9T01sWNhyveQz0wH0Hl.jpg', cast: ['Emilia Clarke', 'Kit Harington'] },
        '16': { type: 'series', title: 'The Mandalorian', description: 'A bounty hunter travels across the galaxy.', imdb: '8.8/10', tomato: '92%', poster: 'https://image.tmdb.org/t/p/w500/sWgBv7LV2PRoQgkxwlibdGXKz1S.jpg', cast: ['Pedro Pascal', 'Gina Carano'] },
        '17': { type: 'series', title: 'Friends', description: 'The lives of six friends in NYC.', imdb: '8.9/10', tomato: '78%', poster: 'https://image.tmdb.org/t/p/w500/f496cm9enuEsZkSPzCwnTESEK5s.jpg', cast: ['Jennifer Aniston', 'Courteney Cox'] },
        '18': { type: 'series', title: 'The Boys', description: 'Superheroes with dark secrets.', imdb: '8.7/10', tomato: '81%', poster: 'https://image.tmdb.org/t/p/w500/mY7SeH4HFFxW1hiI6cWuwCRKptN.jpg', cast: ['Karl Urban', 'Jack Quaid'] },

        // Anime
        '21': { type: 'anime', title: 'Attack on Titan', description: 'Humans fight Titans to survive.', imdb: '9.0/10', tomato: '97%', poster: 'https://image.tmdb.org/t/p/w500/aiH5YgrZplOeFzo1Y3BWEN7wGzX.jpg', cast: ['Eren Jaeger', 'Mikasa Ackerman'] },
        '22': { type: 'anime', title: 'Demon Slayer', description: 'A boy fights demons to save his sister.', imdb: '8.8/10', tomato: '90%', poster: 'https://image.tmdb.org/t/p/w500/3p6Zhh0cGquXc3d8pB23kxb2qjL.jpg', cast: ['Tanjiro', 'Nezuko'] },
        '23': { type: 'anime', title: 'Naruto', description: 'A ninja seeks recognition and peace.', imdb: '8.3/10', tomato: '75%', poster: 'https://image.tmdb.org/t/p/w500/8sGxQsjpK1ZzmJzA0g0czE6I5zZ.jpg', cast: ['Naruto', 'Sasuke'] },
        '24': { type: 'anime', title: 'One Piece', description: 'Pirates search for the ultimate treasure.', imdb: '8.9/10', tomato: '91%', poster: 'https://image.tmdb.org/t/p/w500/9Y5ozjgrC9I7V0AC9Xsq9m1oq1r.jpg', cast: ['Luffy', 'Zoro'] },
        '25': { type: 'anime', title: 'Death Note', description: 'A notebook kills anyone whose name is written.', imdb: '8.6/10', tomato: '89%', poster: 'https://image.tmdb.org/t/p/w500/3S5Y9i6yCnFKDjT8FQFjB0H9g3.jpg', cast: ['Light', 'L'] },
        '26': { type: 'anime', title: 'My Hero Academia', description: 'A boy trains to be a superhero.', imdb: '8.4/10', tomato: '85%', poster: 'https://image.tmdb.org/t/p/w500/1MyHqLk0hv2FRLhR8M9a6mM9H.jpg', cast: ['Izuku Midoriya', 'All Might'] },
        '27': { type: 'anime', title: 'Fullmetal Alchemist', description: 'Two brothers search for the Philosopher\'s Stone.', imdb: '9.1/10', tomato: '95%', poster: 'https://image.tmdb.org/t/p/w500/jkC2VhIzzXXKpQ5DfHtwZ1IKyt.jpg', cast: ['Edward', 'Alphonse'] },
        '28': { type: 'anime', title: 'Dragon Ball Z', description: 'Warriors fight to save Earth.', imdb: '8.7/10', tomato: '87%', poster: 'https://image.tmdb.org/t/p/w500/2hA6vDSyfUeVJx1v3jHWnftY3R8.jpg', cast: ['Goku', 'Vegeta'] }
    };

    // Detect current page
    const page = window.location.pathname.split('/').pop().split('.')[0];

    // Function to populate thumbnails
    function populateThumbnails(filterType) {
        if (!thumbnailsGrid) return;
        thumbnailsGrid.innerHTML = '';

        let filtered = Object.entries(contentData).filter(([id, data]) => {
            if (!filterType) return true; // home page: all
            return data.type === filterType;
        });

        filtered.forEach(([id, data], index) => {
            const thumb = document.createElement('div');
            thumb.classList.add('thumbnail');
            thumb.setAttribute('data-id', id);
            thumb.innerHTML = `
                <div class="thumbnail-img" style="background-image: url('${data.poster}')"></div>
                <div class="thumbnail-title">${data.title}</div>
                <div class="favourite-symbol" data-id="${id}" style="position:absolute; top:5px; right:5px; cursor:pointer; font-size:20px; color:rgba(255,255,255,0.8); z-index:2;">&#10084;</div>
            `;
            thumbnailsGrid.appendChild(thumb);

            // Hover effect
            thumb.addEventListener('mouseenter', () => {
                thumb.style.transform = 'scale(1.05)';
                thumb.style.boxShadow = '0 10px 20px rgba(0,0,0,0.5)';
            });
            thumb.addEventListener('mouseleave', () => {
                thumb.style.transform = 'scale(1)';
                thumb.style.boxShadow = 'none';
            });

            // Favourite click
            thumb.querySelector('.favourite-symbol').addEventListener('click', (e) => {
                e.stopPropagation();
                addToFavourites(id);
            });

            // Overlay open
            thumb.addEventListener('click', () => openContentOverlay(id));
        });
    }

    // Populate based on page
    if (page === 'index') {
        populateThumbnails(); // home: all content
        openContentOverlay('1');
    } else if (page === 'movies') {
        populateThumbnails('movie');
    } else if (page === 'series') {
        populateThumbnails('series');
    } else if (page === 'anime') {
        populateThumbnails('anime');
    }

    // Overlay functions
    function openContentOverlay(contentId) {
        if (!movieOverlay) return;
        movieOverlay.classList.add('active');
        if (contentSections) contentSections.classList.remove('active');
        updateOverlayContent(contentId);
    }

    if (closeOverlayBtn) {
        closeOverlayBtn.addEventListener('click', () => {
            if (movieOverlay) movieOverlay.classList.remove('active');
            if (contentSections) contentSections.classList.add('active');
        });
    }

    function updateOverlayContent(contentId) {
        const data = contentData[contentId];
        if (!data) return;

        const title = document.querySelector('.movie-title');
        const description = document.querySelector('.movie-description');
        const ratingImdb = document.querySelector('.rating:nth-child(1) .rating-value');
        const ratingTomato = document.querySelector('.rating:nth-child(2) .rating-value');
        const castScroll = document.querySelector('.cast-scroll');

        title.textContent = data.title;
        description.textContent = data.description;
        ratingImdb.textContent = data.imdb;
        ratingTomato.textContent = data.tomato;

        // Populate cast
        castScroll.innerHTML = '';
        data.cast.forEach(name => {
            const castMember = document.createElement('div');
            castMember.classList.add('cast-member');
            castMember.innerHTML = `<div class="cast-img"></div><div class="cast-name">${name}</div>`;
            castScroll.appendChild(castMember);
        });

        // VIDEO LOOP LOGIC
        const video = document.getElementById("bg-video");
        if (video) {
            // Attack on Titan loop
            if (data.title === 'Attack on Titan') {
                const loopStart = 127;
                const loopEnd = 157;
                video.addEventListener('loadedmetadata', () => {
                    if (video.duration > loopStart) {
                        video.currentTime = loopStart;
                        video.play();
                    }
                });
                video.addEventListener('timeupdate', () => {
                    if (video.currentTime >= loopEnd) {
                        video.currentTime = loopStart;
                        video.play();
                    }
                });
            }

            // Breaking Bad loop
            if (data.title === 'Breaking Bad') {
                const loopStart = 20;
                const loopEnd = 93;
                video.addEventListener('loadedmetadata', () => {
                    if (video.duration > loopStart) {
                        video.currentTime = loopStart;
                        video.play();
                    }
                });
                video.addEventListener('timeupdate', () => {
                    if (video.currentTime >= loopEnd) {
                        video.currentTime = loopStart;
                        video.play();
                    }
                });
            }

            // Oppenheimer loop
            if (data.title === 'Oppenheimer') {
                const loopStart = 20;
                const loopEnd = 93;
                video.addEventListener('loadedmetadata', () => {
                    if (video.duration > loopStart) {
                        video.currentTime = loopStart;
                        video.play();
                    }
                });
                video.addEventListener('timeupdate', () => {
                    if (video.currentTime >= loopEnd) {
                        video.currentTime = loopStart;
                        video.play();
                    }
                });
            }
        }
    }

    // Favourites
    function addToFavourites(id) {
        let favourites = JSON.parse(localStorage.getItem('nileFavourites')) || [];
        if (!favourites.includes(id)) favourites.push(id);
        localStorage.setItem('nileFavourites', JSON.stringify(favourites));
        alert('Added to favourites!');
    }

    // Populate favourites page
    if (favouritesGrid) {
        const favourites = JSON.parse(localStorage.getItem('nileFavourites')) || [];
        favouritesGrid.innerHTML = '';

        if (favourites.length === 0) {
            if (favouritesMessage) favouritesMessage.style.display = 'block';
        } else {
            if (favouritesMessage) favouritesMessage.style.display = 'none';
            favourites.forEach(id => {
                if (contentData[id]) {
                    const data = contentData[id];
                    const thumb = document.createElement('div');
                    thumb.classList.add('thumbnail');
                    thumb.setAttribute('data-id', id);
                    thumb.innerHTML = `
                        <div class="thumbnail-img" style="background-image: url('${data.poster}')"></div>
                        <div class="thumbnail-title">${data.title}</div>
                        <div class="favourite-symbol" data-id="${id}" style="position:absolute; top:5px; right:5px; cursor:pointer; font-size:20px; color:rgba(255,255,255,0.8); z-index:2;">&#10084;</div>
                    `;
                    favouritesGrid.appendChild(thumb);

                    thumb.addEventListener('click', () => openContentOverlay(id));
                }
            });
        }
    }
});
const sidebar = document.querySelector('.sidebar');
const movieOverlay = document.querySelector('.movie-overlay');

document.querySelectorAll('.thumbnail').forEach(th => {
    th.addEventListener('click', () => {
        movieOverlay.classList.add('active');
        sidebar.classList.add('sidebar-horizontal');
    });
});

document.querySelector('.close-overlay')?.addEventListener('click', () => {
    movieOverlay.classList.remove('active');
    sidebar.classList.remove('sidebar-horizontal');
});
// ================= LOADING SCREEN =================
const triviaList = [
  "In The Godfather, the cat that Marlon Brando is seen petting in the opening scene was a stray that director Francis Ford Coppola found on the studio lot.",
  "An item frequently hidden throughout the movie Fight Club is a Starbucks coffee cup, and there's one visible in nearly every scene.",
  "The velociraptor sounds in Jurassic Park were created using the mating sounds of tortoises.",
  "The gibberish language spoken by the Minions in the Despicable Me movies was improvised by the voice actor, mixing together French, Spanish, and nonsense words.",
  "In the original Halloween movie, Michael Myers' mask was a painted Captain Kirk mask from Star Trek, used due to the film's low budget."
];

let index = 0;
const triviaElement = document.getElementById('trivia');

// Initial trivia
triviaElement.textContent = triviaList[index];

function changeTrivia() {
  triviaElement.classList.add('fade-out');
  setTimeout(() => {
    index = (index + 1) % triviaList.length;
    triviaElement.textContent = triviaList[index];
    triviaElement.classList.remove('fade-out');
  }, 1000);
}

setInterval(changeTrivia, 6800);