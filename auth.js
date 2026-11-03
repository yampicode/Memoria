// auth.js - Sistema de login con Supabase
import { supabase } from './supabase-client.js';

let modoRegistro = false; // false = login, true = registro
let usuarioActual = null;

// ==========================================
// ELEMENTOS DEL DOM
// ==========================================
const modalLogin = document.getElementById('modal-login');
const formAuth = document.getElementById('form-auth');
const inputEmail = document.getElementById('auth-email');
const inputPassword = document.getElementById('auth-password');
const inputUsername = document.getElementById('auth-username');
const btnAuthSubmit = document.getElementById('btn-auth-submit');
const loginTitulo = document.getElementById('login-titulo');
const authMensaje = document.getElementById('auth-mensaje');
const authCambiarModo = document.getElementById('auth-cambiar-modo');
const authCambiarTexto = document.getElementById('auth-cambiar-texto');

// ==========================================
// FUNCIONES AUXILIARES
// ==========================================
function mostrarMensaje(texto, tipo = 'info') {
    authMensaje.textContent = texto;
    if (tipo === 'error') authMensaje.style.color = '#e74c3c';
    else if (tipo === 'exito') authMensaje.style.color = '#28a745';
    else authMensaje.style.color = '#666';
}

function alternarModo() {
    modoRegistro = !modoRegistro;
    authMensaje.textContent = '';
    
    if (modoRegistro) {
        loginTitulo.textContent = 'Crear Cuenta';
        btnAuthSubmit.textContent = 'Registrarme';
        inputUsername.style.display = 'block';
        authCambiarTexto.textContent = '¿Ya tienes cuenta?';
        authCambiarModo.textContent = 'Inicia sesión';
    } else {
        loginTitulo.textContent = 'Iniciar Sesión';
        btnAuthSubmit.textContent = 'Entrar';
        inputUsername.style.display = 'none';
        authCambiarTexto.textContent = '¿No tienes cuenta?';
        authCambiarModo.textContent = 'Regístrate';
    }
}

// ==========================================
// ABRIR / CERRAR MODAL
// ==========================================
export function abrirModalLogin() {
    modalLogin.classList.add('activo');
    modalLogin.style.display = 'block';
}

export function cerrarModalLogin() {
    modalLogin.classList.remove('activo');
    modalLogin.style.display = 'none';
    authMensaje.textContent = '';
    formAuth.reset();
}

// ==========================================
// MANEJO DEL FORMULARIO
// ==========================================
formAuth.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const email = inputEmail.value.trim();
    const password = inputPassword.value;
    const username = inputUsername.value.trim();
    
    btnAuthSubmit.disabled = true;
    btnAuthSubmit.textContent = modoRegistro ? 'Registrando...' : 'Entrando...';
    mostrarMensaje('');
    
    try {
        if (modoRegistro) {
            // ---- REGISTRO ----
            if (!username) {
                mostrarMensaje('Por favor, elige un nombre de usuario', 'error');
                return;
            }
            
            const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
        data: { username: username },
        emailRedirectTo: 'https://memoria-ymujica.vercel.app' // o la URL donde quieras que vuelva
    }
});
            
            if (error) throw error;
            
            // Supabase por defecto NO da sesión activa hasta confirmar el email
            if (data.user && !data.session) {
                mostrarMensaje(
                    '✅ ¡Casi listo! Revisa tu correo y haz clic en el enlace de verificación.',
                    'exito'
                );
                formAuth.reset();
            }
            
        } else {
            // ---- LOGIN ----
            const { data, error } = await supabase.auth.signInWithPassword({
                email,
                password
            });
            
            if (error) throw error;
            
            mostrarMensaje('✅ ¡Bienvenido de vuelta!', 'exito');
            
            setTimeout(() => {
                cerrarModalLogin();
                actualizarUILogin();
            }, 1000);
        }
    } catch (error) {
        console.error('Error auth:', error);
        
        // Traducir errores comunes de Supabase
        let mensajeError = error.message;
        if (mensajeError.includes('Invalid login credentials')) {
            mensajeError = 'Correo o contraseña incorrectos';
        } else if (mensajeError.includes('Email not confirmed')) {
            mensajeError = 'Debes verificar tu correo antes de entrar. Revisa tu bandeja.';
        } else if (mensajeError.includes('User already registered')) {
            mensajeError = 'Este correo ya está registrado. Inicia sesión.';
        } else if (mensajeError.includes('Password should be at least')) {
            mensajeError = 'La contraseña debe tener al menos 6 caracteres';
        }
        
        mostrarMensaje(mensajeError, 'error');
    } finally {
        btnAuthSubmit.disabled = false;
        btnAuthSubmit.textContent = modoRegistro ? 'Registrarme' : 'Entrar';
    }
});

// Cambiar entre login y registro
authCambiarModo.addEventListener('click', (e) => {
    e.preventDefault();
    alternarModo();
});

// ==========================================
// CERRAR SESIÓN
// ==========================================
export async function cerrarSesion() {
    await supabase.auth.signOut();
    usuarioActual = null;
    actualizarUILogin();
}

// ==========================================
// ACTUALIZAR UI SEGÚN SESIÓN
// ==========================================
export function actualizarUILogin() {
    const btnLoginMenu = document.getElementById('btn-login-menu');
    const userInfo = document.getElementById('user-info-menu');
    
    if (usuarioActual) {
        if (btnLoginMenu) btnLoginMenu.style.display = 'none';
        if (userInfo) {
            userInfo.style.display = 'flex';
            const username = usuarioActual.user_metadata?.username 
                || usuarioActual.email.split('@')[0];
            userInfo.innerHTML = `

<button id="btn-login-menu" class="btn__menu" data-i18n="Cerrar sesión">Cerrar sesión <span id="btn-logout" style="margin-left: 5px; color: white; cursor: pointer; font-size: 1.5em;" class="icofont-duotone icofont-sign-out">
                </span>    </button>

    
<span style="color: #333; font-weight: bold;">
<span class="icofont-duotone icofont-user"></span> ${username} </span> `;
            document.getElementById('btn-logout').addEventListener('click', cerrarSesion);
        }
    } else {
        if (btnLoginMenu) btnLoginMenu.style.display = 'block';
        if (userInfo) userInfo.style.display = 'none';
    }
}

// ==========================================
// ESCUCHAR CAMBIOS DE SESIÓN
// ==========================================
supabase.auth.onAuthStateChange(async (event, session) => {
    usuarioActual = session?.user || null;
    actualizarUILogin();
    
    // Si el usuario acaba de verificar su correo, mostrar mensaje
    if (event === 'SIGNED_IN' && session) {
        // Aquí más adelante podrás cargar las stats de la DB
        console.log('Usuario logueado:', session.user.email);
    }
});

// ==========================================
// INICIALIZAR: obtener sesión actual
// ==========================================
(async () => {
    const { data: { session } } = await supabase.auth.getSession();
    usuarioActual = session?.user || null;
    actualizarUILogin();
})();

// ==========================================
// EXPORTAR para usar en otros archivos
// ==========================================
export function getUsuarioActual() {
    return usuarioActual;
}