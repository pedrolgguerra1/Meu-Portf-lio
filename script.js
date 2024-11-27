
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    document.getElementById("formMessage").textContent = "Mensagem enviada com sucesso!";
});
