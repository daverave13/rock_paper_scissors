const compChoice = Math.ceil(Math.random()*3);
const choices = {
    1: "Rock",
    2: "Paper",
    3: "Scizzors"
}

console.log(choices[compChoice]);

let checkWinner = (humanChoice) => {
    if (humanChoice===compChoice) {
        alert(`You both picked ${choices[compChoice]}, it's a tie!`);
    } else if ((humanChoice+2 === compChoice) || (humanChoice-1 === compChoice)) {       
        alert(`${choices[humanChoice]} beats ${choices[compChoice]}. You won!`);
    } else {
        alert(`${choices[compChoice]} beats ${choices[humanChoice]}. You lost.`);
    }
    // Refresh page after game is over
    location.reload();
}
