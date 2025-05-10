
(function () {
  const canvas = document.getElementById("matrix");
  const ctx = canvas.getContext("2d");
  const columns = Math.floor(window.innerWidth / 20);
  const drops = Array(columns).fill(1);

  function draw() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#0F0";
    ctx.font = "16px monospace";
    for (let i = 0; i < drops.length; i++) {
      const char = String.fromCharCode(33 + Math.random() * 94);
      ctx.fillText(char, i * 20, drops[i] * 20);
      if (drops[i] * 20 > canvas.height && Math.random() > 0.975) {
        drops[i] = 0;
      }
      drops[i]++;
    }
    requestAnimationFrame(draw);
  }
  draw();
})();
