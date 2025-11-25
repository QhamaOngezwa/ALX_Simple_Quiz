function checkAnswer (){
const correctAnswer = "4"
const radioButton = document.querySelector("input[name="quiz"]:checked")
const userAnswer = radioButton.value

if (userAnswer === correctAnswer){
const feedback = document.getElementById("feedback")
feedback.textContent("Correct! Well done.")
} else {
    feedback.textContent("That's incorrect. Try again!")
    
}
}
const submitAnswerButton = document.getElementById("submit-answer")
submitAnswerButton.addEventListener("click", checkAnswer)

