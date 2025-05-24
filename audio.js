let soundEnabled = true;

// Create audio elements dynamically
const audioElements = {
    clickAudio: new Audio('./sounds/cilck.mp3'),
    hoverAudio: new Audio('./sounds/hover.mp3'),
    completeAudio: new Audio('./sounds/complete.mp3'),
    pageTurnAudio: new Audio('./sounds/page-turn.mp3'),
};

document.addEventListener("click", playClick);

function toggleSound() {
    const soundIcon = document.getElementById('soundIcon');
    const isMuted = audioElements.clickAudio.muted;

    // Toggle mute state for all audio elements
    Object.values(audioElements).forEach(audio => {
        audio.muted = !isMuted;
    });

    // Update sound icon
    soundIcon.className = isMuted ? 'fas fa-volume-up' : 'fas fa-volume-mute';
}

function playClick() {
    audioElements.clickAudio.play();
}

function playHover() {
    audioElements.hoverAudio.play();
}

function playComplete() {
    if (soundEnabled) {
        audioElements.completeAudio.play();
    }
}

function playPage() {
    if (soundEnabled) {
        audioElements.pageTurnAudio.play();
    }
}

function startQuiz() {
    window.location.href = "quiz.html";
}