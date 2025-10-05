// Attendre que le DOM soit complètement chargé
document.addEventListener('DOMContentLoaded', function() {
    // === MENU HAMBURGER ===
    const menuToggle = document.getElementById('menuToggle');
    const sidebar = document.getElementById('sidebar');
    const menuIcon = document.getElementById('menuIcon');
    const closeIcon = document.getElementById('closeIcon');

    // Ouvrir/Fermer le menu au clic sur le bouton
    menuToggle.addEventListener('click', () => {
        sidebar.classList.toggle('translate-x-full');
        menuIcon.classList.toggle('hidden');
        closeIcon.classList.toggle('hidden');
    });

    // Fermer le menu après clic sur un lien
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
            
            // Fermer le menu
            sidebar.classList.add('translate-x-full');
            menuIcon.classList.remove('hidden');
            closeIcon.classList.add('hidden');
        });
    });

    // Bouton "Scroll to top"
    const scrollBtn = document.getElementById("scrollToTop");
    scrollBtn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
        
        // Fermer le menu
        sidebar.classList.add('translate-x-full');
        menuIcon.classList.remove('hidden');
        closeIcon.classList.add('hidden');
    });
});