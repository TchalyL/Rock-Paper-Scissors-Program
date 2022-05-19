//--------------------JAVASCRIPT TUTORIAL--------------------

//------- ROCK PAPER SCISSORS -------
const plyText = document.querySelector("#playerText")
const compText = document.querySelector("#computerText")
const resText = document.querySelector("#resultText")
const choiceBtns = document.querySelectorAll(".choiceBtn")

let player, computer, result

// Iterate over our choice buttons
choiceBtns.forEach(button =>{
    // Add event listener for each button in choiceBtns
    button.addEventListener("click", ()=>{
        player = button.textContent
        computerTurn()
        plyText.textContent = `Player: ${player}`
        compText.textContent = `Computer: ${computer}`
        resText.textContent = `Result: ${checkWinner()}`
    })
})


function computerTurn() {
    const randNum = Math.floor(Math.random() * 3) + 1
    switch (randNum) {
        case 1:
            computer = "ROCK"
            break;
        case 2:
            computer = "PAPER"
            break;
        case 3:
            computer = "SCISSORS"
            break;
    }
}

function checkWinner() {
    if (player == computer){
        return "DRAW"
    } else if(computer == "ROCK"){
        return  (player == "PAPER") ? "YOU WIN!" : "YOU LOSE"
    } else if(computer == "PAPER"){
        return  (player == "SCISSORS") ? "YOU WIN!" : "YOU LOSE"
    } else if(computer == "SCISSORS"){
        return  (player == "ROCK") ? "YOU WIN!" : "YOU LOSE"
    }
}





