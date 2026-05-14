About:
UXPrep is a data-driven quiz application designed to help users prepare for Frontend Web Development (FEWD) interviews. The platform provides quizzes across multiple frontend topics and dynamically renders questions using JSON data.

Tech Stack:
-HTML
-CSS
-JavaScript
-JSON

Challenges Faced and Lessons Learned:
Separation of Concerns
An early issue during development was mixing style responsibilities into JavaScript logic. Separating the logic with the presentation improved both maintainability and readability.

Quiz Validation Logic:
Another bug I faced was when validating that all of the questions have been answered, the application incorrectly reset the allAnswered variable to true during each question iteration. This bug was resolved by adjusting the logic to only update the variable when either a question wasn't answered, or at the very start of the function call. I chose to reset the allAnswered variable at the begining of each call to enable users to submit the quiz then, if they chose to select new answers and submit again, they are free to do so.

Potential Future Improvements: 
-Analysis for when a user submits the test. The application would explain why the user got each question correct/incorrect.
-Timer-based quizzes
-Expanded question database. There will be more questions and possibly prompt the user to choose the difficulty of the test. 