let stage = 0;

const questionDiv = document.getElementById('question');
const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');

function updateQuestion(text) {
    questionDiv.innerHTML = `
        <h1>${text}</h1>
        <div class="buttons">
            <button id="yesBtn">Yes</button>
            <button id="noBtn">No</button>
        </div>
    `;
    bindEvents();
}

function bindEvents() {
    document.getElementById('yesBtn').addEventListener('click', handleYes);
    document.getElementById('noBtn').addEventListener('click', handleNo);
}

function handleYes() {
    if (stage === 3) {
        document.body.innerHTML = `
            <div class="love-background">
                <h1>I LOVE YOU TOO BABE🕺🏻🎀💕.. THANK YOU SO SOO SOOO MUCHHH FOR LOVING ME</h1>
            </div>
        `;
    } else {
        stage++;
        if (stage === 1) {
            updateQuestion("I love you too! Are you sure?");
        } else if (stage === 2) {
            updateQuestion("Are you 100% sure about this?");
        } else if (stage === 3) {
            updateQuestion("Final chance! Do you really love me?");
        }
    }
}

function handleNo() {
    if (stage === 3) {
        stage = 0;
        updateQuestion("Do you love me?");
    } else {
        stage++;
        if (stage === 1) {
            updateQuestion("Are you sure??");
        } else if (stage === 2) {
            updateQuestion("Are you REALLY sure?");
        } else if (stage === 3) {
            updateQuestion("Last chance! Are you sure?");
        }
    }
}

// Initialize
updateQuestion("💖 Do you love me? 💖");