// 10‑day countdown for Slide 1
const target = new Date();
target.setDate(target.getDate() + 10);

function updateCountdown() {
  const now  = new Date(),
        diff = target - now;
  if (diff <= 0) {
    clearInterval(timer);
    const el = document.getElementById('countdown');
    if (el) el.textContent = 'Expired';
    return;
  }
  const days = Math.floor(diff / 86400000),
        hrs  = Math.floor(diff / 3600000) % 24,
        mins = Math.floor(diff / 60000) % 60,
        secs = Math.floor(diff / 1000) % 60;
  const el = document.getElementById('countdown');
  if (el) {
    el.textContent =
      `${days}d ${hrs.toString().padStart(2,'0')}h ` +
      `${mins.toString().padStart(2,'0')}m ` +
      `${secs.toString().padStart(2,'0')}s`;
  }
}

const timer = setInterval(updateCountdown, 1000);
updateCountdown();
