let duration;
let timer;
let startTime;

function startTimer() {
  const minutes = parseInt(document.getElementById('minutes').value);
  const seconds = parseInt(document.getElementById('seconds').value);
  duration = (minutes * 60 + seconds) * 1000; // Convert minutes and seconds to milliseconds
  startTime = Date.now();
  updateTimerDisplay();
  timer = setInterval(updateTimerDisplay, 1000);
  document.getElementById('startBtn').setAttribute('disabled', 'true');
  document.getElementById('stopBtn').removeAttribute('disabled');
}

function stopTimer() {
  clearInterval(timer);
  document.getElementById('startBtn').removeAttribute('disabled');
  document.getElementById('stopBtn').setAttribute('disabled', 'true');
}

function updateTimerDisplay() {
  const currentTime = Date.now();
  const elapsedTime = currentTime - startTime;
  const remainingTime = Math.max(0, duration - elapsedTime);
  const minutes = Math.floor(remainingTime / (1000 * 60));
  const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);
  document.getElementById('timerDisplay').innerText = `${minutes}m ${seconds}s`;
  if (remainingTime === 0) {
    stopTimer();
    alert('Timer finished!');
  }
}