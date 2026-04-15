function updateCounters() {
    achievedSpan.textContent = `PASS: ${achieved}`;
    failedSpan.textContent = `FAILED: ${failed}`;
    totalSpan.textContent = `PRESCRIPTS: ${total}`;
}

function showPlayButton() {
    buttonContainer.innerHTML = `<button id="startBtn">Next</button>`;
    document.getElementById("startBtn").addEventListener("click", handlePlayClick);
}

function showResultText(text) {
    canResolve = false;
    scrambleReveal(text, 0.3, 0.8, t => display.textContent = t, showPlayButton);
}

function showResultTextIntro(text) {
    scrambleReveal(text, 0.3, 0.8,t => display.textContent = t,);
}

function showResultButtons() {
    canResolve = false;

    buttonContainer.innerHTML = `
        <button id="achievedBtn" disabled>Pass</button>
        <button id="failedBtn" disabled>Failed</button>
    `;

    document.getElementById("achievedBtn").onclick = () => {
        if (!canResolve) return;
        achieved++; total++;
        updateCounters();
        saveStats();
        showResultText("CleAr");
    };

    document.getElementById("failedBtn").onclick = () => {
        if (!canResolve) return;
        failed++; total++;
        updateCounters();
        saveStats();
        showResultText("FaIL");
    };
}
function redirect(url, newTab = true) {
    if (newTab) {
        window.open(url, "_blank", "noopener,noreferrer");
    } else {
        window.location.href = url;
    }
}

document.getElementById("auvelityBtn").addEventListener("click", () => {
          showResultText("Hii... you.. likey me..? ~ Auvelity");
});

document.getElementById("lisitBtn").addEventListener("click", () => {
    redirect("https://youtube.com/@l1sitsyn?si=Fk8gJIAkTl__7Yte");
});

document.getElementById("claireBtn").addEventListener("click", () => {
          showResultText("Win a game without using anything other than your primary weapon ~ Claire");
});




