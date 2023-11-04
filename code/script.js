// Fichier : script.js

// Le code sera exécuté après le chargement complet de la page
document.addEventListener("DOMContentLoaded", function () {
    // Sélectionne l'élément HTML avec l'ID "message"
    const messageElement = document.getElementById("message");

    // Vérifie si l'élément existe
    if (messageElement) {
        // Affiche un message dans la console
        console.log("Le script JavaScript fonctionne !");
        console.log("Le script JavaScript fonctionne !");
        // Modifie le contenu de l'élément HTML avec un message
        messageElement.textContent = "Ce script fonctionne à merveille !";
    }
});
