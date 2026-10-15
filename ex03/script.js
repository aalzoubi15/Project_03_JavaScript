let count = 0;

const counterDisplay = document.getElementById("counter");
const incrementButton = document.getElementById("increment-button");
const decrementButton = document.getElementById("decrement-button");
const resetButton = document.getElementById("reset-button");

function updateCounter() {
    counterDisplay.textContent = count;

    counterDisplay.classList.remove("positive", "negative");

    if (count > 0) {
        counterDisplay.classList.add("positive");
    } else if (count < 0) {
        counterDisplay.classList.add("negative");
    }
}

function incrementCount() {
    count = count + 1;
    updateCounter();
}

function decrementCount() {
    count = count - 1;
    updateCounter();
}

function resetCount() {
    count = 0;
    updateCounter();
}

incrementButton.addEventListener("click", incrementCount);
decrementButton.addEventListener("click", decrementCount);
resetButton.addEventListener("click", resetCount);