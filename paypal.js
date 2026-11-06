// paypal.js
export async function inicializarPayPal(onPagoExitoso) {
    const container = document.getElementById('paypal-button-container');
    if (!container) return;
    
    container.innerHTML = '<p style="color: #666;">Verificando disponibilidad de pagos...</p>';
    
    let pais = 'UNKNOWN';
    try {
        // Usamos una API gratuita para saber el país
        const respuesta = await fetch('https://ipapi.co/json/');
        const datos = await respuesta.json();
        pais = datos.country_code;
        console.log("País detectado:", pais);
    } catch (error) {
        console.warn("No se pudo detectar el país.");
    }
    
    // Si es Venezuela, mostramos un mensaje amigable y terminamos
    if (pais === 'VE') {
        container.innerHTML = `
            <div style="text-align: center; padding: 15px; background: #f8f9fa; border-radius: 8px; margin-bottom: 15px;">
                <p style="color: #555; font-size: 14px; margin: 0;">
                    💳 Para suscripciones internacionales, por favor usa una conexión fuera de Venezuela.
                </p>
            </div>
        `;
        return;
    }
    
    // Si no es Venezuela (o no se pudo detectar), procedemos con PayPal
    container.innerHTML = '';
    
    if (typeof paypal === 'undefined') {
        // Si después de todo PayPal no cargó (por VPN o error de red)
        container.innerHTML = '<p style="color: #e74c3c; font-size: 12px; text-align: center;">No se pudo conectar con PayPal. Inténtalo más tarde.</p>';
        return;
    }
    
    paypal.Buttons({
        style: { shape: 'rect', color: 'gold', layout: 'vertical', label: 'subscribe' },
        createSubscription: (data, actions) => actions.subscription.create({ plan_id: 'P-27827352NA503101GNLWUFMI' }),
        onApprove: (data) => { if (onPagoExitoso) onPagoExitoso(data.subscriptionID); },
        onError: (err) => console.error('Error PayPal:', err)
    }).render('#paypal-button-container');
}