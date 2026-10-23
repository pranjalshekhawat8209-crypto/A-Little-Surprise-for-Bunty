const surpriseBtn = document.getElementById("surpriseBtn");
const againBtn = document.getElementById("againBtn");
const message = document.getElementById("message");
const balloonLayer = document.getElementById("balloonLayer");

const balloonColors = [
  ["#ff86ae", "#ff86ae"],
  ["#b6a0ff", "#b6a0ff"],
  ["#ffd36e", "#ffd36e"],
  ["#8ed9e9", "#8ed9e9"],
  ["#ffad91", "#ffad91"],
  ["#a9dfb1", "#a9dfb1"]
];

function releaseBalloons(amount = 22) {
  for (let i = 0; i < amount; i++) {
    const balloon = document.createElement("span");
    const color = balloonColors[Math.floor(Math.random() * balloonColors.length)];
    balloon.className = "flying-balloon";
    balloon.style.left = `${Math.random() * 100}%`;
    balloon.style.background = color[0];
    balloon.style.color = color[1];
    balloon.style.setProperty("--duration", `${4.5 + Math.random() * 3.5}s`);
    balloon.style.animationDelay = `${Math.random() * 1.4}s`;
    balloon.style.transform = `scale(${0.7 + Math.random() * 0.8})`;
    balloonLayer.appendChild(balloon);
    balloon.addEventListener("animationend", () => balloon.remove());
  }
}

surpriseBtn.addEventListener("click", () => {
  message.classList.remove("hidden");
  surpriseBtn.textContent = "Surprise opened 💖";
  surpriseBtn.disabled = true;
  surpriseBtn.style.opacity = "0.75";
  releaseBalloons(30);
  message.scrollIntoView({ behavior: "smooth", block: "nearest" });
});

againBtn.addEventListener("click", () => releaseBalloons(35));
