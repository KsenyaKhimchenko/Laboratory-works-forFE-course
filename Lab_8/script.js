
let totalSeconds = 150 * 24 * 60 * 60 +
                   23 * 60 * 60 +
                   47 * 60 + 59;

function updateTimer() {
    const days = Math.floor(totalSeconds / 86400);
    const hours = Math.floor((totalSeconds % 86400) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;

    if (totalSeconds > 0) {
        totalSeconds--;
    }
}

updateTimer();
setInterval(updateTimer, 1000);

document.getElementById("registerForm")
    .addEventListener("submit", function(event) {
        event.preventDefault();

        document.getElementById("formMessage")
            .textContent = "Дані форми перевірено!";
    });
