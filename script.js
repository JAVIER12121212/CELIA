const messages = [
    "Ponte a estudiar.",
    "Vaya lorcitas...",
    "Soy el mejor novio de la historia.",
    "Cada momento contigo es un regalo.",
    "Diego Costa te echo de menos.",
    "Probando, Probando. 💖"
];

function generateMessage() {
    const randomIndex = Math.floor(Math.random() * messages.length);
    document.getElementById("message").innerText = messages[randomIndex];
}
