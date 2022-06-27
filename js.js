function computerPlay() {
    const choices = ['rock', 'paper', 'scissor']
    const randomChoice = choices[Math.floor(Math.random() * choices.length)]

    return (randomChoice)
}


function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        result = `You both played ${computerSelection} it's a draw`
    } else if ((playerSelection == 'paper' && computerSelection == 'scissor') ||
        (playerSelection == 'scissor' && computerSelection == 'paper')) {
        result = `${playerSelection} beats ${computerSelection} You win!`;
        userScore++;
    } else {
        result = `${computerSelection} beats ${playerSelection} You lose!`;
        compScore++;
    }
    return result;

}




