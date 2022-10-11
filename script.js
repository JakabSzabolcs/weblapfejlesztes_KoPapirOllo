const valasztas = ['rock', 'paper', 'scissors'];

const buttons = document.querySelectorAll('.pick');
const mySc = document.getElementById('own');
const enemySc = document.getElementById('enemy')
const main = document.getElementById('main');
const selection = document.getElementById('selection');
const reset = document.getElementById('reset');
const user_select = document.getElementById('user_select');
const computer_select = document.getElementById('computer_select');
const winner = document.getElementById('winner');

let myPoint = 0;
let enemyPoint = 0;
let userChoice = undefined;

buttons.forEach(button => {
    button.addEventListener('click', () => {
        userChoice = button.getAttribute('data-choice');
        main.style.display = 'none';
        selection.style.display = 'flex'
        checkWinner();
    });
});

reset.addEventListener('click', () => {
    main.style.display = 'flex';
    selection.style.display = 'none';
})

function pickRandom() {
    return valasztas[Math.floor(Math.random() * valasztas.length)];
}



function checkWinner() {
    const computerChoice = pickRandom();
    updateSelection(user_select, userChoice);
    updateSelection(computer_select, computerChoice);

    if (userChoice === computerChoice) {
        winner.innerText = 'Döntetlen!';
    }
    else if (
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'scissors' && computerChoice === 'paper')) {
        myPoint += 1;
        mySc.innerText = myPoint;
        winner.innerText = 'Nyertél!'
    }
    else {
        enemyPoint += 1;
        enemySc.innerText = enemyPoint;
        winner.innerText = 'Vesztettél!';
    }
}

function updateScore(value) {
    score += value;

    scoreEl.innerText = score;
}

function updateSelection(selectionEl, choice) {
    selectionEl.classList.remove('btn-paper');
    selectionEl.classList.remove('btn-rock');
    selectionEl.classList.remove('btn-scissors');

    const img = selectionEl.querySelector('img');
    selectionEl.classList.add(`btn-${choice}`)
    img.src = `./icon-${choice}.png`;
    img.alt = choice;
}