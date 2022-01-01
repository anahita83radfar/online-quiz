const saveBtn = document.getElementById("save-btn");
const userName = document.getElementById("username");
const CurrentFinalScore = document.getElementById("current-final-score");

const finalScore = localStorage.getItem("finalScore");
CurrentFinalScore.innerHTML = finalScore;

const higherScores = JSON.parse(localStorage.getItem('higherScores')) || [] ;

saveBtn.addEventListener('click', (e) => {
    console.log(userName.value);
    e.preventDefault();

    const userScore = {
        name : userName.value,
        score : finalScore,
    };
    
    higherScores.push(userScore);
    higherScores.sort((a,b) => b.score - a.score);
    higherScores.splice(3);

    localStorage.setItem("higherScores", JSON.stringify(higherScores));
})

userName.addEventListener('keyup', () => {
    if (userName.value.trim().length > 0) {
        saveBtn.disabled = !userName.value;
    }
})
    


