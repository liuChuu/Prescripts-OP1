function saveStats() {
    const stats = { achieved, failed, total };
    localStorage.setItem('gameStats', JSON.stringify(stats));
}

function loadStats() {
    const savedData = localStorage.getItem('gameStats');
    if (savedData) {
        const stats = JSON.parse(savedData);
        achieved = stats.achieved;
        failed = stats.failed;
        total = stats.total;
    }
}

function displayStats() {
    // Retrieve and parse the saved string
    const savedData = localStorage.getItem('gameStats');
    
    if (savedData) {
        const stats = JSON.parse(savedData);
        
        // Push the values into your HTML spans
        document.getElementById('achieved-display').innerText = stats.achieved;
        document.getElementById('failed-display').innerText = stats.failed;
        document.getElementById('total-display').innerText = stats.total;
        
        // Also update your 'let' variables so the game starts with the correct count
        achieved = stats.achieved;
        failed = stats.failed;
        total = stats.total;
    }
}
window.onload = displayStats;

const display = document.getElementById("scrambleText");
const buttonContainer = document.getElementById("buttonContainer");
const startBtn = document.getElementById("startBtn");
const scrambleAudio = document.getElementById("scrambleAudio");

const achievedSpan = document.getElementById("achievedCount");
const failedSpan = document.getElementById("failedCount");
const totalSpan = document.getElementById("totalCount");

const scrambleSpeed = 50;
const scrambleDuration = 0.5;
const revealDuration = 1.5;
const chars = "ABCDEF@HIJ_LM%OPQR^WX#YZa#b+cdefgh*iqrxyz0123456789";
const chars2 = "ABCDEF@HIJ_LM%OP";
const chars3 = "ABCDEFdefgh*iqrxyz0123456789";
const charS4 = "ABCDEF@HIJLM%defgh*iqrxyz0123456789";

//A bunch of random variables to track state,
//Don't be cheating now
const savedData = JSON.parse(localStorage.getItem('gameStats'));

let achieved = savedData ? savedData.achieved : 0;
let failed = savedData ? savedData.failed : 0;
let total = savedData ? savedData.total : 0;
let canResolve = false;
let clickCount = 0;
let activeScrambleId = 0;
let lastMessage = null;
