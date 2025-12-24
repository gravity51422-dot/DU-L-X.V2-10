function checkCommand(inputId) {
    const command = document.getElementById(inputId).value.trim();

    if (command === "Arenav?") {
        goToGame("game2.html");
    }
}

function goToGame(targetPage) {
    window.location.href = targetPage;
}
