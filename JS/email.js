// Attendre que le DOM soit complètement chargé
document.addEventListener('DOMContentLoaded', function() {
    // === EMAILJS CONFIGURATION ===
    (function() {
        emailjs.init("TA_CLE_PUBLIQUE_ICI"); // ⚠️ Remplace par ta vraie clé publique
    })();

    // Gérer l'envoi du formulaire
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        
        const submitBtn = document.getElementById('submit-btn');
        const formMessage = document.getElementById('form-message');
        
        // Désactiver le bouton pendant l'envoi
        submitBtn.disabled = true;
        submitBtn.textContent = 'Envoi en cours...';
        submitBtn.classList.add('opacity-50', 'cursor-not-allowed');
        
        // Envoyer l'email via EmailJS
        emailjs.sendForm('TON_SERVICE_ID', 'TON_TEMPLATE_ID', this)
            .then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
                
                // Afficher message de succès
                formMessage.textContent = '✅ Message envoyé avec succès !';
                formMessage.classList.remove('hidden', 'bg-red-500');
                formMessage.classList.add('bg-green-500', 'text-white');
                
                // Réinitialiser le formulaire
                document.getElementById('contact-form').reset();
                
                // Réactiver le bouton
                submitBtn.disabled = false;
                submitBtn.textContent = 'Envoyer';
                submitBtn.classList.remove('opacity-50', 'cursor-not-allowed');
                
                // Masquer le message après 5 secondes
                setTimeout(() => {
                    formMessage.classList.add('hidden');
                }, 5000);
                
            }, function(error) {
                console.log('FAILED...', error);
                
                // Afficher message d'erreur
                formMessage.textContent = '❌ Erreur lors de l\'envoi. Réessayez plus tard.';
                formMessage.classList.remove('hidden', 'bg-green-500');
                formMessage.classList.add('bg-red-500', 'text-white');
                
                // Réactiver le bouton
                submitBtn.disabled = false;
                submitBtn.textContent = 'Envoyer';
                submitBtn.classList.remove('opacity-50', 'cursor-not-allowed');
                
                // Masquer le message après 5 secondes
                setTimeout(() => {
                    formMessage.classList.add('hidden');
                }, 5000);
            });
    });
});