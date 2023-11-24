//Rock, Paper, Scissors Game

//1. Propmt with player choice (R,P,S) - input - array with r, p, s
//2. Randomize computer choice (R,P,S) - math.random - random value from a list of  r, p or s
/////everything between this is a loop
//3. Determine winner or draw - initialize wins, losses, ties variables to 0
// - If user picks rock, computer scissors = user wins
// - If user picks rock and if computer picks paper = user loses
// - If user picks scissors and if computer picksrock = user loses
// - If user picks scissors and if computer picks paper = user wins
// - If user picks paper and if computer picks rock = user wins
// - If user picks paper and if computer picks scissors = user loses
// - If user picks the same as computer, then they tie
//4. Log Score +1 for each win
// - If user wins, add +1 to user score
// - If computer wins, add + 1 to computer score
////////loop ends
//5. Prompt the user to play again

//Player 1 Scissors - Player - Player 2 Paper = Player 1 wins
//Player 1 Paper - Player 2 Rock = Player 2 wins
//Player 1 Rock - Player 2 Scissors = Player 1 wins
//Both players pick same = Draw
//add alert after win/lose



// let playerPrompt = prompt(`Type R, P or S!`);

// let playerChoice = playerPrompt.toLowerCase();
// // console.log(playerChoice);

// let computerChoice = choices[Math.floor(Math.random() * 3)];
// // console.log(computerChoice);
let choices = ["r", "p", "s"];
// let yesOrNo = confirm("Wanna play?");
let playerScore = 0;
let amountOfDraws = 0;
let computerScore = 0;


for (let i = 0; i < 10; i++) {
    // if (yesOrNo === false) { break; }
    let playerPrompt = prompt(`Type R, P or S!`);
    let computerChoice = choices[Math.floor(Math.random() * 3)]; // other options besides floor!
    let playerChoice = playerPrompt.toLowerCase(); // R=> r, S => s, P => s

    if (playerChoice === "r" && computerChoice === "s") {
        playerScore++
        alert(`You chose Rock and the computer chose Scissors. You win!`);
        alert(`The player score is ${playerScore} and the computer score is ${computerScore}`);
    } else if (playerChoice === "r" && computerChoice === "p") {
        computerScore++
        alert(`You chose Rock and the computer chose Paper. You lose!`);
        alert(`The player score is ${playerScore} and the computer score is ${computerScore}`);
    } else if (playerChoice === computerChoice) {
        amountOfDraws++
        alert(`You both chose the same thing, it's a draw!`);
        alert(`The player score is ${playerScore} and the computer score is ${computerScore}`);
    } else if (playerChoice === "p" && computerChoice === "r") {
        computerScore++
        alert(`You chose Paper and the computer chose Rock. You win!`);
        alert(`The player score is ${playerScore} and the computer score is ${computerScore}`);
    } else if (playerChoice === "p" && computerChoice === "s") {
        computerScore++
        alert(`You chose Paper and the computer chose Scissors. You lose!`);
        alert(`The player score is ${playerScore} and the computer score is ${computerScore}`);
    } else if (playerChoice === "s" && computerChoice === "p") {
        computerScore++
        alert(`You chose Scissors and the computer chose Paper. You win!`);
        alert(`The player score is ${playerScore} and the computer score is ${computerScore}`);
        confirm("Click okay to play again?");
    } else if (playerChoice === "s" && computerChoice === "r") {
        computerScore++
        alert(`You chose Scissors and the computer chose Rock. You lose!`);
        alert(`The player score is ${playerScore} and the computer score is ${computerScore}`);
    }
    let yesOrNo = confirm("Click okay to play again?");
    if (yesOrNo === false) {
        break;
    }

    if (i === 9) {
        alert(`Your total wins are ${playerScore}, your total draws are ${amountOfDraws} and your total losses are ${computerScore}`);
    }
}



// let rpsMove = ['rock', 'paper', 'scissors'];
// let random0To2 = Math.random() * 3;
// let random0To2Int = Math.floor(Math.random() * 3);

// let computerMove = rpsMove[random0To2Int];
// console.log(computerMove);

// Math.random(); //generates random number (decimal number) >= 0 and < 1, e.g. 0.01, 0.97, 0.34634
//Math.ceil( ) //rounded up, e.g. Match.ceil(1.7) => 2, Match ceil(1.1) => 2
//Math.floor() // rounded down, e.g. Math.floor(4.1) => 4, Math.floor(9.9)=> 9
//Math.round() // <.5 rounded down, >= .5 rounded up, e.g. Math.round(3.499) => 3, Math.round(6.51) => 7