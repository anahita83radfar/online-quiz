/**
 * DECLARE CONSTANTS FOR DOM ELEMENTS
 */
 const userName = document.getElementById("username");
 const CurrentFinalScore = document.getElementById("current-final-score");
 const form = document.getElementById("form");
 
 // GET FINAL SCORE FROM LOCAL STORAGE
 const finalScore = localStorage.getItem("finalScore");
 CurrentFinalScore.innerHTML = finalScore;
 
 //The code taken from the Specific YouTube Tutorial
 const higherScores = JSON.parse(localStorage.getItem('higherScores')) || [] ;
 
 /**
  * ADD SUBMIT EVENT LISTENER TO THE SAVE BUTTON
  */
 form.addEventListener('submit', (e) => {
     e.preventDefault();
 
     if (userName.value.trim().length > 0) {
 
         const userScore = {
             name : userName.value,
             score : finalScore,
         };
         
         higherScores.push(userScore);
         //The code taken from the Specific YouTube Tutorial
         higherScores.sort((a,b) => b.score - a.score);
         higherScores.splice(3);
     
         // SET HIGH SCORES TO LOCAL STORAGE
         //The code taken from the Specific YouTube Tutorial
         localStorage.setItem("higherScores", JSON.stringify(higherScores));
         // GO TO HOME PAGE
         window.location.assign("./index.html");
     }
 });