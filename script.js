// DOM Manupulation
let msg = document.querySelector("#msg")
const choices = document.querySelectorAll(".choice");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

// User Score And Computer Score
let userScore =0;
let compScore = 0;

//Generating Computer Choice out of Rock Paper & Scissors
const genCompChoice = () =>{
    const options = ["rock","paper","scissors"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
}

//Making Draw Game Function

const drawGame = () => {
    msg.innerText = "Game Draw";
    msg.style.backgroundColor = "#081b31"
}

// It Will Show Winner in Msg Box either its is Computer or Player

const showWinner = (userWin,userChoice,compChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Win ! ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else{
        compScore++;
        compScorePara.innerText = compScore;
         msg.innerText = `You Lose ! ${compChoice} beats ${userChoice}`;
         msg.style.backgroundColor = "red";
    }
}

// This Function Compares B/w User choice and computer choice.

const playGame = (userChoice) => {
    // console.log("User Choice", userChoice);
    const compChoice = genCompChoice();
    if(userChoice === compChoice){
        drawGame();
    }
    else {
        let userWin = true;
        if(userChoice === "rock"){
             userWin =compChoice === "paper" ? false : true;
        }
        else if(userChoice === "paper"){
            userWin = compChoice === "scissors" ? false : true;
        }
        else{
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
} 

// Makes Rock Paper Sessiors clickable and check for Game Winner...

choices.forEach((choice)=>{
    choice.addEventListener("click",() => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});