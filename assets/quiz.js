//created a countdown timer
function startTimer() {
    timer = setInterval(function () {
        timeLeft--;
        timerCount.textContent = timeLeft;
        if (timeLeft === 0) {
            clearInterval(timer)
        }
        return timerCount;
    }, 1000);
    // Making list of questions an array of objects in hopes of having them do the slide show thingy
    var quizQuestions = [
        {
            question: "What is a boolean?",
            choices: ["Primitive", "Fruit", "Vegetable", "Kneecap"],
            answer: "Primitive"



        },
        {
            question: "Why do you console.log?",
            choices: ["For truth", "For justice", "For the American Way", "To Test your code"],
            answer: "To Test your code"
        },
    ]



