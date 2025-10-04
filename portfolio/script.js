// Smooth scrolling for navigation links
const links = document.querySelectorAll('nav a');

for (const link of links) {
    link.addEventListener('click', smoothScroll);
}

function smoothScroll(e) {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute("href").slice(1);
    const targetSection = document.getElementById(targetId);
    window.scrollTo({
        top: targetSection.offsetTop - 60,
        behavior: "smooth"
    });
}
