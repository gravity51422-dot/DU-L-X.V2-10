let secretBuffer = "";
const SECRET_COMMAND = "arenav?";

document.addEventListener("keydown", function (event) {
    // 특수키는 무시
    if (event.key.length !== 1) return;

    // 소문자로 통일
    secretBuffer += event.key.toLowerCase();

    // 버퍼 길이 제한 (메모리 보호)
    if (secretBuffer.length > SECRET_COMMAND.length) {
        secretBuffer = secretBuffer.slice(-SECRET_COMMAND.length);
    }

    // 명령 완성 확인
    if (secretBuffer === SECRET_COMMAND) {
        goToGame("game2.html");
    }
});

function goToGame(page) {
    window.location.href = page;
}
