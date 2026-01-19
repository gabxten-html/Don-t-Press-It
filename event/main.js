const button = document.getElementById("button");
const message = document.getElementById("message");

let clicks = 0;

const effects = [
  () => {
    button.style.transform = "scale(0.7)";
    message.textContent = "Pourquoi ?";
  },
  () => {
    button.style.left = Math.random() * 80 + "%";
    button.style.top = Math.random() * 80 + "%";
    message.textContent = "Il fuit.";
  },
  () => {
    message.textContent = "Je suis déçu.";
  },
  () => {
    document.body.style.background = "#300";
    message.textContent = "Regarde ce que tu as fait.";
  }
];

button.addEventListener("click", () => {
  clicks++;
  const effect = effects[Math.floor(Math.random() * effects.length)];
  effect();
});
