let questions = [
    {
        question : "Area 51 is located in which US state?",
        answer1 : "Arizona",
        answer2 : "Nevada",
        answer3 : "New Mexico",
        answer4: "Utah",
        correct : 2
    },
    {
        question : "What alcoholic drink is made from molasses?",
        answer1 : "Vodka",
        answer2 : "Whisky",
        answer3 : "Rum",
        answer4: "Gin",
        correct : 3
    },
    {
        question : "Red Vines is a brand of what type of candy?",
        answer1 : "Licorice",
        answer2 : "Lollipop",
        answer3 : "Chocolate",
        answer4: "Bubblegum",
        correct : 1
    },
    {
        question : "What is the nickname of the US state of California?",
        answer1 : "Sunshine State",
        answer2 : "Bay State",
        answer3 : "Treasure State",
        answer4: "Golden State",
        correct : 4
    },
    {
        question : "Who is depicted on the US hundred dollar bill?",
        answer1 : "George Washington",
        answer2 : "Benjamin Franklin",
        answer3 : "Abraham Lincoln",
        answer4: "Thomas Jefferson",
        correct : 2
    },
    {
        question : "Which sign of the zodiac comes between Virgo and Scorpio?",
        answer1 : "Taurus",
        answer2 : "Gemini",
        answer3 : "Capricorn",
        answer4: "Libra",
        correct : 1
    },
    {
        question : "Which country, not including Japan, has the most people of japanese decent?",
        answer1 : "Brazil",
        answer2 : "China",
        answer3 : "South Korea",
        answer4: "United States of America",
        correct : 1
    },
    {
        question : "Which country has the union jack in its flag?",
        answer1 : "South Africa",
        answer2 : "Canada",
        answer3 : "Hong Kong",
        answer4: "New Zealand",
        correct : 4
    },
    {
        question : "From which language is the word ‘ketchup’ derived?",
        answer1 : "Brazil",
        answer2 : "China",
        answer3 : "South Korea",
        answer4: "United States of America",
        correct : 2
    },
    {
        question : "Which is the country with the biggest population in Europe?",
        answer1 : "Italy",
        answer2 : "Spain",
        answer3 : "Germany",
        answer4: "Russia",
        correct : 4
    },
]

const question = document.getElementById("question");
const answersTexts = Array.from(document.getElementsByClassName("answer-text"));
const answersPrefixs = Array.from(document.getElementsByClassName("answer-prefix"));
const questionCounterContent = document.getElementById("questionCounter");
const scoreConten = document.getElementById("score");

let questionCounter;
let score;
let currentQuestion;
let availableQuestions;
let choosingAnswer;

const bonus = 10;

function startGame(){
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    console.log(availableQuestions);
    getNewQuestion ();

};

function getNewQuestion() {
    if(availableQuestions.length === 0) {
        return window.location.assign("/submit.html");
        // GO TO SUBMIT PAGE
    }

    questionCounter++ ;
    questionCounterContent.innerHTML = `${questionCounter}/${questions.length}`;
    
    const questionIndex = 0;
    currentQuestion = availableQuestions[questionIndex];
    question.innerHTML = currentQuestion.question;
    

    answersTexts.forEach((answerText, index) => {
    const number = ++index;
    answerText.innerHTML = currentQuestion[`answer${number}`];
    })

    availableQuestions.splice(questionIndex, 1);

    choosingAnswer = true;

};

answersTexts.forEach((answerText, index) => {
    answerText.addEventListener('click', () => {
        if (!choosingAnswer) {
            return;
        }

        choosingAnswer = false;
        const selectedChoice = index + 1 ;

        let classToApply 
        if (selectedChoice == currentQuestion.correct) {
            classToApply = "correct";
        } else {
            classToApply = "incorrect";
        };

        let selectedAnswer = answersPrefixs[index];
        selectedAnswer.classList.add(classToApply);

        if (classToApply === "correct") {
            increaseScore(bonus);
        }

        setTimeout(() => {
            selectedAnswer.classList.remove(classToApply);
            getNewQuestion()
        }, 500);
      
    })
    
})

startGame();

function increaseScore(number) {
    score += number;
    scoreConten.innerHTML = score;
}
