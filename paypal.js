// paypal.js
import { t } from './traducciones.js';

// Variable global para saber si el script ya se está cargando
let cargandoSDK = false;
let callbacksPendientes = [];
let idiomaActual = localStorage.getItem('idioma') || 'es';

export function inicializarPayPal(onPagoExitoso) {
    const container = document.getElementById('paypal-button-container');
    if (!container) return;

    // 1. Mostrar mensaje de carga traducido
    container.innerHTML = `<p style="color: #666;">${t('cargando_paypal', idiomaActual)}</p>`;

    // 2. Esperar a que el SDK de PayPal esté listo
    const esperarPayPal = () => {
        // Si paypal no está definido, esperamos y reintentamos
        if (typeof paypal === 'undefined') {
            setTimeout(esperarPayPal, 300);
            return;
        }

        // 3. Si está listo, limpiamos el mensaje de carga
        container.innerHTML = '';

        try {
            // 4. Renderizar el botón de PayPal
            paypal.Buttons({
                style: { 
                    shape: 'rect', 
                    color: 'gold', 
                    layout: 'vertical', 
                    label: 'subscribe' 
                },
                // ID del plan de suscripción que creaste
                createSubscription: (data, actions) => actions.subscription.create({ 
                    plan_id: 'P-27827352NA503101GNLWUFMI' 
                }),
                onApprove: (data) => { 
                    console.log('Pago aprobado. Suscripción ID:', data.subscriptionID);
                    if (onPagoExitoso) onPagoExitoso(data.subscriptionID); 
                },
                onError: (err) => {
                    console.error('Error de PayPal:', err);
                    // Mensaje de error traducido
                    container.innerHTML = `<p style="color: red;">${t('error_paypal_conexion', idiomaActual)}</p>`;
                }
            }).render('#paypal-button-container');
            
        } catch (error) {
            console.error("Error al renderizar PayPal:", error);
            // Mensaje de error traducido
            container.innerHTML = `<p style="color: red;">${t('error_paypal_render', idiomaActual)}</p>`;
        }
    };

    // Iniciar la espera
    esperarPayPal();
}