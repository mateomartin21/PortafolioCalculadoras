// 
// script_global.js
// Script global para funcionalidades generales en todo el portafolio (si son necesarias).
//

/**
 * Muestra un mensaje de feedback personalizado en la esquina superior derecha.
 * Utilizado para reemplazar alert() y confirm() en el entorno del Canvas.
 * @param {string} message El mensaje a mostrar.
 * @param {'success'|'error'|'warning'|'info'} type El tipo de mensaje.
 */
function showFeedback(message, type = 'info') {
    let feedbackElement = document.getElementById('feedback-message');
    if (!feedbackElement) {
        feedbackElement = document.createElement('div');
        feedbackElement.id = 'feedback-message';
        document.body.appendChild(feedbackElement);
    }
    
    const colors = {
        'success': '#10b981', // Verde
        'error': '#ef4444',   // Rojo
        'warning': '#f59e0b', // Amarillo
        'info': '#3b82f6'     // Azul
    };
    
    feedbackElement.style.backgroundColor = colors[type] || colors['info'];
    feedbackElement.textContent = message;
    feedbackElement.style.opacity = '1';
    
    // Ocultar después de 3 segundos
    setTimeout(() => {
        feedbackElement.style.opacity = '0';
    }, 3000);
}

document.addEventListener('DOMContentLoaded', () => {
    console.log("Portafolio de Evidencias cargado y listo.");
});git 