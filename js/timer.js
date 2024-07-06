let targetDate;

document.getElementById("start-button").addEventListener("click", function () {
  const inputDate = document.getElementById("target-date").value;
  if (inputDate) {
    targetDate = new Date(inputDate);
    startCountdown();
  }
});

function startCountdown() {
  if (targetDate) {
    const interval = setInterval(updateCountdown, 1000);

    function updateCountdown() {
      const currentTime = new Date();
      const difference = targetDate - currentTime;

      if (difference < 0) {
        clearInterval(interval);
        document.getElementById("timer-container").innerText = "Timer Finished.";
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      document.getElementById("days").innerText = days;
      document.getElementById("hours").innerText = hours;
      document.getElementById("minutes").innerText = minutes;
      document.getElementById("seconds").innerText = seconds;
    }
  }
}