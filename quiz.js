function checkAnswer (){
    const correctAnswer = "4"
const radioButton = document.querySelector("quiz")
const userAnswer = radioButton.value
if (userAnswer === correctAnswer){
    let feedback = document.getElementById("feedback")
feedback.textContent("Correct! Well done.")
} else {
    feedback.textContent("That's incorrect. Try again!")
    
}
}
let submitAnswerButton = document.getElementById("submit-answer")
submitAnswerButton.addEventsListener("click", checkAnswer)

