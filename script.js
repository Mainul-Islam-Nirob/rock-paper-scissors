function computerPlay() {
    const option = ['rock', 'paper', 'scissors'];
    const random = Math.floor(Math.random() * option.length)
    return option[random];
}


function playRound(ps, cs) {

    if(ps == cs){
        return ["Tie! you both are same", 'tie']

    }else if(ps == "rock" && cs == "scissors"){
        let msg = "You Win! Rock beats Scissors";
        

        return [msg, "ps"];

    }else if(ps == "scissors" && cs == "rock") {
        let msg = "You Lose! Scissors beats Paper";
        
        return [msg, "cs"];

    }else if(ps == "paper" && cs == "rock"){
        let msg = "You Win! Rock beats Scissors";
        
        return [msg, "ps"];

    } else if(ps == "rock" && cs == "paper"){
        let msg = "You Lose! Scissors beats Paper";
        
        return [msg, "cs"];

    } else if (ps == "paper" && cs == "scissors") {
        let msg = "You Lose! Scissors beats Paper";
        
        return [msg, "cs"];

    } else if (ps == "scissors" && cs == "paper"){
        let msg = "You Win! Rock beats Scissors";
        
        return [msg, "ps"];

    }
}


let buttons = document.querySelectorAll("button");
let resultContainer = document.getElementById("result");
let cScore = document.getElementById("cScore");
let pScore = document.getElementById("pScore");
let winnerContainer = document.getElementById("winner");



buttons.forEach(button => {
    
    button.addEventListener("click", (e) => {

        let playerSelection = e.target.innerText.toLowerCase();

        let result = playRound(playerSelection, computerPlay());
        
        // console.log(result);

        let paragraph = document.createElement("p").innerText = result[0];
       resultContainer.innerHTML = paragraph;


        if (result[1] == "ps") {
            let pScoreNum = ~~pScore.innerText;

            if (pScoreNum >= 4) {
               
                resultContainer.innerText = "";
                winnerContainer.innerText = "You are the winner! You: 5 & Computer: " + " " + cScore.innerText;
                pScore.innerText = 0;
                cScore.innerText = 0;
            }else{
                pScore.innerText = pScoreNum + 1 ;
                winnerContainer.innerText = ""

            } 

        }else if(result[1] == "cs"){
            let cScoreNum = ~~cScore.innerText;
            if (cScoreNum >= 4) {
            
                resultContainer.innerText = "";
                winnerContainer.innerText = "Computer is the winner! Computer: 5 & You:" + " " + pScore.innerText;

                cScore.innerText = 0;
                pScore.innerText = 0;

            } else {
                cScore.innerText = cScoreNum + 1;
                winnerContainer.innerText = ""
            } 
        }
        

    })
})
