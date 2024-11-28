const messages = [
    "Te amo más de lo que las palabras pueden expresar.",
    "Cada día a tu lado es una nueva aventura.",
    "Eres mi razón para sonreír siempre.",
    "Cada momento contigo es un regalo.",
    "No importa lo que pase, siempre estaré a tu lado.",
    "Te quiero más de lo que te imaginas. 💖"
];

function generateMessage() {
    const randomIndex = Math.floor(Math.random() * messages.length);
    document.getElementById("message").innerText = messages[randomIndex];
}