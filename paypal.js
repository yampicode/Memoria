// paypal.js - Prueba de vida (sin detección de país)
export function inicializarPayPal(onPagoExitoso) {
    const container = document.getElementById('paypal-button-container');
    if (!container) return;

    container.innerHTML = '<p style="color: #666;">Cargando PayPal (modo prueba)...</p>';

    // Esperamos a que el SDK esté listo
    const esperarPayPal = () => {
        if (typeof paypal === 'undefined') {
            setTimeout(esperarPayPal, 300);
            return;
        }

        container.innerHTML = ''; // Limpiamos el mensaje

        try {
            paypal.Buttons({
                style: { shape: 'rect', color: 'gold', layout: 'vertical', label: 'subscribe' },
                createSubscription: (data, actions) => actions.subscription.create({ plan_id: 'P-27827352NA503101GNLWUFMI' }),
                onApprove: (data) => { 
                    console.log('Pago aprobado');
                    if (onPagoExitoso) onPagoExitoso(data.subscriptionID); 
                },
                onError: (err) => {
                    console.error('Error de PayPal:', err);
                    container.innerHTML = '<p style="color: red;">Error al cargar PayPal. Intenta de nuevo.</p>';
                }
            }).render('#paypal-button-container');
        } catch (error) {
            console.error("Error al renderizar:", error);
            container.innerHTML = '<p style="color: red;">Error al dibujar el botón.</p>';
        }
    };

    esperarPayPal();
}