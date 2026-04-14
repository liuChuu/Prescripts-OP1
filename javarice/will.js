function handlePlayClick() {
    clickCount++;

    const picked = pickMessage();
    if (!picked) return;

    showResultButtons();

    scrambleReveal(
        picked.text,
        scrambleDuration,
        revealDuration,
        t => display.textContent = t
    );
}
startBtn.addEventListener("click", handlePlayClick);

document.addEventListener("DOMContentLoaded", () => {
    const messages = [
        "Uhm.. Hello, are you here to Play? ~ Auvelity",
        "Welcome back ~ Auvelity",
	"Mmmm... warm freshies ~ Olivia & Lily",
        "TestinGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG.... Ahh wrong prescript. ~ Olivia",
	"Feeling confident today? Then fight against this, asshole. Match my hatred. ~ List",
	"Defend? Don't need it. ~ Puregian"
    ];
    const randomIndex = Math.floor(Math.random() * messages.length);
    const randomMessage = messages[randomIndex];
    showResultTextIntro(randomMessage);
});