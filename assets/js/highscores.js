/**
 * DECLARE CONSTANTS FOR DOM ELEMENTS
 */
 const higherScoresList = document.querySelector("#higher-scores-list");
 // GET HIGH SCORES FROM LOCAL STORAGE
 //The code taken from the Specific YouTube Tutorial
 const higherScores = JSON.parse(localStorage.getItem('higherScores')) || [] ;
 
 higherScoresList.innerHTML = higherScores
 .map(userScore => {
    return `<li class="list">${userScore.name} ${userScore.score}</li>`;
 }).join("");