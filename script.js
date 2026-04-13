// Botao menu
document.addEventListener("DOMContentLoaded", () => {
    console.log("JavaScript do VNEW carregado!");

    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-link");

    const observerOptions = {
        root: null,
        threshold: 0.1 // ativa o botao na tela
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute("id");
                
                navLinks.forEach((link) => {
                    // Esconde o link que aponta para a seção atual
                    if (link.getAttribute("href") === `#${id}`) {
                        link.style.display = "none";
                    } else {
                        link.style.display = "block";
                    }
                });
            }
        });
    }, observerOptions);

    sections.forEach((section) => observer.observe(section));
});
// setinha imagens
function scrollCanvas(id, distance) {
    const carousel = document.getElementById(`carousel-${id}`);
    carousel.scrollBy({
        left: distance,
        behavior: 'smooth'
    });
}
function toggleVinil(elemento) {
    // Adiciona ou remove a classe 'ativo' ao clicar
    elemento.classList.toggle('ativo');
}