const messages = [
    "Ponte a estudiar.",
    "Vaya lorcitas...",
    "Soy el mejor novio de la historia.",
    "Cada momento contigo es un regalo.",
    "Diego Costa te echo de menos.",
    "Probando, Probando. 💖",
    "Tetitas",
    "Tu voz parece de otro tiempo,
ya no tiene aquel tono cálido
de antes, ni la complicidad
de siempre, sólo son palabras
y su afecto es ahora discreto:
en tus mensajes ya no hay mensaje.",
    
];

function generateMessage() {
    const randomIndex = Math.floor(Math.random() * messages.length);
    document.getElementById("message").innerText = messages[randomIndex];
}
