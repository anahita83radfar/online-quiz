const higherScoresList = document.querySelector("#higher-scores-list");
const higherScores = JSON.parse(localStorage.getItem('higherScores')) || [] ;

console.log(higherScores);

higherScoresList.innerHTML = higherScores
.map(userScore => {
    return `<li class="list">${userScore.name} ${userScore.score}</li>`
}).join("")
