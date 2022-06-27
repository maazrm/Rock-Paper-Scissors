function computerPlay() {
    const choices = ['rock', 'paper', 'scissor']
    const randomChoice = choices[Math.floor(Math.random() * choices.length)]

    return (randomChoice)
}


function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() == computerSelection) {
        result = `You both played ${computerSelection} it's a draw`
    } else if ((playerSelection.toLowerCase() == 'paper' && computerSelection == 'scissor') ||
        (playerSelection.toLowerCase() == 'scissor' && computerSelection == 'paper')) {
        result = `${playerSelection} beats ${computerSelection} You win!`;
        userScore++;
    } else {
        result = `${computerSelection} beats ${playerSelection} You lose!`;
        compScore++;
    }
    return result;

}

let userScore = parseInt(0);
let compScore = parseInt(0);


function game() {
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt('Enter your choice:');
        const computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection))
        console.log('Your score:' + userScore);
        console.log('Computer score:' + compScore);
    }
    return 'The game ends'
}


