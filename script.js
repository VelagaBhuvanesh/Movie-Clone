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
