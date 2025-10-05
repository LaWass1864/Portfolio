// Attendre que le DOM soit complètement chargé
document.addEventListener('DOMContentLoaded', function() {
    // === CAROUSEL ===
    const projects = document.querySelectorAll(".project");
    const nextBtn = document.getElementById("next");
    const prevBtn = document.getElementById("prev");

    let current = 0;

    function updateCarousel() {
        // Calculer le décalage responsive
        const screenWidth = window.innerWidth;
        let offset;
        
        if (screenWidth < 640) {
            offset = 0; // Mobile : cacher complètement les autres
        } else if (screenWidth < 768) {
            offset = 100; // Tablette
        } else if (screenWidth < 1024) {
            offset = 140; // Moyen écran
        } else {
            offset = 180; // Desktop
        }
        
        projects.forEach((proj, i) => {
            proj.style.zIndex = "10";
            
            if (i === current) {
                // Carte active
                proj.style.transform = "translateX(0) scale(1)";
                proj.style.opacity = "1";
                proj.style.zIndex = "30";
            } else if (screenWidth >= 640) {
                // Sur tablette/desktop : montrer les cartes adjacentes
                if (i === (current - 1 + projects.length) % projects.length) {
                    proj.style.transform = `translateX(-${offset}px) scale(0.85)`;
                    proj.style.opacity = "0.5";
                    proj.style.zIndex = "20";
                } else if (i === (current + 1) % projects.length) {
                    proj.style.transform = `translateX(${offset}px) scale(0.85)`;
                    proj.style.opacity = "0.5";
                    proj.style.zIndex = "20";
                } else {
                    proj.style.transform = "translateX(0) scale(0.7)";
                    proj.style.opacity = "0";
                }
            } else {
                // Sur mobile : cacher complètement
                proj.style.transform = "translateX(0) scale(0.7)";
                proj.style.opacity = "0";
            }
        });
    }

    nextBtn.addEventListener("click", () => {
        current = (current + 1) % projects.length;
        updateCarousel();
    });

    prevBtn.addEventListener("click", () => {
        current = (current - 1 + projects.length) % projects.length;
        updateCarousel();
    });

    updateCarousel();

    // Recalculer lors du redimensionnement
    window.addEventListener('resize', updateCarousel);
});