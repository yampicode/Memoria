import { inicializarPayPal } from './paypal.js';
import { categoriasFiguras } from './categorias.js';
import { t } from './traducciones.js';
import { abrirModalLogin, cerrarModalLogin, actualizarUILogin, getUsuarioActual } from './auth.js';
import { guardarStatsEnDB, cargarStatsDesdeDB, obtenerTopRanking, obtenerMiPosicion } from './db.js';
import { supabase } from './supabase-client.js';

// ==========================================
// SISTEMA DE INTERNACIONALIZACIÓN (i18n)
// ==========================================
let idiomaActual = localStorage.getItem('idioma') || 'es';

function actualizarTextosEstaticos() {
    document.querySelectorAll('[data-i18n]').forEach(elemento => {
        const clave = elemento.getAttribute('data-i18n');
        if (clave) {
            elemento.textContent = t(clave, idiomaActual);
        }
    });

    document.querySelectorAll('[data-i18n-title]').forEach(elemento => {
        const clave = elemento.getAttribute('data-i18n-title');
        if (clave) {
            elemento.title = t(clave, idiomaActual);
        }
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(elemento => {
        const clave = elemento.getAttribute('data-i18n-placeholder');
        if (clave) {
            elemento.placeholder = t(clave, idiomaActual);
        }
    });
}

function actualizarBotonesJuego() {
    if (!btnIniciar) return;

    if (vidas <= 0 && juegoIniciado) {
        btnIniciar.textContent = t('game_over', idiomaActual);
    } else if (!juegoIniciado) {
        btnIniciar.textContent = t('iniciar_juego', idiomaActual);
    } else if (bloqueado) {
        btnIniciar.textContent = t('reanudar', idiomaActual);
    } else {
        btnIniciar.textContent = t('pausar', idiomaActual);
    }
}

function cambiarIdioma(nuevoIdioma) {
    idiomaActual = nuevoIdioma;
    localStorage.setItem('idioma', idiomaActual);
    actualizarTextosEstaticos();
    if (pantallaJuego.style.display !== 'none') {
        actualizarPanelEstadisticas();
        actualizarBotonesJuego();
    }
    actualizarBotonSonidoVisual();
    actualizarBotonAnimacionesVisual();
    actualizarModoDarkVisual();
}

// ==========================================
// CONFIGURACIÓN DE SONIDO
// ==========================================
let sonidoActivado = localStorage.getItem('sonidoActivado') !== 'false';
const btnToggleSonido = document.getElementById('btn-toggle-sonido');

function actualizarBotonSonidoVisual() {
    if (!btnToggleSonido) return;
    if (sonidoActivado) {
        btnToggleSonido.innerHTML = `<i class="icofont-volume-up"></i> ${t('activado', idiomaActual)}`;
        btnToggleSonido.classList.add('activo');
        btnToggleSonido.classList.remove('inactivo');
    } else {
        btnToggleSonido.innerHTML = `<i class="icofont-volume-mute"></i> ${t('silenciado', idiomaActual)}`;
        btnToggleSonido.classList.add('inactivo');
        btnToggleSonido.classList.remove('activo');
    }
}

actualizarBotonSonidoVisual();

if (btnToggleSonido) {
    btnToggleSonido.addEventListener('click', () => {
        sonidoActivado = !sonidoActivado;
        localStorage.setItem('sonidoActivado', sonidoActivado);
        actualizarBotonSonidoVisual();
    });
}

function reproducirEfectoSonido(tipo) {
    if (!sonidoActivado) return;
    let rutaAudio = '';
    if (tipo === 'clic') rutaAudio = 'clic.ogg';
    if (tipo === 'acierto') rutaAudio = 'acierto.ogg';
    if (tipo === 'error') rutaAudio = 'error.ogg';
    if (tipo === 'voltear') rutaAudio = 'voltear.ogg';
    if (tipo === 'derrota') rutaAudio = 'derrota.ogg';
    if (tipo === 'victoria') rutaAudio = 'victoria.ogg';
    if (rutaAudio) {
        const sonido = new Audio(rutaAudio);
        sonido.play().catch(error => {
            console.log("El navegador bloqueó el audio o no se encontró el archivo", error);
        });
    }
}

// --- MANEJO DE PANTALLAS ---
const btnJugar = document.getElementById('btn-jugar');
const menuPrincipal = document.getElementById('menu-principal');
const pantallaJuego = document.getElementById('pantalla-juego');
const btnVolverMenu = document.getElementById('btn-volver-menu');
const img = document.getElementById('img');
const topBarUser = document.getElementById('top-bar-user');
const footer = document.getElementById("footer");

btnJugar.addEventListener('click', () => {
    reproducirEfectoSonido('clic');
    menuPrincipal.style.display = 'none';
    footer.style.display = 'none';
    img.style.display = 'none';
    if (topBarUser) topBarUser.style.display = 'none';
    pantallaJuego.style.display = 'block';
    actualizarPanelEstadisticas();
    actualizarBotonesJuego();
});

btnVolverMenu.addEventListener('click', () => {
    reproducirEfectoSonido('clic');
    pantallaJuego.style.display = 'none';
    footer.style.display = 'block';
    img.style.display = 'block';
    if (topBarUser) topBarUser.style.display = 'flex';
    menuPrincipal.style.display = 'flex';
});

const btnApoyo = document.getElementById('btn-apoyo');
if (btnApoyo) {
    btnApoyo.addEventListener('click', () => {
        reproducirEfectoSonido('clic');
    });
}

// ==========================================
// CONFIGURACIÓN DE ANIMACIONES
// ==========================================
let animacionesActivadas = localStorage.getItem('animacionesActivadas') !== 'false';
const btnToggleAnimaciones = document.getElementById('btn-toggle-animaciones');

function actualizarBotonAnimacionesVisual() {
    if (!btnToggleAnimaciones) return;
    if (animacionesActivadas) {
        btnToggleAnimaciones.innerHTML = t('animaciones_activadas', idiomaActual);
        btnToggleAnimaciones.classList.add('activo');
        btnToggleAnimaciones.classList.remove('inactivo');
        document.body.classList.remove('sin-animaciones');
    } else {
        btnToggleAnimaciones.innerHTML = t('animaciones_desactivadas', idiomaActual);
        btnToggleAnimaciones.classList.add('inactivo');
        btnToggleAnimaciones.classList.remove('activo');
        document.body.classList.add('sin-animaciones');
    }
}

actualizarBotonAnimacionesVisual();

if (btnToggleAnimaciones) {
    btnToggleAnimaciones.addEventListener('click', () => {
        animacionesActivadas = !animacionesActivadas;
        localStorage.setItem('animacionesActivadas', animacionesActivadas);
        actualizarBotonAnimacionesVisual();
        if (typeof reproducirEfectoSonido === 'function') {
            reproducirEfectoSonido('clic');
        }
    });
}

// --- MANEJO DE MODALES (ESTÁTICOS) ---
function abrirModal(idModal) {
    reproducirEfectoSonido('clic');
    const modal = document.getElementById(idModal);
    if (modal) {
        modal.classList.add('activo');
        document.body.classList.add('modal-abierto');
    }
}

function ocultarModal() {
    modalOverlay.classList.remove('activo');
    document.body.classList.remove('modal-abierto');
}

const btnComoJugar = document.getElementById('btn-como-jugar');
const btnAjustes = document.getElementById('btn-ajustes');
const btnDesarrolladores = document.getElementById('btn-desarrolladores');

if (btnComoJugar) btnComoJugar.addEventListener('click', () => abrirModal('modal-como-jugar'));
if (btnAjustes) btnAjustes.addEventListener('click', () => abrirModal('modal-ajustes'));
if (btnDesarrolladores) btnDesarrolladores.addEventListener('click', () => abrirModal('modal-desarrolladores'));

const botonesCerrar = document.querySelectorAll('.btn-cerrar-modal');
botonesCerrar.forEach(boton => {
    boton.addEventListener('click', (e) => {
        reproducirEfectoSonido('clic');
        const modalOverlay = e.target.closest('.modal-overlay');
        if (modalOverlay) {
            modalOverlay.classList.remove('activo');
            document.body.classList.remove('modal-abierto');
        }
    });
});

// --- Lógica del Sistema de Modales Dinámicos ---
const modalOverlay = document.getElementById('modal-sistema');
const modalTitulo = document.getElementById('modal-titulo');
const modalMensaje = document.getElementById('modal-mensaje');
const modalBotonPrincipal = document.getElementById('modal-boton-principal');
const modalBotonSecundario = document.getElementById('modal-boton-secundario');

function mostrarModal(titulo, mensaje, opciones = {}) {
    modalTitulo.textContent = titulo;
    modalMensaje.innerHTML = mensaje;
    modalBotonPrincipal.textContent = opciones.textoBotonPrincipal || t('cerrar', idiomaActual);
    modalBotonPrincipal.onclick = null;
    modalBotonPrincipal.onclick = () => {
        ocultarModal();
        if (opciones.callbackPrincipal) opciones.callbackPrincipal();
    };
    if (opciones.textoBotonSecundario) {
        modalBotonSecundario.style.display = 'inline-block';
        modalBotonSecundario.textContent = opciones.textoBotonSecundario;
        modalBotonSecundario.onclick = null;
        modalBotonSecundario.onclick = () => {
            ocultarModal();
            if (opciones.callbackSecundario) opciones.callbackSecundario();
        };
    } else {
        modalBotonSecundario.style.display = 'none';
    }
    modalOverlay.classList.add('activo');
    document.body.classList.add('modal-abierto');
}

// ==========================================
// CONFIGURACIÓN DE MODO DARK
// ==========================================
let modoDarkActivado = localStorage.getItem('modoDark') === 'true';
const btnToggleDark = document.getElementById('btn-toggle-dark');

function actualizarModoDarkVisual() {
    if (modoDarkActivado) {
        document.body.classList.add('dark-mode');
        if (btnToggleDark) {
            btnToggleDark.innerHTML = `<i class="icofont icofont-sun"></i> ${t('light', idiomaActual)}`;
        }
    } else {
        document.body.classList.remove('dark-mode');
        if (btnToggleDark) {
            btnToggleDark.innerHTML = `<i class="icofont icofont-moon"></i> ${t('dark', idiomaActual)}`;
        }
    }
}

actualizarModoDarkVisual();

if (btnToggleDark) {
    btnToggleDark.addEventListener('click', () => {
        modoDarkActivado = !modoDarkActivado;
        localStorage.setItem('modoDark', modoDarkActivado);
        actualizarModoDarkVisual();
        if (typeof reproducirEfectoSonido === 'function') {
            reproducirEfectoSonido('clic');
        }
    });
}

// ==========================================
// INICIALIZACIÓN DEL SISTEMA DE IDIOMAS
// ==========================================
const selectIdioma = document.getElementById('btn-toggle-idioma');

if (selectIdioma) {
    selectIdioma.addEventListener('click', () => {
        reproducirEfectoSonido('clic');
    });
    selectIdioma.value = idiomaActual;
    selectIdioma.addEventListener('change', (e) => {
        reproducirEfectoSonido('clic');
        cambiarIdioma(e.target.value);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    cambiarIdioma(idiomaActual);
});

// ==========================================
// LÓGICA DEL JUEGO
// ==========================================
const tablero = document.getElementById("tablero-juego");
const btnReiniciar = document.getElementById("btn-reiniciar");
const btnBorrar = document.getElementById("btn-borrar-historial");
const btnIniciar = document.getElementById("btn-iniciar");

let scoreTotal = parseInt(localStorage.getItem('scoreTotal')) || 0;
let vidas = parseInt(localStorage.getItem('vidas')) || 7;
let victorias = parseInt(localStorage.getItem('victorias')) || 0;
let derrotas = parseInt(localStorage.getItem('derrotas')) || 0;
let mejorTiempo = parseInt(localStorage.getItem('mejorTiempo')) || null;
let indiceCategoriaActual = parseInt(localStorage.getItem('indiceCategoriaActual')) || 0;

// --- VARIABLES PARA LOS NIVELES Y PAÍS ---
let nivelActual = parseInt(localStorage.getItem('nivelActual')) || 1;
let paisUsuario = localStorage.getItem('paisUsuario') || ''; // <-- Vacío por defecto
let tiempoMaximo = 60; 

let cartasVolteadas = [];
let bloqueado = false;
let juegoIniciado = false;
let puntuacionPartida = 0;
let tiempo = 0;
let cronometroInterval = null;
let tiempoInicioCategoria = 0;

async function guardarDatos() {
    const usuario = getUsuarioActual();

    if (usuario) {
        // 🔥 SIEMPRE leer el país del user_metadata de la sesión actual
        const { data: { session } } = await supabase.auth.getSession();
        const paisDelMetadata = session?.user?.user_metadata?.pais || '';
        
        // Usar el del metadata si existe, si no, el local (puede ser vacío)
        const paisFinal = paisDelMetadata || paisUsuario || '';
        paisUsuario = paisFinal;

        await guardarStatsEnDB(usuario.id, {
            scoreTotal, vidas, victorias, derrotas, mejorTiempo, indiceCategoriaActual,
            nivelActual,
            pais: paisFinal
        });
    } else {
        localStorage.setItem('scoreTotal', scoreTotal);
        localStorage.setItem('vidas', vidas);
        localStorage.setItem('victorias', victorias);
        localStorage.setItem('derrotas', derrotas);
        localStorage.setItem('indiceCategoriaActual', indiceCategoriaActual);
        localStorage.setItem('nivelActual', nivelActual);
        localStorage.setItem('paisUsuario', paisUsuario);
        if (mejorTiempo) localStorage.setItem('mejorTiempo', mejorTiempo);
    }
}

const displayInfo = document.createElement('div');
displayInfo.id = 'panel-estadisticas';
displayInfo.style.cssText = `
    width: 100%; max-width: 600px; margin-bottom: 20px; 
    background-color: #fff; padding: 10px; border-radius: 8px; 
    box-shadow: 0 2px 4px rgba(0,0,0,0.1); color: #333;
`;
tablero.parentNode.insertBefore(displayInfo, tablero);

function actualizarPanelEstadisticas() {
    const panelStats = document.getElementById('panel-estadisticas');
    if (!panelStats) return;
    const mostrarReloj = (nivelActual >= 2);
    panelStats.innerHTML = `
        <div class="grid-stats" style="display: grid; grid-template-columns: repeat(4, 1fr); text-align: center; gap: 10px; font-size: 14px;">
            <div><div>${t('nivel_label', idiomaActual)}</div><strong id="nivel-display" style="color: #8e44ad;">${nivelActual}</strong></div>
            <div><div>${t('puntos', idiomaActual)}</div><strong id="puntos-partida">${puntuacionPartida}</strong></div>
            <div><div>${mostrarReloj ? t('tiempo_restante', idiomaActual) : t('tiempo', idiomaActual)}</div><strong id="cronometro" style="color: ${mostrarReloj ? '#e74c3c' : '#333'};">${tiempo}s</strong></div>
            <div><div>${t('victorias_label', idiomaActual)}</div><strong id="victorias" style="color: #28a745;">${victorias}</strong></div>
            <div><div>${t('vidas_label', idiomaActual)}</div><strong id="vidas-panel" style="color: #e74c3c;"><i class="icofont-heart"></i> ${Math.max(0, vidas)}</strong></div>
            <div><div>${t('score', idiomaActual)}</div><strong id="score-total" style="color: #0056b3;">${scoreTotal}</strong></div>
            <div><div>${t('record', idiomaActual)}</div><strong id="mejor-tiempo" style="color: #d9534f;">${mejorTiempo ? mejorTiempo + 's' : '--'}</strong></div>
            <div><div>${t('derrotas', idiomaActual)}</div><strong id="derrotas" style="color: #e74c3c;">${derrotas}</strong></div>
        </div>
    `;
}

function actualizarUI() {
    const elNivel = document.getElementById('nivel-display');
    const elPuntos = document.getElementById('puntos-partida');
    const elVictorias = document.getElementById('victorias');
    const elCronometro = document.getElementById('cronometro');
    const elVidasPanel = document.getElementById('vidas-panel');
    const elScore = document.getElementById('score-total');
    const elDerrotas = document.getElementById('derrotas');
    const elMejorTiempo = document.getElementById('mejor-tiempo');
    if (elNivel) elNivel.innerText = nivelActual;
    if (elPuntos) elPuntos.innerText = puntuacionPartida;
    if (elVictorias) elVictorias.innerText = victorias;
    if (elCronometro) elCronometro.innerText = `${tiempo}s`;
    if (elVidasPanel) elVidasPanel.innerHTML = `<i class="icofont-heart"></i> ${Math.max(0, vidas)}`;
    if (elScore) elScore.innerText = scoreTotal;
    if (elDerrotas) elDerrotas.innerText = derrotas;
    if (elMejorTiempo) elMejorTiempo.innerText = mejorTiempo ? `${mejorTiempo}s` : '--';
    actualizarBotonesJuego();
}

btnIniciar.onclick = () => {
    reproducirEfectoSonido('clic');
    if (vidas <= 0) return;
    if (!juegoIniciado) {
        juegoIniciado = true;
        bloqueado = false;
        actualizarBotonesJuego();
        if (cronometroInterval) clearInterval(cronometroInterval);
        if (nivelActual >= 2 && tiempo === 0) {
            tiempo = tiempoMaximo; 
        }
        if (nivelActual === 1) {
            tiempoInicioCategoria = Date.now(); 
        }
        cronometroInterval = setInterval(() => {
            if (nivelActual >= 2) {
                tiempo--;
                const elCronometro = document.getElementById('cronometro');
                if (elCronometro) elCronometro.innerText = `${tiempo}s`;
                if (tiempo <= 0) {
                    clearInterval(cronometroInterval);
                    vidas = 0; 
                    actualizarUI();
                    verificarGameOver(); 
                }
            } else {
                tiempo++;
                const elCronometro = document.getElementById('cronometro');
                if (elCronometro) elCronometro.innerText = `${tiempo}s`;
            }
        }, 1000);
    } else {
        if (bloqueado) {
            bloqueado = false;
            actualizarBotonesJuego();
            tablero.style.opacity = "1";
            cronometroInterval = setInterval(() => {
                if (nivelActual >= 2) {
                    tiempo--;
                    const elCronometro = document.getElementById('cronometro');
                    if (elCronometro) elCronometro.innerText = `${tiempo}s`;
                    if (tiempo <= 0) { clearInterval(cronometroInterval); vidas = 0; actualizarUI(); verificarGameOver(); }
                } else {
                    tiempo++;
                    const elCronometro = document.getElementById('cronometro');
                    if (elCronometro) elCronometro.innerText = `${tiempo}s`;
                }
            }, 1000);
        } else {
            clearInterval(cronometroInterval);
            bloqueado = true;
            actualizarBotonesJuego();
            tablero.style.opacity = "0.5";
        }
    }
};

function crearTablero() {
    const cartasExistentes = document.querySelectorAll('.card.flipped');
    if (cartasExistentes.length > 0) {
        cartasExistentes.forEach(card => card.classList.remove('flipped'));
        setTimeout(() => {
            inicializarNuevaPartida();
        }, 400);
    } else {
        inicializarNuevaPartida();
    }
}

function inicializarNuevaPartida() {
    tablero.innerHTML = '';
    tablero.style.backgroundColor = 'transparent';
    tablero.style.background = 'transparent';
    puntuacionPartida = 0;
    if (vidas <= 0) {
        vidas = 7;
    }
    bloqueado = false;
    juegoIniciado = false;
    tiempo = (nivelActual >= 2) ? tiempoMaximo : 0; 
    cartasVolteadas = [];
    actualizarBotonesJuego();
    btnIniciar.disabled = false;
    tablero.style.opacity = "1";
    if (cronometroInterval) clearInterval(cronometroInterval);
    guardarDatos();
    actualizarUI();
    actualizarPanelEstadisticas();
    if (indiceCategoriaActual >= categoriasFiguras.length) {
        indiceCategoriaActual = 0;
    }
    const categoriaActual = categoriasFiguras[indiceCategoriaActual];
    const pares = categoriaActual.items;
    let IDs = [...pares, ...pares];
    for (let i = IDs.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [IDs[i], IDs[j]] = [IDs[j], IDs[i]];
    }
    IDs.forEach(id => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.dataset.id = id;
        const contenidoCarta = id.startsWith('icofont-') ? `<i class="${id}"></i>` : id;
        card.innerHTML = `
            <div class="card-inner">
                <div class="card-front">?</div>
                <div class="card-back">${contenidoCarta}</div>
            </div>
        `;
        card.onclick = () => flipCard(card);
        tablero.appendChild(card);
    });
}

function flipCard(cardElement) {
    if (!juegoIniciado || bloqueado || cardElement.classList.contains('flipped') || vidas <= 0) return;
    cardElement.classList.add('flipped');
    cartasVolteadas.push(cardElement);
    reproducirEfectoSonido('clic');
    if (cartasVolteadas.length === 2) {
        verificarCoincidencia();
    }
}

async function verificarCoincidencia() {
    bloqueado = true;
    const [primera, segunda] = cartasVolteadas;
    if (primera.dataset.id === segunda.dataset.id) {
        puntuacionPartida += 2;
        scoreTotal += 2;
        if (nivelActual === 1 || nivelActual === 2) {
            vidas++; 
        }
        if (nivelActual === 2) {
            tiempo += 5; 
            const elCronometro = document.getElementById('cronometro');
            if (elCronometro) elCronometro.innerText = `${tiempo}s`;
        }
        reproducirEfectoSonido('acierto');
        await guardarDatos();
        actualizarUI();
        resetearTurno();
        verificarVictoria();
    } else {
        reproducirEfectoSonido('error');
        vidas--;
        await guardarDatos();
        actualizarUI();
        if (vidas <= 0) {
            verificarGameOver();
            return;
        }
        setTimeout(() => {
            primera.classList.remove('flipped');
            segunda.classList.remove('flipped');
            resetearTurno();
        }, 1000);
    }
}

function verificarGameOver() {
    clearInterval(cronometroInterval);
    actualizarBotonesJuego();
    btnIniciar.disabled = true;
    tablero.style.opacity = "0.4";
    bloqueado = true;
    reproducirEfectoSonido('derrota');
    derrotas++;
    guardarDatos();
    actualizarUI();
    document.querySelectorAll('.card').forEach(card => card.classList.add('flipped'));
    const modalSinVidas = document.getElementById('modal-sin-vidas');
    if (modalSinVidas) {
        const tituloModal = modalSinVidas.querySelector('h2');
        const mensajeModal = modalSinVidas.querySelector('p');
        if (tituloModal) tituloModal.textContent = t('sin_vidas_titulo', idiomaActual);
        if (mensajeModal) mensajeModal.textContent = t('sin_vidas_mensaje_progreso', idiomaActual);
        modalSinVidas.style.display = 'block';
        modalSinVidas.classList.add('activo');
        document.body.classList.add('modal-abierto');
        setTimeout(async() => {
            await inicializarPayPal((subscriptionID) => {
                modalSinVidas.style.display = 'none';
                modalSinVidas.classList.remove('activo');
                document.body.classList.remove('modal-abierto');
                vidas = 7;
                tiempo = 0;
                guardarDatos();
                actualizarUI();
                actualizarPanelEstadisticas();
                mostrarModal(
                    t('progreso_salvado_titulo', idiomaActual),
                    t('progreso_salvado_suscripcion', idiomaActual),
                    {
                        textoBotonPrincipal: t('continuar_jugando', idiomaActual),
                        callbackPrincipal: () => crearTablero()
                    }
                );
            });
        }, 1000);
    }
}

document.getElementById('btn-ver-anuncio')?.addEventListener('click', () => {
    const modalSinVidas = document.getElementById('modal-sin-vidas');
    if (modalSinVidas) {
        modalSinVidas.style.display = 'none';
        modalSinVidas.classList.remove('activo');
        document.body.classList.remove('modal-abierto');
    }
    let adContainer = document.getElementById('ad-container');
    if (!adContainer) {
        adContainer = document.createElement('div');
        adContainer.id = 'ad-container';
        adContainer.style.cssText = 'position:fixed; top:0; left:0; width:100%; height:100%; background:black; z-index:9999; display:none;';
        document.body.appendChild(adContainer);
    }
    adContainer.style.display = 'block';
    adContainer.innerHTML = '<div id="ad-video" style="width:100%; height:100%;"></div>';
    const videoElement = document.createElement('video');
    videoElement.id = 'ad-video-player';
    videoElement.style.cssText = 'width:100%; height:100%;';
    document.getElementById('ad-video').appendChild(videoElement);
    const adDisplayContainer = new google.ima.AdDisplayContainer(
        document.getElementById('ad-video'),
        videoElement
    );
    adDisplayContainer.initialize();
    const adsLoader = new google.ima.AdsLoader(adDisplayContainer);
    adsLoader.addEventListener(
        google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED,
        onAdsManagerLoaded,
        false
    );
    adsLoader.addEventListener(
        google.ima.AdErrorEvent.Type.AD_ERROR,
        onAdError,
        false
    );
    const adsRequest = new google.ima.AdsRequest();
    adsRequest.adTagUrl = 'https://pubads.g.doubleclick.net/gampad/ads?iu=/23390576740/memoria_reward&description_url=http%3A%2F%2Fmemoria-ymujica.vercel.app&tfcd=0&npa=0&sz=400x300&ciu_szs=1x1&min_ad_duration=20000&max_ad_duration=30000&gdfp_req=1&unviewed_position_start=1&output=vast&env=vp&impl=s&correlator=';
    adsRequest.linearAdSlotWidth = window.innerWidth;
    adsRequest.linearAdSlotHeight = window.innerHeight;
    adsRequest.nonLinearAdSlotWidth = window.innerWidth;
    adsRequest.nonLinearAdSlotHeight = 150;
    adsLoader.requestAds(adsRequest);
    function onAdsManagerLoaded(adsManagerLoadedEvent) {
        const adsManager = adsManagerLoadedEvent.getAdsManager(videoElement);
        adsManager.addEventListener(google.ima.AdEvent.Type.ALL_ADS_COMPLETED, onAdEvent);
        adsManager.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, onAdError);
        try {
            adsManager.init(window.innerWidth, window.innerHeight, google.ima.ViewMode.NORMAL);
            adsManager.start();
        } catch (adError) {
            onAdError(adError);
        }
    }
    function onAdEvent(adEvent) {
        if (adEvent.type === google.ima.AdEvent.Type.ALL_ADS_COMPLETED) {
            adContainer.style.display = 'none';
            vidas = 7;
            tiempo = 0;
            guardarDatos();
            actualizarUI();
            actualizarPanelEstadisticas();
            mostrarModal(
                t('progreso_salvado_titulo', idiomaActual),
                t('progreso_salvado_anuncio', idiomaActual),
                {
                    textoBotonPrincipal: t('continuar_jugando', idiomaActual),
                    callbackPrincipal: () => crearTablero()
                }
            );
        }
    }
    function onAdError(adErrorEvent) {
        console.error("Error en el anuncio:", adErrorEvent.getError());
        adContainer.style.display = 'none';
        mostrarModal(t('anuncio_no_disponible_titulo', idiomaActual), t('anuncio_no_disponible_mensaje', idiomaActual), {
            textoBotonPrincipal: t('reiniciar_partida', idiomaActual),
            callbackPrincipal: () => {
                nivelActual = 1;
                indiceCategoriaActual = 0;
                vidas = 7;
                tiempo = 0;
                guardarDatos();
                actualizarUI();
                crearTablero();
            }
        });
    }
});

function verificarVictoria() {
    const todasLasCartas = document.querySelectorAll('.card');
    if (Array.from(todasLasCartas).every(card => card.classList.contains('flipped'))) {
        clearInterval(cronometroInterval);
        victorias++;
        actualizarBotonesJuego();
        btnIniciar.disabled = true;
        scoreTotal += puntuacionPartida;
        indiceCategoriaActual++;
        if (nivelActual === 1) {
            const tiempoTomado = Math.round((Date.now() - tiempoInicioCategoria) / 1000);
            if (mejorTiempo === null || tiempoTomado < mejorTiempo) {
                mejorTiempo = tiempoTomado;
            }
        }
        if (indiceCategoriaActual >= categoriasFiguras.length) {
            indiceCategoriaActual = 0;
            if (nivelActual === 1) {
                nivelActual = 2;
                tiempoMaximo = 60;
                vidas = 7; 
            } else if (nivelActual === 2) {
                nivelActual = 3;
                tiempoMaximo = 60; 
            } else {
                nivelActual = 1; 
                vidas = 7;
            }
        }
        guardarDatos();
        if (typeof confetti === 'function') {
            confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
        }
        let tituloModal = t('categoria_superada_titulo', idiomaActual);
        let mensajeModal = t('categoria_superada_mensaje', idiomaActual, indiceCategoriaActual + 1, nivelActual);
        if (indiceCategoriaActual === 0 && nivelActual === 2) {
            tituloModal = t('nivel2_desbloqueado_titulo', idiomaActual);
            mensajeModal = t('nivel2_desbloqueado_mensaje', idiomaActual);
        } else if (indiceCategoriaActual === 0 && nivelActual === 3) {
            tituloModal = t('nivel3_desbloqueado_titulo', idiomaActual);
            mensajeModal = t('nivel3_desbloqueado_mensaje', idiomaActual);
        } else if (indiceCategoriaActual === 0 && nivelActual === 1) {
            tituloModal = t('juego_completado_titulo', idiomaActual);
            mensajeModal = t('juego_completado_mensaje', idiomaActual);
        }
        reproducirEfectoSonido('victoria');
        mostrarModal(
            tituloModal,
            mensajeModal,
            {
                textoBotonPrincipal: t('siguiente_categoria', idiomaActual),
                callbackPrincipal: () => {
                    actualizarPanelEstadisticas();
                    crearTablero();
                }
            }
        );
        actualizarUI();
    }
}

function resetearTurno() {
    cartasVolteadas = [];
    bloqueado = false;
}

btnBorrar.onclick = () => {
    reproducirEfectoSonido('clic');
    if (confirm(t('confirmar_borrar', idiomaActual))) {
        localStorage.clear();
        scoreTotal = 0;
        vidas = 7;
        victorias = 0;
        derrotas = 0;
        mejorTiempo = null;
        indiceCategoriaActual = 0;
        nivelActual = 1; 
        actualizarUI();
        crearTablero();
        actualizarPanelEstadisticas();
        guardarDatos();
    }
};

document.addEventListener("DOMContentLoaded", crearTablero);

// ==========================================
// CONEXIÓN CON EL SISTEMA DE LOGIN
// ==========================================
document.getElementById('btn-login-menu')?.addEventListener('click', () => {
    abrirModalLogin();
});

document.querySelector('#modal-login .btn-cerrar-modal')?.addEventListener('click', () => {
    cerrarModalLogin();
});

// ==========================================
// SINCRONIZACIÓN CON LA NUBE
// ==========================================

document.addEventListener('usuarioLogueado', async (e) => {
    const user = e.detail.user;

    const invitadoScore = parseInt(localStorage.getItem('scoreTotal')) || 0;
    const invitadoNivelCat = parseInt(localStorage.getItem('indiceCategoriaActual')) || 0;
    const invitadoMejorTiempo = parseInt(localStorage.getItem('mejorTiempo')) || null;
    const invitadoVictorias = parseInt(localStorage.getItem('victorias')) || 0;

    const statsDB = await cargarStatsDesdeDB(user.id);

    if (statsDB) {
        // --- CUENTA EXISTENTE ---
        scoreTotal = Math.max(statsDB.score_total, invitadoScore);
        indiceCategoriaActual = Math.max(statsDB.indice_categoria, invitadoNivelCat);
        nivelActual = statsDB.nivel_actual || 1;
        
        // 🔥 Leer país de DB o del user_metadata (sin 🌎)
        paisUsuario = statsDB.pais || user.user_metadata?.pais || '';
        
        console.log("País desde DB:", paisUsuario);

        if (invitadoMejorTiempo && (!statsDB.mejor_tiempo || invitadoMejorTiempo < statsDB.mejor_tiempo)) {
            mejorTiempo = invitadoMejorTiempo;
        } else {
            mejorTiempo = statsDB.mejor_tiempo;
        }

        victorias = statsDB.victorias + invitadoVictorias;
        vidas = statsDB.vidas;
        derrotas = statsDB.derrotas;

        if (invitadoScore > statsDB.score_total || invitadoNivelCat > statsDB.indice_categoria || paisUsuario !== statsDB.pais) {
            await guardarStatsEnDB(user.id, {
                scoreTotal, vidas, victorias, derrotas, mejorTiempo, indiceCategoriaActual, nivelActual,
                pais: paisUsuario
            });
        }
    } else {
        // --- CUENTA NUEVA ---
        scoreTotal = invitadoScore;
        indiceCategoriaActual = invitadoNivelCat;
        nivelActual = parseInt(localStorage.getItem('nivelActual')) || 1;
        mejorTiempo = invitadoMejorTiempo;
        victorias = invitadoVictorias;
        vidas = parseInt(localStorage.getItem('vidas')) || 7;
        derrotas = parseInt(localStorage.getItem('derrotas')) || 0;

        // 🔥 FORZAR LECTURA DEL PAÍS DESDE EL USER_METADATA (sin 🌎)
        paisUsuario = user.user_metadata?.pais || '';
        console.log("País detectado para cuenta nueva:", paisUsuario);

        await guardarStatsEnDB(user.id, {
            scoreTotal, vidas, victorias, derrotas, mejorTiempo, indiceCategoriaActual, nivelActual,
            pais: paisUsuario
        });
    }

    localStorage.removeItem('scoreTotal');
    localStorage.removeItem('vidas');
    localStorage.removeItem('victorias');
    localStorage.removeItem('derrotas');
    localStorage.removeItem('mejorTiempo');
    localStorage.removeItem('indiceCategoriaActual');
    localStorage.removeItem('nivelActual');
    localStorage.removeItem('paisUsuario');

    actualizarUI();
    crearTablero();
});

// Auto-guardado cada 10 segundos
setInterval(async () => {
    if (getUsuarioActual()) {
        await guardarDatos();
    }
}, 10000);

document.addEventListener('usuarioDeslogueado', async () => {
    const usuario = getUsuarioActual();
    if (usuario) {
        await guardarStatsEnDB(usuario.id, {
            scoreTotal, vidas, victorias, derrotas, mejorTiempo, indiceCategoriaActual, nivelActual,
            pais: paisUsuario
        });
    }

    scoreTotal = parseInt(localStorage.getItem('scoreTotal')) || 0;
    vidas = parseInt(localStorage.getItem('vidas')) || 7;
    victorias = parseInt(localStorage.getItem('victorias')) || 0;
    derrotas = parseInt(localStorage.getItem('derrotas')) || 0;
    mejorTiempo = parseInt(localStorage.getItem('mejorTiempo')) || null;
    indiceCategoriaActual = parseInt(localStorage.getItem('indiceCategoriaActual')) || 0;
    nivelActual = parseInt(localStorage.getItem('nivelActual')) || 1;
    paisUsuario = localStorage.getItem('paisUsuario') || '';

    actualizarUI();
    crearTablero();
});

// ==========================================
// RANKING GLOBAL
// ==========================================
async function abrirModalRanking() {
    const modal = document.getElementById('modal-ranking');
    const lista = document.getElementById('ranking-lista');
    const miPosicionDiv = document.getElementById('ranking-mi-posicion');
    if (!modal) return;
    reproducirEfectoSonido('clic');
    modal.style.display = 'block';
    modal.classList.add('activo');
    document.body.classList.add('modal-abierto');
    lista.innerHTML = '<p style="text-align: center; color: #999;">Cargando ranking...</p>';
    miPosicionDiv.style.display = 'none';
    const top = await obtenerTopRanking();
    if (!top || top.length === 0) {
        lista.innerHTML = '<p style="text-align: center; color: #999;">Aún no hay jugadores en el ranking.</p>';
    } else {
        let html = '';
        top.forEach((jugador, index) => {
            const medalla = index === 0 ? '🥇' : index === 1 ? '🥈' : index === 2 ? '🥉' : `#${index + 1}`;
            const nombre = jugador.username || 'Anónimo';
            const record = jugador.mejor_tiempo ? `${jugador.mejor_tiempo}s` : '--';
            const paisEmoji = jugador.pais || '';
            html += `
                <div style="display: flex; justify-content: space-between; padding: 8px; border-bottom: 1px solid #eee; font-size: 14px;">
                    <span><strong>${medalla}</strong> ${paisEmoji} ${nombre}</span>
                    <span><strong>${jugador.score_total}</strong> pts | ${record}</span>
                </div>
            `;
        });
        lista.innerHTML = html;
    }
    const user = getUsuarioActual();
    if (user) {
        const miPos = await obtenerMiPosicion(user.id);
        if (miPos) {
            miPosicionDiv.style.display = 'block';
            miPosicionDiv.innerHTML = `📊 Tu posición: <strong>#${miPos.posicion}</strong> (${miPos.score} pts)`;
        }
    }
}

document.getElementById('btn-ranking')?.addEventListener('click', abrirModalRanking);

document.querySelector('#modal-ranking .btn-cerrar-modal')?.addEventListener('click', () => {
    const modal = document.getElementById('modal-ranking');
    if (modal) {
        modal.style.display = 'none';
        modal.classList.remove('activo');
        document.body.classList.remove('modal-abierto');
    }
});