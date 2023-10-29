/*
  TODO: 2. Select all elements needed
    * The form element (has the id `quiz-form`)
    * The answer inputs (have the class `answer`)
    * BONUS: The questions (have the class `question-item`)
    * BONUS: The alert (has the id `alert`)
*/

const quizForm = document.querySelector('#quiz-form');
const answers = Array.from(document.querySelectorAll('.answer'))
const questions = document.querySelectorAll('.question-item')
// const questionItems = document.querySelectorAll(".question-item")
const alert = document.querySelector('#alert')

// TODO: 3. Create a submit event listener for the form that does the following.


quizForm.addEventListener('submit', e => {
  //    1. Prevent the default behaviour
  e.preventDefault();

  //    6. BONUS: Make sure unanswered questions show up as incorrect. The easiest way to do this is to add the incorrect class and removing the correct class from all question items before checking the correct answers
  questions.forEach(question => {
    question.classList.add('incorrect')
    question.classList.remove('correct')

  })

  //    2. Get all selected answers (use the `checked` property on the input to determine if it is selected or not)
  const checkAnswer = answers.filter(answer => answer.checked)
  // console.log(checkAnswer);
  //    3. Loop through the selected answer to see if they are correct or not (Check the value of the answer to see if it is the string "true")
  checkAnswer.forEach(answer => {
    const isCorrect = answer.value === 'true'
    // console.log(isCorrect);
    // console.log(answer.value);
    const quectionItem = answer.closest('.question-item')

    //    4. For each correct answer add the class `correct` to the parent with the class `question-item` and remove the class `incorrect`.

    if (isCorrect) {
      // checkAnswer
      quectionItem.classList.add('correct')
      quectionItem.classList.remove('incorrect')


    } else {
      //    5. For each incorrect answer add the class `incorrect` to the parent with the class `question-item` and remove the class `correct`.
      quectionItem.classList.add('incorrect')
      quectionItem.classList.remove('correct')

    }
    //   7. BONUS: If all answers are correct show the element with the id `alert` and hide it after one second (look into setTimeout) (use the class active to show the alert and remove the class to hide it)
    const allTrue = checkAnswer.every(answer => answer.value === 'true');

    const allAnswer = questions.length === checkAnswer.length
  
    if (allTrue && allAnswer) {
      console.log("allTrue");

      alert.classList.add('active')

      setTimeout(()=>{
      alert.classList.remove('active')

      }, 3000);


    }

  })

})
