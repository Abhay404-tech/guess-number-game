let max = 100;
let chances = 15;
let random = Math.floor(Math.random() * max) + 1;
document.getElementById('max-num').textContent = max;
document.getElementById('chances').textContent = chances;

const message = document.getElementById('message');
const input = document.getElementById('user-input');
const checkBtn = document.getElementById('check-btn');
const quitBtn = document.getElementById('quit-btn');

// Set focus on the input at start
input.focus();

checkBtn.addEventListener('click', function() {
    if (chances <= 0) return;

    let guess = Number(input.value);
    if (!guess) {
        message.textContent = "Please enter a valid number.";
        message.className = 'error';
        return;
    }

    chances--;
    document.getElementById('chances').textContent = chances;

    if (guess === random) {
        message.textContent = "You are right! Congrats!!";
        message.className = 'success';
        checkBtn.disabled = true;
        quitBtn.disabled = true;
    } else if (guess < random) {
        message.textContent = "HINT: Your guess was too small. Try again.";
        message.className = 'guess';
    } else if (guess > random) {
        message.textContent = "HINT: Your guess was too large. Try again.";
        message.className = 'guess';
    }

    if (chances === 0 && guess !== random) {
        message.textContent = `No chances left. The number was ${random}.`;
        message.className = 'error';
        checkBtn.disabled = true;
        quitBtn.disabled = true;
    }

    input.value = "";
    input.focus();
});

quitBtn.addEventListener('click', function() {
    message.textContent = "User Quit";
    message.className = 'error';
    checkBtn.disabled = true;
    quitBtn.disabled = true;
});

    
