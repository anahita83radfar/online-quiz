/**
 * DECLARE CONSTANTS FOR DOM ELEMENTS
 */
const saveBtn = document.getElementById("save-btn");
const userName = document.getElementById("username");
const CurrentFinalScore = document.getElementById("current-final-score");
const form = document.getElementById("form");

// GET FINAL SCORE FROM LOCAL STORAGE
const finalScore = localStorage.getItem("finalScore");
CurrentFinalScore.innerHTML = finalScore;

const higherScores = JSON.parse(localStorage.getItem('higherScores')) || [] ;

/**
 * ADD CLICK EVENT LISTENER TO THE SAVE BUTTON
 */
// saveBtn.addEventListener('click', (e) => {
form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (userName.value.trim().length > 0) {

        const userScore = {
            name : userName.value,
            score : finalScore,
        };
        
        higherScores.push(userScore);
        higherScores.sort((a,b) => b.score - a.score);
        higherScores.splice(3);
    
        // SET HIGH SCORES TO LOCAL STORAGE
        localStorage.setItem("higherScores", JSON.stringify(higherScores));
        // GO TO HOME PAGE
        window.location.assign("/index.html");
    }
})

/**
 * ADD KEYUP EVENT LISTENER TO THE USERNAME INPUT
 */
// userName.addEventListener('keyup', () => {
//     if (userName.value.trim().length > 0) {
//         saveBtn.disabled = !userName.value;
//     }
// })
    


