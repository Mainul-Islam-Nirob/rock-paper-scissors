function userPlay() {
    let userInput = prompt("Rock, Paper or Scissors?");
    let lowerCaseInput = userInput.toLowerCase();

    if (lowerCaseInput == "rock" || lowerCaseInput == "paper" || lowerCaseInput == "scissors") {
        return lowerCaseInput;
    }else{
        return false;
    }

}

function computerPlay() {
    const option = ['rock', 'paper', 'scissors'];
    const random = Math.floor(Math.random() * option.length)
    return option[random];
}

function playRound(ps, cs) {
    
    if(ps == cs){
        return "Tie"
    }else if(ps == "rock" && cs == "scissors"){
        return "You Win! Rock beats Scissors";
    }else if(ps == "scissors" && cs == "rock") {
        return "You Lose! Rock beats Scissors";

    }else if(ps == "paper" && cs == "rock"){
        return "You Win! Paper beats Rock";

    } else if(ps == "rock" && cs == "paper"){
        return "You Lose! Paper beats Rock";

    } else if (ps == "paper" && cs == "scissors") {
        return "You Lose! Scissors beats Paper";

    } else if (ps == "scissors" && cs == "paper"){
        return "You Win! Scissors beats Paper";

    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        const playerSelection = userPlay();
        const computerSelection = computerPlay();

        if (playerSelection) {
            console.log(playRound(playerSelection, computerSelection));
        } else {
            console.log("Your input should be either 'rock', 'paper' or 'scissors'");
        }

    }
}


game()