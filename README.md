# Online Quiz

Online Quiz is a website to play an online quiz to test users' general knowledge. The website's goal is to provide a challenging quiz to entertain online users. This site will be targeted towards adults as a simple app to learn, practice, and have fun with.

This website is an example of pure JavaScript that will be targeted two aims to implement more advanced JavaScript concepts and test the general knowledge will help the user to grow as a person and gain new knowledge.

![Responsive](/assets/images/responsive.jpg)

# Features

- ### The Home page
  - The Home page featured the website's name "Online Quiz" in the middle of the Home page and the links to the Play page and the High scores page. 
  - The Home page makes the different pages of the website easy to find. It is fully responsive and allows for easy navigation to the next page.

![The Home page](/assets/images/home.jpg)

- ### The Play Page
  - This page includes three parts. In the top left of the page, there is a question counter and a progress bar, in the top right of the page, there is a score viewer and in the middle of the page, there is a question with multiple choice answers.
  - The question counter refers to the available questions and answered questions and the progress bar shows the percentage of answered questions.
  - The score viewer adds 10 points to the user's points with each correct answer.

  ![The Play page](/assets/images/play.jpg)

  - User going to answer 10 questions by choosing one option between multiple answer options. By selecting the correct answer the answer prefix changes to green color and by selecting the wrong answer the answer prefix changes to red.

  ![The Play page](/assets/images/play-right.jpg)

  ![The Play page](/assets/images/play-wrong.jpg)

- ### The Submit Page
  - This page appears directly after finishing answering all of the questions in the play page and includes the user's final score. This page will allow the user to save the final score with the user name. This page makes the different pages of the website easy to find by the links to the Play page and the Home page.

  ![The Submit page](/assets/images/submit.jpg)

- ### The High Scores page
  - Users can access this page by visiting the Home page. This page includes the last highest scores of the users and the link to the Home page. 

  ![The High scores page](/assets/images/high-scores.jpg)

### Design
- Sketch wireframes used in making the website mockup.

![Sketch wireframes](/assets/images/sketch.jpg)


# Testing

- This website has been tested in different browsers: Chrome, Firefox, and Safari.

- This website is responsive for different devices such as desktop pc, tablets, and mobile. It functions on all standard screen sizes using the Chrome Dev Tools device toolbar.

- Different parts of the website such as the home page, the play page, the question counter, and progress bar, the score viewer, the question and answers, and the high scores are easy to understand and readable.

- The colors and the font chosen are easy to read and accessible by running it through lighthouse in Chrome Devtools.

![Accessibility](/assets/images/accessibility.jpg)

### Bugs
#### Solved bugs
- When I deployed my project to the Github page I discovered the Play page could not link to the Submit page, and also the Submit page could not link to the Home page.
- I discovered this was because I had used absolute file paths such as this in my js code.

![Bugs](/assets/images/bug-submit-wrong.jpg)
![Bugs](/assets/images/bug-index-wrong.jpg)

- Changing the starting "/" and adding "./" fixed the problem

![Bugs](/assets/images/bug-submit-right.jpg)
![Bugs](/assets/images/bug-index-right.jpg)

- To Improve the Lighthouse accessibility score on Chrome Dev Tools, I changed the text color to darker blue to increase the contrast.

### Validator Testing

- HTML
  - No errors were returned when passing through the official [W3C validator](https://validator.w3.org/nu/?doc=https%3A%2F%2Fanahita83radfar.github.io%2Fonline-quiz%2F)
- CSS
  - No errors were found when passing through the official [(Jigsaw) validator](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fanahita83radfar.github.io%2Fonline-quiz%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=sv)
- JavaScript
  - No errors were found when passing through the official  [Jshint validator](https://jshint.com/).
    - The following metrics were returned for the play.js file:
    - There are 7 functions in this file.
    - Function with the largest signature take 2 arguments, while the median is 0.
    - Largest function has 13 statements in it, while the median is 2.
    - The most complex function has a cyclomatic complexity value of 4 while the median is 1.

    - The following metrics were returned for the submit.js file:
    - There are 2 functions in this file.
    - Function with the largest signature take 2 arguments, while the median is 1.5.
    - Largest function has 8 statements in it, while the median is 4.
    - The most complex function has a cyclomatic complexity value of 2 while the median is 1.5.

    - The following metrics were returned for the highscores.js file:
    - There is only one function in this file.
    - It takes one argument.
    - This function contains only one statement.
    - Cyclomatic complexity number for this function is 1.
  
# Deployment
- The site was deployed to GitHub pages. The steps to deploy are as follows:
  - In the GitHub repository, navigate to the Settings tab
  - From the source section drop-down menu, select the Master Branch
  - Once the master branch has been selected, the page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment.

The live link can be found here - https://anahita83radfar.github.io/online-quiz/

# Credits
### Content
- The font in the Yoga Lovers website were taken from Google Fonts [Google Fonts](https://fonts.google.com/)
- The website ide was taken from [Specific YouTube Tutorial](https://www.youtube.com/watch?v=u98ROZjBWy8&list=PLDlWc9AfQBfZIkdVaOQXi1tizJeNJipEx&index=1)

### Media
- The favicon image is from [Free icons Library](https://icon-library.com/icon/faq-icon-white-11.html)
