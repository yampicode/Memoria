// traducciones.js - Sistema de internacionalización para Memoria

export const traducciones = {
    es: {
             
         // Ranking
ranking_btn: "🏆 Ranking Global",
ranking_titulo: "🏆 Ranking Global",
ranking_subtitulo: "Los 10 mejores jugadores por Score.",
ranking_cargando: "Cargando ranking...",
ranking_vacio: "Aún no hay jugadores en el ranking.",
ranking_tu_posicion: "Tu posición",
 
        // Menú principal
        jugar_ahora: "Jugar Ahora",
        como_jugar: "¿Cómo Jugar?",
        ajustes: "Ajustes",
        desarrollador: "Desarrollador",
        salir: "Salir",
        iniciar_sesion: "Iniciar Sesión",
        correo_electronico: "Correo electrónico",
        contrasena_min: "Contraseña (mín. 6 caracteres)",
        nombre_usuario: "Nombre de usuario (solo al registrarse)",
        entrar: "Entrar",
        no_tienes_cuenta: "¿No tienes cuenta?",
        registrate: "Regístrate",
        politica_privacidad: "Política de Privacidad",

        // Pantalla de juego
        iniciar_juego: "Iniciar Juego",
        pausar: "Pausar",
        reanudar: "Reanudar",
        revolver_cartas: "Revolver Cartas",
        resetear_valores: "Resetear Valores",

        // Panel de estadísticas
        tiempo: "Tiempo",
        tiempo_restante: "T. Restante",
        nivel_label: "Nivel",
        vidas_label: "Vidas",
        puntos: "Puntos",
        victorias_label: "Victorias",
        record: "Récord",
        score: "Score",
        derrotas: "Derrotas",

        // Estados del juego
        game_over: "¡Game Over!",
        ganaste: "¡Ganaste!",
        nuevo_record: "¡Nuevo Récord!",
        victoria: "¡Victoria!",

        // Modal ¿Cómo Jugar?
        como_jugar_titulo: "¿Cómo Jugar?",
        como_jugar_subtitulo: "¡Pon a prueba tu memoria, acumula aciertos y mantén tus vidas a salvo!",
        como_jugar_paso1: "Voltea las cartas: Haz clic en dos cartas para descubrir los iconos ocultos en el tablero.",
        como_jugar_paso2: "Haz parejas y gana vidas: Cada vez que encuentres una pareja correcta, ganarás vidas como recompensa para seguir jugando.",
        como_jugar_paso3: "Cuidado con los errores: Si las cartas no coinciden, perderás una vida. Tienes un límite inicial de 7 vidas. Si te quedas a cero, podrás ver un anuncio rápido para recuperarlas y continuar exactamente donde ibas.",
        como_jugar_paso4: "Objetivo: Voltea las cartas de dos en dos para encontrar las parejas idénticas antes de que se te acaben las 7 vidas.",
        cerrar: "Cerrar",

        // Modal Ajustes
        ajustes_titulo: "Ajustes",
        sonido: "Sonido:",
        activado: "Activado",
        silenciado: "Silenciado",
        modo: "Modo:",
        dark: "Dark",
        light: "Light",
        animaciones: "Animaciones",
        animaciones_activadas: "Activadas",
        animaciones_desactivadas: "Desactivadas",
        idioma: "Idioma",

        // Modal Desarrollador
        desarrollador_titulo: "Desarrollador",
        desarrollador_texto: "Hola, soy Yampiero Mujica, creé Memoria con mucho cariño, HTML, CSS y Javascript para que pases un buen rato entrenando tu memoria sin anuncios molestos. Si te gusta el proyecto y quieres apoyarme a mantenerlo activo, invítame un café haciendo clic en la tacita",

        // Modal sistema (Game Over)
        game_over_mensaje: "¡Lástima! Te has quedado sin vidas.",
        ir_menu: "Ir al menú",
        reintentar_nivel: "Reintentar Nivel",
        sin_vidas_titulo: "¡Te has quedado sin vidas!",
        sin_vidas_mensaje: "¿Qué deseas hacer para continuar?",
        sin_vidas_mensaje_progreso: "Suscríbete para mantener tu nivel, Score y récord, y continuar donde te quedaste.",
        ver_anuncio: "🎬 Ver anuncio y recuperar 7 vidas (Continuar partida)",
        ver_anuncio_texto: "Ver anuncio y salvar mi progreso",
        reiniciar_partida: "🔄 Reiniciar partida (Perder progreso)",
        reiniciar_partida_texto: "Reiniciar partida (Perder progreso)",

        // Modales de Éxito / Victoria
        victoria_mensaje: "¡Felicitaciones, has completado el nivel con éxito!",
        siguiente_nivel: "Siguiente Nivel",
        progreso_salvado_titulo: "¡Progreso Salvado!",
        progreso_salvado_suscripcion: "Gracias por suscribirte. Tienes 7 vidas nuevas y continuarás en tu categoría actual sin perder tu Score ni tu récord.",
        progreso_salvado_anuncio: "Gracias por ver el anuncio. Tienes 7 vidas nuevas y continúas en tu categoría actual sin perder tu Score ni tu récord.",
        continuar_jugando: "Continuar Jugando",
        anuncio_no_disponible_titulo: "Anuncio no disponible",
        anuncio_no_disponible_mensaje: "No se pudo cargar el anuncio. Inténtalo más tarde.",
        
        // Mensajes de Niveles
        categoria_superada_titulo: "¡Categoría Superada!",
        categoria_superada_mensaje: (cat, niv) => `¡Bien hecho! Ahora vas a la Categoría ${cat} del Nivel ${niv}.`,
        nivel2_desbloqueado_titulo: "¡Nivel 2 Desbloqueado!",
        nivel2_desbloqueado_mensaje: "¡Ahora juegas contrarreloj! Cada acierto te da +1 vida y +5 segundos.",
        nivel3_desbloqueado_titulo: "¡Nivel 3 Desbloqueado!",
        nivel3_desbloqueado_mensaje: "¡Modo Extremo! No hay recompensas de tiempo ni vidas. ¡Demuestra lo que vales!",
        juego_completado_titulo: "¡Juego Completado!",
        juego_completado_mensaje: "¡Has superado los 3 niveles! Vuelves a empezar desde el Nivel 1.",
        siguiente_categoria: "Siguiente Categoría",

        // Footer y otros
        invitar_cafe: "Invítame un café",
        version: "2026 © | V 2.9",
        confirmar_borrar: "¿Borrar todo el historial y reiniciar puntuaciones?",
        
        // PayPal
        cargando_paypal: "Cargando PayPal...",
        error_paypal_conexion: "Error al cargar PayPal. Intenta de nuevo.",
        error_paypal_render: "Error al dibujar el botón.",
        paypal_no_disponible_venezuela: "PayPal no está disponible en tu región.",

        // Tooltips
        titulo_iniciar: "Iniciar el Juego",
        titulo_revolver: "Remover las cartas",
        titulo_resetear: "Reiniciar los Marcadores",
        titulo_volver: "Volver",

        // Textos dinámicos (funciones)
        tiempo_record: (tiempo) => `¡Nuevo Récord! Tiempo: ${tiempo}s`,
        tiempo_victoria: (tiempo, puntos) => `¡Victoria! Tiempo: ${tiempo}s. Puntos: ${puntos}`,
    },

    en: {
        // Main menu
        jugar_ahora: "Play Now",
        como_jugar: "How to Play?",
        ajustes: "Settings",
        desarrollador: "Developer",
        salir: "Exit",
        iniciar_sesion: "Log In",
        correo_electronico: "Email address",
        contrasena_min: "Password (min. 6 characters)",
        nombre_usuario: "Username (only for registration)",
        entrar: "Enter",
        no_tienes_cuenta: "Don't have an account?",
        registrate: "Sign up",
        politica_privacidad: "Privacy Policy",

        // Game screen
        iniciar_juego: "Start Game",
        pausar: "Pause",
        reanudar: "Resume",
        revolver_cartas: "Shuffle Cards",
        resetear_valores: "Reset Values",

        // Stats panel
        tiempo: "Time",
        tiempo_restante: "Time Left",
        nivel_label: "Level",
        vidas_label: "Lives",
        puntos: "Points",
        victorias_label: "Wins",
        record: "Record",
        score: "Score",
        derrotas: "Losses",

        // Game states
        game_over: "Game Over!",
        ganaste: "You Won!",
        nuevo_record: "New Record!",
        victoria: "Victory!",

        // How to Play modal
        como_jugar_titulo: "How to Play?",
        como_jugar_subtitulo: "Test your memory, accumulate hits and keep your lives safe!",
        como_jugar_paso1: "Flip cards: Click on two cards to reveal the hidden icons on the board.",
        como_jugar_paso2: "Make pairs and earn lives: Every time you find a correct pair, you'll earn lives as a reward to keep playing.",
        como_jugar_paso3: "Beware of mistakes: If the cards don't match, you'll lose a life. You start with 7 lives. If you run out, you can watch a quick ad to recover them and continue right where you left off.",
        como_jugar_paso4: "Objective: Flip cards two at a time to find identical pairs before you run out of 7 lives.",
        cerrar: "Close",

        // Settings modal
        ajustes_titulo: "Settings",
        sonido: "Sound:",
        activado: "On",
        silenciado: "Off",
        modo: "Mode:",
        dark: "Dark",
        light: "Light",
        animaciones: "Animations",
        animaciones_activadas: "Enabled",
        animaciones_desactivadas: "Disabled",
        idioma: "Language",

        // Developer modal
        desarrollador_titulo: "Developer",
        desarrollador_texto: "Hi, I'm Yampiero Mujica. I created Memoria with love using HTML, CSS and JavaScript so you can have a good time training your memory without annoying ads. If you like the project and want to support me to keep it active, buy me a coffee by clicking on the cup",

        // System modal (Game Over)
        game_over_mensaje: "Too bad! You've run out of lives.",
        ir_menu: "Go to menu",
        reintentar_nivel: "Retry Level",
        sin_vidas_titulo: "You've run out of lives!",
        sin_vidas_mensaje: "What do you want to do to continue?",
        sin_vidas_mensaje_progreso: "Subscribe to keep your level, Score and record, and continue where you left off.",
        ver_anuncio: "🎬 Watch ad and recover 7 lives (Continue game)",
        ver_anuncio_texto: "Watch ad and save my progress",
        reiniciar_partida: "🔄 Restart game (Lose progress)",
        reiniciar_partida_texto: "Restart game (Lose progress)",

        // Success / Victory Modals
        victoria_mensaje: "Congratulations, you've completed the level successfully!",
        siguiente_nivel: "Next Level",
        progreso_salvado_titulo: "Progress Saved!",
        progreso_salvado_suscripcion: "Thanks for subscribing. You have 7 new lives and will continue in your current category without losing your Score or record.",
        progreso_salvado_anuncio: "Thanks for watching the ad. You have 7 new lives and continue in your current category without losing your Score or record.",
        continuar_jugando: "Continue Playing",
        anuncio_no_disponible_titulo: "Ad not available",
        anuncio_no_disponible_mensaje: "Could not load the ad. Please try again later.",

        // Level Messages
        categoria_superada_titulo: "Category Cleared!",
        categoria_superada_mensaje: (cat, niv) => `Well done! Now you go to Category ${cat} of Level ${niv}.`,
        nivel2_desbloqueado_titulo: "Level 2 Unlocked!",
        nivel2_desbloqueado_mensaje: "Now you play against the clock! Each hit gives you +1 life and +5 seconds.",
        nivel3_desbloqueado_titulo: "Level 3 Unlocked!",
        nivel3_desbloqueado_mensaje: "Extreme Mode! There are no time or life rewards. Show what you're worth!",
        juego_completado_titulo: "Game Completed!",
        juego_completado_mensaje: "You've beaten all 3 levels! You start over from Level 1.",
        siguiente_categoria: "Next Category",

        // Footer and others
        invitar_cafe: "Buy me a coffee",
        version: "2026 © | V 2.9",
        confirmar_borrar: "Delete all history and reset scores?",

        // PayPal
        cargando_paypal: "Loading PayPal...",
        error_paypal_conexion: "Error loading PayPal. Try again.",
        error_paypal_render: "Error drawing the button.",
        paypal_no_disponible_venezuela: "PayPal is not available in your region.",

        // Tooltips
        titulo_iniciar: "Start Game",
        titulo_revolver: "Shuffle Cards",
        titulo_resetear: "Reset Values",
        titulo_volver: "Back",

        // Dynamic texts (functions)
        tiempo_record: (tiempo) => `New Record! Time: ${tiempo}s`,
        tiempo_victoria: (tiempo, puntos) => `Victory! Time: ${tiempo}s. Points: ${puntos}`,
    },

    pt: {
        // Menu principal
        jugar_ahora: "Jogar Agora",
        como_jugar: "Como Jogar?",
        ajustes: "Configurações",
        desarrollador: "Desenvolvedor",
        salir: "Sair",
        iniciar_sesion: "Entrar",
        correo_electronico: "E-mail",
        contrasena_min: "Senha (mín. 6 caracteres)",
        nombre_usuario: "Nome de usuário (apenas para registro)",
        entrar: "Entrar",
        no_tienes_cuenta: "Não tem uma conta?",
        registrate: "Cadastre-se",
        politica_privacidad: "Política de Privacidade",

        // Tela do jogo
        iniciar_juego: "Iniciar Jogo",
        pausar: "Pausar",
        reanudar: "Retomar",
        revolver_cartas: "Embaralhar Cartas",
        resetear_valores: "Resetar Valores",

        // Painel de estatísticas
        tiempo: "Tempo",
        tiempo_restante: "Tempo Rest.",
        nivel_label: "Nível",
        vidas_label: "Vidas",
        puntos: "Pontos",
        victorias_label: "Vitórias",
        record: "Recorde",
        score: "Pontuação",
        derrotas: "Derrotas",

        // Estados do jogo
        game_over: "Fim de Jogo!",
        ganaste: "Você Ganhou!",
        nuevo_record: "Novo Recorde!",
        victoria: "Vitória!",

        // Modal Como Jogar
        como_jugar_titulo: "Como Jogar?",
        como_jugar_subtitulo: "Teste sua memória, acumule acertos e mantenha suas vidas seguras!",
        como_jugar_paso1: "Vire as cartas: Clique em duas cartas para descobrir os ícones ocultos no tabuleiro.",
        como_jugar_paso2: "Faça pares e ganhe vidas: Cada vez que encontrar um par correto, você ganhará vidas como recompensa para continuar jogando.",
        como_jugar_paso3: "Cuidado com os erros: Se as cartas não coincidirem, você perderá uma vida. Você começa com 7 vidas. Se ficar sem, pode assistir a um anúncio rápido para recuperá-las e continuar de onde parou.",
        como_jugar_paso4: "Objetivo: Vire as cartas de duas em duas para encontrar pares idênticos antes que suas 7 vidas acabem.",
        cerrar: "Fechar",

        // Modal Configurações
        ajustes_titulo: "Configurações",
        sonido: "Som:",
        activado: "Ativado",
        silenciado: "Silenciado",
        modo: "Modo:",
        dark: "Escuro",
        light: "Claro",
        animaciones: "Animações",
        animaciones_activadas: "Ativadas",
        animaciones_desactivadas: "Desativadas",
        idioma: "Idioma",

        // Modal Desenvolvedor
        desarrollador_titulo: "Desenvolvedor",
        desarrollador_texto: "Olá, sou Yampiero Mujica. Criei o Memória com muito carinho usando HTML, CSS e JavaScript para que você possa se divertir treinando sua memória sem anúncios irritantes. Se você gosta do projeto e quer me apoiar para mantê-lo ativo, me pague um café clicando na xícara",

        // Modal do sistema (Game Over)
        game_over_mensaje: "Que pena! Você ficou sem vidas.",
        ir_menu: "Ir ao menu",
        reintentar_nivel: "Tentar Novamente",
        sin_vidas_titulo: "Você ficou sem vidas!",
        sin_vidas_mensaje: "O que você deseja fazer para continuar?",
        sin_vidas_mensaje_progreso: "Assine para manter seu nível, Score e recorde, e continuar de onde parou.",
        ver_anuncio: "🎬 Ver anúncio e recuperar 7 vidas (Continuar partida)",
        ver_anuncio_texto: "Ver anúncio e salvar meu progresso",
        reiniciar_partida: "🔄 Reiniciar partida (Perder progresso)",
        reiniciar_partida_texto: "Reiniciar partida (Perder progresso)",

        // Modais de Sucesso / Vitória
        victoria_mensaje: "Parabéns, você completou o nível com sucesso!",
        siguiente_nivel: "Próximo Nível",
        progreso_salvado_titulo: "Progresso Salvo!",
        progreso_salvado_suscripcion: "Obrigado por assinar. Você tem 7 vidas novas e continuará na sua categoria atual sem perder seu Score ou recorde.",
        progreso_salvado_anuncio: "Obrigado por assistir ao anúncio. Você tem 7 vidas novas e continua na sua categoria atual sem perder seu Score ou recorde.",
        continuar_jugando: "Continuar Jogando",
        anuncio_no_disponible_titulo: "Anúncio não disponível",
        anuncio_no_disponible_mensaje: "Não foi possível carregar o anúncio. Tente novamente mais tarde.",

        // Mensagens de Níveis
        categoria_superada_titulo: "Categoria Superada!",
        categoria_superada_mensaje: (cat, niv) => `Muito bem! Agora você vai para a Categoria ${cat} do Nível ${niv}.`,
        nivel2_desbloqueado_titulo: "Nível 2 Desbloqueado!",
        nivel2_desbloqueado_mensaje: "Agora você joga contra o relógio! Cada acerto te dá +1 vida e +5 segundos.",
        nivel3_desbloqueado_titulo: "Nível 3 Desbloqueado!",
        nivel3_desbloqueado_mensaje: "Modo Extremo! Não há recompensas de tempo ou vidas. Mostre do que você é capaz!",
        juego_completado_titulo: "Jogo Completado!",
        juego_completado_mensaje: "Você superou os 3 níveis! Você recomeça do Nível 1.",
        siguiente_categoria: "Próxima Categoria",

        // Footer e outros
        invitar_cafe: "Me pague um café",
        version: "2026 © | V 2.9",
        confirmar_borrar: "Apagar todo o histórico e redefinir pontuações?",

        // PayPal
        cargando_paypal: "Carregando PayPal...",
        error_paypal_conexion: "Erro ao carregar o PayPal. Tente novamente.",
        error_paypal_render: "Erro ao desenhar o botão.",
        paypal_no_disponible_venezuela: "O PayPal não está disponível na sua região.",

        // Tooltips
        titulo_iniciar: "Iniciar Jogo",
        titulo_revolver: "Embaralhar Cartas",
        titulo_resetear: "Resetar Valores",
        titulo_volver: "Voltar",

        // Textos dinâmicos (funções)
        tiempo_record: (tiempo) => `Novo Recorde! Tempo: ${tiempo}s`,
        tiempo_victoria: (tiempo, puntos) => `Vitória! Tempo: ${tiempo}s. Pontos: ${puntos}`,
    },

    fr: {
        // Menu principal
        jugar_ahora: "Jouer Maintenant",
        como_jugar: "Comment Jouer?",
        ajustes: "Paramètres",
        desarrollador: "Développeur",
        salir: "Quitter",
        iniciar_sesion: "Se Connecter",
        correo_electronico: "Adresse e-mail",
        contrasena_min: "Mot de passe (min. 6 caractères)",
        nombre_usuario: "Nom d'utilisateur (uniquement pour l'inscription)",
        entrar: "Entrer",
        no_tienes_cuenta: "Vous n'avez pas de compte?",
        registrate: "S'inscrire",
        politica_privacidad: "Politique de Confidentialité",

        // Écran de jeu
        iniciar_juego: "Démarrer le Jeu",
        pausar: "Pause",
        reanudar: "Reprendre",
        revolver_cartas: "Mélanger les Cartes",
        resetear_valores: "Réinitialiser",

        // Panneau de statistiques
        tiempo: "Temps",
        tiempo_restante: "Temps Rest.",
        nivel_label: "Niveau",
        vidas_label: "Vies",
        puntos: "Points",
        victorias_label: "Victoires",
        record: "Record",
        score: "Score",
        derrotas: "Défaites",

        // États du jeu
        game_over: "Partie Terminée!",
        ganaste: "Tu as Gagné!",
        nuevo_record: "Nouveau Record!",
        victoria: "Victoire!",

        // Modal Comment Jouer
        como_jugar_titulo: "Comment Jouer?",
        como_jugar_subtitulo: "Testez votre mémoire, accumulez des points et gardez vos vies en sécurité!",
        como_jugar_paso1: "Retournez les cartes: Cliquez sur deux cartes pour découvrir les icônes cachées sur le plateau.",
        como_jugar_paso2: "Faites des paires et gagnez des vies: Chaque fois que vous trouvez une paire correcte, vous gagnerez des vies en récompense pour continuer à jouer.",
        como_jugar_paso3: "Attention aux erreurs: Si les cartes ne correspondent pas, vous perdrez une vie. Vous commencez avec 7 vies. Si vous n'en avez plus, vous pouvez regarder une courte pub pour les récupérer et continuer exactement là où vous étiez.",
        como_jugar_paso4: "Objectif: Retournez les cartes deux par deux pour trouver des paires identiques avant d'épuiser vos 7 vies.",
        cerrar: "Fermer",

        // Modal Paramètres
        ajustes_titulo: "Paramètres",
        sonido: "Son:",
        activado: "Activé",
        silenciado: "Désactivé",
        modo: "Mode:",
        dark: "Sombre",
        light: "Clair",
        animaciones: "Animations",
        animaciones_activadas: "Activées",
        animaciones_desactivadas: "Désactivées",
        idioma: "Langue",

        // Modal Développeur
        desarrollador_titulo: "Développeur",
        desarrollador_texto: "Bonjour, je suis Yampiero Mujica. J'ai créé Memoria avec amour en utilisant HTML, CSS et JavaScript pour que vous puissiez passer un bon moment à entraîner votre mémoire sans publicités ennuyeuses. Si vous aimez le projet et voulez me soutenir pour le maintenir actif, offrez-moi un café en cliquant sur la tasse",

        // Modal système (Game Over)
        game_over_mensaje: "Dommage! Vous n'avez plus de vies.",
        ir_menu: "Aller au menu",
        reintentar_nivel: "Réessayer le Niveau",
        sin_vidas_titulo: "Vous n'avez plus de vies!",
        sin_vidas_mensaje: "Que voulez-vous faire pour continuer?",
        sin_vidas_mensaje_progreso: "Abonnez-vous pour conserver votre niveau, Score et record, et continuer où vous en étiez.",
        ver_anuncio: "🎬 Voir une pub et récupérer 7 vies (Continuer la partie)",
        ver_anuncio_texto: "Voir une pub et sauvegarder ma progression",
        reiniciar_partida: "🔄 Recommencer la partie (Perdre la progression)",
        reiniciar_partida_texto: "Recommencer la partie (Perdre la progression)",

        // Modales de Succès / Victoire
        victoria_mensaje: "Félicitations, vous avez terminé le niveau avec succès!",
        siguiente_nivel: "Niveau Suivant",
        progreso_salvado_titulo: "Progression Sauvegardée!",
        progreso_salvado_suscripcion: "Merci de votre abonnement. Vous avez 7 nouvelles vies et continuerez dans votre catégorie actuelle sans perdre votre Score ni votre record.",
        progreso_salvado_anuncio: "Merci d'avoir regardé la pub. Vous avez 7 nouvelles vies et continuez dans votre catégorie actuelle sans perdre votre Score ni votre record.",
        continuar_jugando: "Continuer à Jouer",
        anuncio_no_disponible_titulo: "Pub non disponible",
        anuncio_no_disponible_mensaje: "Impossible de charger la pub. Réessayez plus tard.",

        // Messages de Niveaux
        categoria_superada_titulo: "Catégorie Terminée!",
        categoria_superada_mensaje: (cat, niv) => `Bien joué! Maintenant, vous passez à la Catégorie ${cat} du Niveau ${niv}.`,
        nivel2_desbloqueado_titulo: "Niveau 2 Débloqué!",
        nivel2_desbloqueado_mensaje: "Maintenant, vous jouez contre la montre! Chaque réussite vous donne +1 vie et +5 secondes.",
        nivel3_desbloqueado_titulo: "Niveau 3 Débloqué!",
        nivel3_desbloqueado_mensaje: "Mode Extrême! Il n'y a pas de récompenses de temps ou de vies. Montrez ce que vous valez!",
        juego_completado_titulo: "Jeu Terminé!",
        juego_completado_mensaje: "Vous avez battu les 3 niveaux! Vous recommencez au Niveau 1.",
        siguiente_categoria: "Catégorie Suivante",

        // Footer et autres
        invitar_cafe: "Offrez-moi un café",
        version: "2026 © | V 2.9",
        confirmar_borrar: "Effacer tout l'historique et réinitialiser les scores?",

        // PayPal
        cargando_paypal: "Chargement de PayPal...",
        error_paypal_conexion: "Erreur de chargement de PayPal. Réessayez.",
        error_paypal_render: "Erreur lors du dessin du bouton.",
        paypal_no_disponible_venezuela: "PayPal n'est pas disponible dans votre région.",

        // Tooltips
        titulo_iniciar: "Démarrer le Jeu",
        titulo_revolver: "Mélanger les Cartes",
        titulo_resetear: "Réinitialiser les Valeurs",
        titulo_volver: "Retour",

        // Textes dynamiques (fonctions)
        tiempo_record: (tiempo) => `Nouveau Record! Temps: ${tiempo}s`,
        tiempo_victoria: (tiempo, puntos) => `Victoire! Temps: ${tiempo}s. Points: ${puntos}`,
    },

    it: {
        // Menu principale
        jugar_ahora: "Gioca Ora",
        como_jugar: "Come Giocare?",
        ajustes: "Impostazioni",
        desarrollador: "Sviluppatore",
        salir: "Esci",
        iniciar_sesion: "Accedi",
        correo_electronico: "Indirizzo email",
        contrasena_min: "Password (min. 6 caratteri)",
        nombre_usuario: "Nome utente (solo per la registrazione)",
        entrar: "Entra",
        no_tienes_cuenta: "Non hai un account?",
        registrate: "Registrati",
        politica_privacidad: "Informativa sulla Privacy",

        // Schermata di gioco
        iniciar_juego: "Inizia Gioco",
        pausar: "Pausa",
        reanudar: "Riprendi",
        revolver_cartas: "Mescola Carte",
        resetear_valores: "Resetta Valori",

        // Pannello statistiche
        tiempo: "Tempo",
        tiempo_restante: "Tempo Rim.",
        nivel_label: "Livello",
        vidas_label: "Vite",
        puntos: "Punti",
        victorias_label: "Vittorie",
        record: "Record",
        score: "Punteggio",
        derrotas: "Sconfitte",

        // Stati del gioco
        game_over: "Game Over!",
        ganaste: "Hai Vinto!",
        nuevo_record: "Nuovo Record!",
        victoria: "Vittoria!",

        // Modal Come Giocare
        como_jugar_titulo: "Come Giocare?",
        como_jugar_subtitulo: "Metti alla prova la tua memoria, accumula punti e mantieni le tue vite al sicuro!",
        como_jugar_paso1: "Gira le carte: Clicca su due carte per scoprire le icone nascoste sul tabellone.",
        como_jugar_paso2: "Fai coppie e guadagna vite: Ogni volta che trovi una coppia corretta, guadagnerai vite come ricompensa per continuare a giocare.",
        como_jugar_paso3: "Attenzione agli errori: Se le carte non corrispondono, perderai una vita. Inizi con 7 vite. Se le esaurisci, puoi guardare una breve pubblicità per recuperarle e continuare esattamente da dove eri.",
        como_jugar_paso4: "Obiettivo: Gira le carte due alla volta per trovare coppie identiche prima di esaurire le 7 vite.",
        cerrar: "Chiudi",

        // Modal Impostazioni
        ajustes_titulo: "Impostazioni",
        sonido: "Audio:",
        activado: "Attivo",
        silenciado: "Disattivo",
        modo: "Modalità:",
        dark: "Scura",
        light: "Chiara",
        animaciones: "Animazioni",
        animaciones_activadas: "Attivate",
        animaciones_desactivadas: "Disattivate",
        idioma: "Lingua",

        // Modal Sviluppatore
        desarrollador_titulo: "Sviluppatore",
        desarrollador_texto: "Ciao, sono Yampiero Mujica. Ho creato Memoria con amore usando HTML, CSS e JavaScript per farti passare del buon tempo allenando la tua memoria senza pubblicità fastidiose. Se ti piace il progetto e vuoi supportarmi per mantenerlo attivo, offrimi un caffè cliccando sulla tazzina",

        // Modal di sistema (Game Over)
        game_over_mensaje: "Peccato! Hai esaurito le vite.",
        ir_menu: "Vai al menu",
        reintentar_nivel: "Riprova Livello",
        sin_vidas_titulo: "Hai esaurito le vite!",
        sin_vidas_mensaje: "Cosa vuoi fare per continuare?",
        sin_vidas_mensaje_progreso: "Abbonati per mantenere il tuo livello, Score e record, e continuare da dove eri rimasto.",
        ver_anuncio: "🎬 Guarda pubblicità e recupera 7 vite (Continua partita)",
        ver_anuncio_texto: "Guarda pubblicità e salva i miei progressi",
        reiniciar_partida: "🔄 Ricomincia partita (Perdi progressi)",
        reiniciar_partida_texto: "Ricomincia partita (Perdi progressi)",

        // Modali di Successo / Vittoria
        victoria_mensaje: "Congratulazioni, hai completato il livello con successo!",
        siguiente_nivel: "Livello Successivo",
        progreso_salvado_titulo: "Progressi Salvati!",
        progreso_salvado_suscripcion: "Grazie per esserti abbonato. Hai 7 nuove vite e continuerai nella tua categoria attuale senza perdere il tuo Score o record.",
        progreso_salvado_anuncio: "Grazie per aver guardato la pubblicità. Hai 7 nuove vite e continui nella tua categoria attuale senza perdere il tuo Score o record.",
        continuar_jugando: "Continua a Giocare",
        anuncio_no_disponible_titulo: "Pubblicità non disponibile",
        anuncio_no_disponible_mensaje: "Impossibile caricare la pubblicità. Riprova più tardi.",

        // Messaggi di Livello
        categoria_superada_titolo: "Categoria Superata!",
        categoria_superada_mensaje: (cat, niv) => `Ben fatto! Ora vai alla Categoria ${cat} del Livello ${niv}.`,
        nivel2_desbloqueado_titulo: "Livello 2 Sbloccato!",
        nivel2_desbloqueado_mensaje: "Ora giochi contro il tempo! Ogni successo ti dà +1 vita e +5 secondi.",
        nivel3_desbloqueado_titulo: "Livello 3 Sbloccato!",
        nivel3_desbloqueado_mensaje: "Modalità Estrema! Non ci sono ricompense di tempo o vite. Dimostra quanto vali!",
        juego_completado_titulo: "Gioco Completato!",
        juego_completado_mensaje: "Hai superato tutti e 3 i livelli! Ricominci dal Livello 1.",
        siguiente_categoria: "Categoria Successiva",

        // Footer e altri
        invitar_cafe: "Offrimi un caffè",
        version: "2026 © | V 2.9",
        confirmar_borrar: "Cancellare tutta la cronologia e reimpostare i punteggi?",

        // PayPal
        cargando_paypal: "Caricamento di PayPal...",
        error_paypal_conexion: "Errore nel caricamento di PayPal. Riprova.",
        error_paypal_render: "Errore nel disegno del pulsante.",
        paypal_no_disponible_venezuela: "PayPal non è disponibile nella tua regione.",

        // Tooltips
        titulo_iniciar: "Inizia Gioco",
        titulo_revolver: "Mescola Carte",
        titulo_resetear: "Resetta Valori",
        titulo_volver: "Indietro",

        // Testi dinamici (funzioni)
        tiempo_record: (tiempo) => `Nuovo Record! Tempo: ${tiempo}s`,
        tiempo_victoria: (tiempo, puntos) => `Vittoria! Tempo: ${tiempo}s. Punti: ${puntos}`,
    },

    de: {
        // Hauptmenü
        jugar_ahora: "Jetzt Spielen",
        como_jugar: "Spielanleitung",
        ajustes: "Einstellungen",
        desarrollador: "Entwickler",
        salir: "Beenden",
        iniciar_sesion: "Anmelden",
        correo_electronico: "E-Mail-Adresse",
        contrasena_min: "Passwort (mind. 6 Zeichen)",
        nombre_usuario: "Benutzername (nur bei der Registrierung)",
        entrar: "Eintreten",
        no_tienes_cuenta: "Kein Konto?",
        registrate: "Registrieren",
        politica_privacidad: "Datenschutzrichtlinie",

        // Spielbildschirm
        iniciar_juego: "Spiel Starten",
        pausar: "Pause",
        reanudar: "Fortsetzen",
        revolver_cartas: "Karten Mischen",
        resetear_valores: "Werte Zurücksetzen",

        // Statistik-Panel
        tiempo: "Zeit",
        tiempo_restante: "Restzeit",
        nivel_label: "Ebene",
        vidas_label: "Leben",
        puntos: "Punkte",
        victorias_label: "Siege",
        record: "Rekord",
        score: "Punktzahl",
        derrotas: "Niederlagen",

        // Spielzustände
        game_over: "Game Over!",
        ganaste: "Du hast Gewonnen!",
        nuevo_record: "Neuer Rekord!",
        victoria: "Sieg!",

        // Modal Spielanleitung
        como_jugar_titulo: "Spielanleitung",
        como_jugar_subtitulo: "Teste dein Gedächtnis, sammle Treffer und schütze deine Leben!",
        como_jugar_paso1: "Karten umdrehen: Klicke auf zwei Karten, um die versteckten Symbole auf dem Brett aufzudecken.",
        como_jugar_paso2: "Paare finden und Leben verdienen: Jedes Mal, wenn du ein richtiges Paar findest, erhältst du Leben als Belohnung zum Weiterspielen.",
        como_jugar_paso3: "Vorsicht vor Fehlern: Wenn die Karten nicht übereinstimmen, verlierst du ein Leben. Du beginnst mit 7 Leben. Wenn du keine mehr hast, kannst du eine kurze Werbung ansehen, um sie wiederherzustellen und genau dort weiterzumachen.",
        como_jugar_paso4: "Ziel: Drehe zwei Karten gleichzeitig um, um identische Paare zu finden, bevor dir die 7 Leben ausgehen.",
        cerrar: "Schließen",

        // Modal Einstellungen
        ajustes_titulo: "Einstellungen",
        sonido: "Ton:",
        activado: "Ein",
        silenciado: "Aus",
        modo: "Modus:",
        dark: "Dunkel",
        light: "Hell",
        animaciones: "Animationen",
        animaciones_activadas: "Aktiviert",
        animaciones_desactivadas: "Deaktiviert",
        idioma: "Sprache",

        // Modal Entwickler
        desarrollador_titulo: "Entwickler",
        desarrollador_texto: "Hallo, ich bin Yampiero Mujica. Ich habe Memoria mit Liebe mit HTML, CSS und JavaScript erstellt, damit du eine gute Zeit damit verbringen kannst, dein Gedächtnis ohne nervige Werbung zu trainieren. Wenn dir das Projekt gefällt und du mich unterstützen möchtest, es aktiv zu halten, lade mich auf einen Kaffee ein, indem du auf die Tasse klickst",

        // System-Modal (Game Over)
        game_over_mensaje: "Schade! Du hast keine Leben mehr.",
        ir_menu: "Zum Menü",
        reintentar_nivel: "Level Wiederholen",
        sin_vidas_titulo: "Du hast keine Leben mehr!",
        sin_vidas_mensaje: "Was möchtest du tun, um fortzufahren?",
        sin_vidas_mensaje_progreso: "Abonniere, um dein Level, deinen Score und Rekord zu behalten und dort weiterzumachen, wo du aufgehört hast.",
        ver_anuncio: "🎬 Werbung ansehen und 7 Leben wiederherstellen (Spiel fortsetzen)",
        ver_anuncio_texto: "Werbung ansehen und Fortschritt speichern",
        reiniciar_partida: "🔄 Spiel neu starten (Fortschritt verlieren)",
        reiniciar_partida_texto: "Spiel neu starten (Fortschritt verlieren)",

        // Erfolgs- / Sieges-Modale
        victoria_mensaje: "Herzlichen Glückwunsch, du hast das Level erfolgreich abgeschlossen!",
        siguiente_nivel: "Nächstes Level",
        progreso_salvado_titulo: "Fortschritt Gespeichert!",
        progreso_salvado_suscripcion: "Danke für dein Abonnement. Du hast 7 neue Leben und machst in deiner aktuellen Kategorie weiter, ohne deinen Score oder Rekord zu verlieren.",
        progreso_salvado_anuncio: "Danke, dass du die Werbung angesehen hast. Du hast 7 neue Leben und machst in deiner aktuellen Kategorie weiter, ohne deinen Score oder Rekord zu verlieren.",
        continuar_jugando: "Weiterspielen",
        anuncio_no_disponible_titulo: "Werbung nicht verfügbar",
        anuncio_no_disponible_mensaje: "Die Werbung konnte nicht geladen werden. Bitte versuche es später erneut.",

        // Level-Nachrichten
        categoria_superada_titulo: "Kategorie Geschafft!",
        categoria_superada_mensaje: (cat, niv) => `Gut gemacht! Du gehst jetzt zu Kategorie ${cat} von Level ${niv}.`,
        nivel2_desbloqueado_titulo: "Level 2 Freigeschaltet!",
        nivel2_desbloqueado_mensaje: "Jetzt spielst du gegen die Uhr! Jeder Treffer gibt dir +1 Leben und +5 Sekunden.",
        nivel3_desbloqueado_titulo: "Level 3 Freigeschaltet!",
        nivel3_desbloqueado_mensaje: "Extrem-Modus! Es gibt keine Zeit- oder Lebensbelohnungen. Zeig, was du drauf hast!",
        juego_completado_titulo: "Spiel Abgeschlossen!",
        juego_completado_mensaje: "Du hast alle 3 Level geschafft! Du beginnst wieder bei Level 1.",
        siguiente_categoria: "Nächste Kategorie",

        // Footer und Andere
        invitar_cafe: "Lade mich auf einen Kaffee ein",
        version: "2026 © | V 2.9",
        confirmar_borrar: "Gesamten Verlauf löschen und Punktzahlen zurücksetzen?",

        // PayPal
        cargando_paypal: "PayPal wird geladen...",
        error_paypal_conexion: "Fehler beim Laden von PayPal. Versuche es erneut.",
        error_paypal_render: "Fehler beim Zeichnen der Schaltfläche.",
        paypal_no_disponible_venezuela: "PayPal ist in deiner Region nicht verfügbar.",

        // Tooltips
        titulo_iniciar: "Spiel Starten",
        titulo_revolver: "Karten Mischen",
        titulo_resetear: "Werte Zurücksetzen",
        titulo_volver: "Zurück",

        // Dynamische Texte (Funktionen)
        tiempo_record: (tiempo) => `Neuer Rekord! Zeit: ${tiempo}s`,
        tiempo_victoria: (tiempo, puntos) => `Sieg! Zeit: ${tiempo}s. Punkte: ${puntos}`,
    },

    ar: {
        // القائمة الرئيسية
        jugar_ahora: "العب الآن",
        como_jugar: "كيف تلعب؟",
        ajustes: "الإعدادات",
        desarrollador: "المطور",
        salir: "خروج",
        iniciar_sesion: "تسجيل الدخول",
        correo_electronico: "البريد الإلكتروني",
        contrasena_min: "كلمة المرور (6 أحرف على الأقل)",
        nombre_usuario: "اسم المستخدم (فقط عند التسجيل)",
        entrar: "دخول",
        no_tienes_cuenta: "ليس لديك حساب؟",
        registrate: "سجل",
        politica_privacidad: "سياسة الخصوصية",

        // شاشة اللعبة
        iniciar_juego: "ابدأ اللعبة",
        pausar: "إيقاف مؤقت",
        reanudar: "استئناف",
        revolver_cartas: "خلط البطاقات",
        resetear_valores: "إعادة تعيين القيم",

        // لوحة الإحصائيات
        tiempo: "الوقت",
        tiempo_restante: "الوقت المتبقي",
        nivel_label: "المستوى",
        vidas_label: "الأرواح",
        puntos: "النقاط",
        victorias_label: "الانتصارات",
        record: "الرقم القياسي",
        score: "النتيجة",
        derrotas: "الهزائم",

        // حالات اللعبة
        game_over: "انتهت اللعبة!",
        ganaste: "لقد فزت!",
        nuevo_record: "رقم قياسي جديد!",
        victoria: "انتصار!",

        // Modal كيف تلعب
        como_jugar_titulo: "كيف تلعب؟",
        como_jugar_subtitulo: "اختبر ذاكرتك، واجمع النقاط وحافظ على أرواحك بأمان!",
        como_jugar_paso1: "اقلب البطاقات: انقر على بطاقتين لاكتشاف الأيقونات المخفية على اللوح.",
        como_jugar_paso2: "كون أزواجًا واربح أرواحًا: في كل مرة تجد فيها زوجًا صحيحًا، ستربح أرواحًا كمكافأة لمواصلة اللعب.",
        como_jugar_paso3: "احذر من الأخطاء: إذا لم تتطابق البطاقات، ستفقد روحًا. تبدأ بـ 7 أرواح. إذا نفدت، يمكنك مشاهدة إعلان سريع لاستعادتها والمتابعة من حيث توقفت بالضبط.",
        como_jugar_paso4: "الهدف: اقلب البطاقات اثنتين في كل مرة للعثور على أزواج متطابقة قبل أن تنفد أرواحك السبعة.",
        cerrar: "إغلاق",

        // Modal الإعدادات
        ajustes_titulo: "الإعدادات",
        sonido: "الصوت:",
        activado: "مفعل",
        silenciado: "مكتوم",
        modo: "الوضع:",
        dark: "داكن",
        light: "فاتح",
        animaciones: "الحركات",
        animaciones_activadas: "مفعلة",
        animaciones_desactivadas: "معطلة",
        idioma: "اللغة",

        // Modal المطور
        desarrollador_titulo: "المطور",
        desarrollador_texto: "مرحبًا، أنا يامبيرو موخيكا. لقد صنعت لعبة الذاكرة بحب باستخدام HTML وCSS وJavaScript لتقضي وقتًا ممتعًا في تدريب ذاكرتك بدون إعلانات مزعجة. إذا أعجبك المشروع وتريد دعمي لإبقائه نشطًا، ادعمني بفنجان قهوة بالضغط على الفنجان",

        // Modal النظام (Game Over)
        game_over_mensaje: "للأسف! لقد نفدت أرواحك.",
        ir_menu: "الذهاب إلى القائمة",
        reintentar_nivel: "إعادة المحاولة",
        sin_vidas_titulo: "لقد نفدت أرواحك!",
        sin_vidas_mensaje: "ماذا تريد أن تفعل للمتابعة؟",
        sin_vidas_mensaje_progreso: "اشترك للحفاظ على مستواك ونتيجتك ورقمك القياسي، والمتابعة من حيث توقفت.",
        ver_anuncio: "🎬 مشاهدة إعلان واستعادة 7 أرواح (متابعة اللعبة)",
        ver_anuncio_texto: "مشاهدة إعلان وحفظ تقدمي",
        reiniciar_partida: "🔄 إعادة بدء اللعبة (فقدان التقدم)",
        reiniciar_partida_texto: "إعادة بدء اللعبة (فقدان التقدم)",

        // Modals النجاح / النصر
        victoria_mensaje: "تهانينا، لقد أكملت المستوى بنجاح!",
        siguiente_nivel: "المستوى التالي",
        progreso_salvado_titulo: "تم حفظ التقدم!",
        progreso_salvado_suscripcion: "شكرًا لاشتراكك. لديك 7 أرواح جديدة وستستمر في فئتك الحالية دون فقدان نتيجتك أو رقمك القياسي.",
        progreso_salvado_anuncio: "شكرًا لمشاهدة الإعلان. لديك 7 أرواح جديدة وتستمر في فئتك الحالية دون فقدان نتيجتك أو رقمك القياسي.",
        continuar_jugando: "متابعة اللعب",
        anuncio_no_disponible_titulo: "الإعلان غير متوفر",
        anuncio_no_disponible_mensaje: "تعذر تحميل الإعلان. يرجى المحاولة لاحقًا.",

        // رسائل المستوى
        categoria_superada_titulo: "تم اجتياز الفئة!",
        categoria_superada_mensaje: (cat, niv) => `أحسنت! الآن تنتقل إلى الفئة ${cat} من المستوى ${niv}.`,
        nivel2_desbloqueado_titulo: "تم فتح المستوى 2!",
        nivel2_desbloqueado_mensaje: "الآن تلعب ضد الساعة! كل نجاح يمنحك +1 حياة و +5 ثوانٍ.",
        nivel3_desbloqueado_titulo: "تم فتح المستوى 3!",
        nivel3_desbloqueado_mensaje: "الوضع المتطرف! لا توجد مكافآت للوقت أو الأرواح. أظهر ما تستحقه!",
        juego_completado_titulo: "تم إكمال اللعبة!",
        juego_completado_mensaje: "لقد هزمت جميع المستويات الثلاثة! تبدأ من المستوى 1.",
        siguiente_categoria: "الفئة التالية",

        // التذييل وأخرى
        invitar_cafe: "ادعمني بفنجان قهوة",
        version: "2026 © | V 2.9",
        confirmar_borrar: "مسح كل السجل وإعادة تعيين النتائج؟",

        // PayPal
        cargando_paypal: "جاري تحميل PayPal...",
        error_paypal_conexion: "خطأ في تحميل PayPal. حاول مرة أخرى.",
        error_paypal_render: "خطأ في رسم الزر.",
        paypal_no_disponible_venezuela: "PayPal غير متوفر في منطقتك.",

        // Tooltips
        titulo_iniciar: "ابدأ اللعبة",
        titulo_revolver: "خلط البطاقات",
        titulo_resetear: "إعادة تعيين القيم",
        titulo_volver: "رجوع",

        // نصوص ديناميكية (دوال)
        tiempo_record: (tiempo) => `رقم قياسي جديد! الوقت: ${tiempo} ثانية`,
        tiempo_victoria: (tiempo, puntos) => `انتصار! الوقت: ${tiempo} ثانية. النقاط: ${puntos}`,
    },

    ja: {
        // メインメニュー
        jugar_ahora: "今すぐプレイ",
        como_jugar: "遊び方",
        ajustes: "設定",
        desarrollador: "開発者",
        salir: "終了",
        iniciar_sesion: "ログイン",
        correo_electronico: "メールアドレス",
        contrasena_min: "パスワード（6文字以上）",
        nombre_usuario: "ユーザー名（登録時のみ）",
        entrar: "入る",
        no_tienes_cuenta: "アカウントをお持ちでないですか？",
        registrate: "登録する",
        politica_privacidad: "プライバシーポリシー",

        // ゲーム画面
        iniciar_juego: "ゲーム開始",
        pausar: "一時停止",
        reanudar: "再開",
        revolver_cartas: "カードをシャッフル",
        resetear_valores: "値をリセット",

        // 統計パネル
        tiempo: "時間",
        tiempo_restante: "残り時間",
        nivel_label: "レベル",
        vidas_label: "ライフ",
        puntos: "ポイント",
        victorias_label: "勝利",
        record: "記録",
        score: "スコア",
        derrotas: "敗北",

        // ゲーム状態
        game_over: "ゲームオーバー!",
        ganaste: "あなたの勝ち!",
        nuevo_record: "新記録!",
        victoria: "勝利!",

        // 遊び方モーダル
        como_jugar_titulo: "遊び方",
        como_jugar_subtitulo: "記憶力をテストして、ポイントを貯めて、ライフを守ろう!",
        como_jugar_paso1: "カードをめくる: 2枚のカードをクリックして、ボードに隠されたアイコンを見つけよう。",
        como_jugar_paso2: "ペアを作ってライフを獲得: 正しいペアを見つけるたびに、ライフを獲得してゲームを続けられます。",
        como_jugar_paso3: "ミスに注意: カードが一致しないと、ライフを1つ失います。最初は7つのライフがあります。なくなったら、短い広告を見て回復し、続きから再開できます。",
        como_jugar_paso4: "目的: 7つのライフがなくなる前に、2枚ずつカードをめくって同じペアを見つけよう。",
        cerrar: "閉じる",

        // 設定モーダル
        ajustes_titulo: "設定",
        sonido: "サウンド:",
        activado: "オン",
        silenciado: "オフ",
        modo: "モード:",
        dark: "ダーク",
        light: "ライト",
        animaciones: "アニメーション",
        animaciones_activadas: "有効",
        animaciones_desactivadas: "無効",
        idioma: "言語",

        // 開発者モーダル
        desarrollador_titulo: "開発者",
        desarrollador_texto: "こんにちは、ヤンピエロ・ムヒカです。HTML、CSS、JavaScriptを使って、迷惑な広告なしで記憶力をトレーニングできるよう、心を込めてMemoriaを作りました。プロジェクトを気に入って、継続的にサポートしたい場合は、カップをクリックしてコーヒーをおごってください",

        // システムモーダル (ゲームオーバー)
        game_over_mensaje: "残念! ライフがなくなりました。",
        ir_menu: "メニューへ",
        reintentar_nivel: "レベルを再挑戦",
        sin_vidas_titulo: "ライフがなくなりました!",
        sin_vidas_mensaje: "続行するにはどうしますか?",
        sin_vidas_mensaje_progreso: "サブスクライブしてレベル、スコア、記録を維持し、中断したところから続行します。",
        ver_anuncio: "🎬 広告を見て7ライフ回復 (ゲームを続ける)",
        ver_anuncio_texto: "広告を見て進行状況を保存",
        reiniciar_partida: "🔄 ゲームを再開 (進行状況を失う)",
        reiniciar_partida_texto: "ゲームを再開 (進行状況を失う)",

        // 成功 / 勝利モーダル
        victoria_mensaje: "おめでとうございます、レベルをクリアしました!",
        siguiente_nivel: "次のレベル",
        progreso_salvado_titulo: "進行状況が保存されました!",
        progreso_salvado_suscripcion: "ご購読ありがとうございます。7つの新しいライフがあり、スコアや記録を失うことなく現在のカテゴリを続行します。",
        progreso_salvado_anuncio: "広告をご覧いただきありがとうございます。7つの新しいライフがあり、スコアや記録を失うことなく現在のカテゴリを続行します。",
        continuar_jugando: "プレイを続ける",
        anuncio_no_disponible_titulo: "広告は利用できません",
        anuncio_no_disponible_mensaje: "広告を読み込めませんでした。後でもう一度お試しください。",

        // レベルメッセージ
        categoria_superada_titulo: "カテゴリクリア!",
        categoria_superada_mensaje: (cat, niv) => `よくやった! 今、レベル${niv}のカテゴリ${cat}に進みます。`,
        nivel2_desbloqueado_titulo: "レベル2が解除されました!",
        nivel2_desbloqueado_mensaje: "今、あなたは時計と競います! 成功するたびに+1ライフと+5秒が与えられます。",
        nivel3_desbloqueado_titulo: "レベル3が解除されました!",
        nivel3_desbloqueado_mensaje: "エクストリームモード! 時間やライフの報酬はありません。あなたの価値を見せてください!",
        juego_completado_titulo: "ゲームクリア!",
        juego_completado_mensaje: "3つのレベルすべてをクリアしました! レベル1からやり直します。",
        siguiente_categoria: "次のカテゴリ",

        // フッターとその他
        invitar_cafe: "コーヒーをおごる",
        version: "2026 © | V 2.9",
        confirmar_borrar: "履歴をすべて削除してスコアをリセットしますか?",

        // PayPal
        cargando_paypal: "PayPalを読み込み中...",
        error_paypal_conexion: "PayPalの読み込みエラー。もう一度お試しください。",
        error_paypal_render: "ボタンの描画エラー。",
        paypal_no_disponible_venezuela: "PayPalはお住まいの地域では利用できません。",

        // ツールチップ
        titulo_iniciar: "ゲーム開始",
        titulo_revolver: "カードをシャッフル",
        titulo_resetear: "値をリセット",
        titulo_volver: "戻る",

        // 動的テキスト (関数)
        tiempo_record: (tiempo) => `新記録! 時間: ${tiempo}秒`,
        tiempo_victoria: (tiempo, puntos) => `勝利! 時間: ${tiempo}秒. ポイント: ${puntos}`,
    },

    zh: {
        // 主菜单
        jugar_ahora: "开始游戏",
        como_jugar: "游戏说明",
        ajustes: "设置",
        desarrollador: "开发者",
        salir: "退出",
        iniciar_sesion: "登录",
        correo_electronico: "电子邮件地址",
        contrasena_min: "密码（至少6个字符）",
        nombre_usuario: "用户名（仅限注册时）",
        entrar: "进入",
        no_tienes_cuenta: "还没有账户？",
        registrate: "注册",
        politica_privacidad: "隐私政策",

        // 游戏画面
        iniciar_juego: "开始游戏",
        pausar: "暂停",
        reanudar: "继续",
        revolver_cartas: "洗牌",
        resetear_valores: "重置数值",

        // 统计面板
        tiempo: "时间",
        tiempo_restante: "剩余时间",
        nivel_label: "等级",
        vidas_label: "生命",
        puntos: "分数",
        victorias_label: "胜利",
        record: "记录",
        score: "总分",
        derrotas: "失败",

        // 游戏状态
        game_over: "游戏结束!",
        ganaste: "你赢了!",
        nuevo_record: "新纪录!",
        victoria: "胜利!",

        // 游戏说明模态框
        como_jugar_titulo: "游戏说明",
        como_jugar_subtitulo: "测试你的记忆力，积累分数，保护你的生命!",
        como_jugar_paso1: "翻牌：点击两张卡片，发现板上隐藏的图标。",
        como_jugar_paso2: "配对并赢得生命：每次找到正确的配对，你将获得生命作为继续游戏的奖励。",
        como_jugar_paso3: "小心错误：如果卡片不匹配，你将失去一条生命。你从7条生命开始。如果用完了，可以观看短视频广告来恢复并从之前的位置继续。",
        como_jugar_paso4: "目标：在7条生命用完之前，一次翻两张牌，找到相同的配对。",
        cerrar: "关闭",

        // 设置模态框
        ajustes_titulo: "设置",
        sonido: "声音:",
        activado: "开启",
        silenciado: "关闭",
        modo: "模式:",
        dark: "深色",
        light: "浅色",
        animaciones: "动画",
        animaciones_activadas: "已开启",
        animaciones_desactivadas: "已关闭",
        idioma: "语言",

        // 开发者模态框
        desarrollador_titulo: "开发者",
        desarrollador_texto: "你好，我是Yampiero Mujica。我用心使用HTML、CSS和JavaScript创建了Memoria，让你可以在没有烦人广告的情况下愉快地训练记忆力。如果你喜欢这个项目并想支持我保持它活跃，请点击杯子请我喝杯咖啡",

        // 系统模态框 (游戏结束)
        game_over_mensaje: "太可惜了! 你的生命用完了。",
        ir_menu: "返回菜单",
        reintentar_nivel: "重试关卡",
        sin_vidas_titulo: "你的生命用完了!",
        sin_vidas_mensaje: "你想怎么做来继续?",
        sin_vidas_mensaje_progreso: "订阅以保留你的等级、分数和记录，并从你离开的地方继续。",
        ver_anuncio: "🎬 观看广告恢复7条生命 (继续游戏)",
        ver_anuncio_texto: "观看广告并保存我的进度",
        reiniciar_partida: "🔄 重新开始游戏 (失去进度)",
        reiniciar_partida_texto: "重新开始游戏 (失去进度)",

        // 成功/胜利模态框
        victoria_mensaje: "恭喜你，你成功完成了关卡!",
        siguiente_nivel: "下一关",
        progreso_salvado_titulo: "进度已保存!",
        progreso_salvado_suscripcion: "感谢您的订阅。您有7条新生命，并将在当前类别中继续，而不会丢失您的分数或记录。",
        progreso_salvado_anuncio: "感谢您观看广告。您有7条新生命，并在当前类别中继续，而不会丢失您的分数或记录。",
        continuar_jugando: "继续游戏",
        anuncio_no_disponible_titulo: "广告不可用",
        anuncio_no_disponible_mensaje: "无法加载广告。请稍后再试。",

        // 关卡消息
        categoria_superada_titulo: "类别通关!",
        categoria_superada_mensaje: (cat, niv) => `干得好! 现在你进入等级 ${niv} 的类别 ${cat}。`,
        nivel2_desbloqueado_titulo: "等级 2 解锁!",
        nivel2_desbloqueado_mensaje: "现在你要与时间赛跑! 每次成功都会给你 +1 生命和 +5 秒。",
        nivel3_desbloqueado_titulo: "等级 3 解锁!",
        nivel3_desbloqueado_mensaje: "极限模式! 没有时间或生命奖励。展示你的价值!",
        juego_completado_titulo: "游戏完成!",
        juego_completado_mensaje: "你已击败所有 3 个等级! 从等级 1 重新开始。",
        siguiente_categoria: "下一个类别",

        // 页脚和其他
        invitar_cafe: "请我喝杯咖啡",
        version: "2026 © | V 2.9",
        confirmar_borrar: "删除所有历史记录并重置分数?",

        // PayPal
        cargando_paypal: "正在加载 PayPal...",
        error_paypal_conexion: "加载 PayPal 时出错。请重试。",
        error_paypal_render: "绘制按钮时出错。",
        paypal_no_disponible_venezuela: "PayPal 在您所在的地区不可用。",

        // 工具提示
        titulo_iniciar: "开始游戏",
        titulo_revolver: "洗牌",
        titulo_resetear: "重置数值",
        titulo_volver: "返回",

        // 动态文本 (函数)
        tiempo_record: (tiempo) => `新纪录! 时间: ${tiempo}秒`,
        tiempo_victoria: (tiempo, puntos) => `胜利! 时间: ${tiempo}秒. 分数: ${puntos}`,
    },

    ru: {
        // Главное меню
        jugar_ahora: "Играть Сейчас",
        como_jugar: "Как Играть?",
        ajustes: "Настройки",
        desarrollador: "Разработчик",
        salir: "Выйти",
        iniciar_sesion: "Вход",
        correo_electronico: "Электронная почта",
        contrasena_min: "Пароль (мин. 6 символов)",
        nombre_usuario: "Имя пользователя (только при регистрации)",
        entrar: "Войти",
        no_tienes_cuenta: "Нет аккаунта?",
        registrate: "Зарегистрироваться",
        politica_privacidad: "Политика конфиденциальности",

        // Игровой экран
        iniciar_juego: "Начать Игру",
        pausar: "Пауза",
        reanudar: "Продолжить",
        revolver_cartas: "Перемешать Карты",
        resetear_valores: "Сбросить Значения",

        // Панель статистики
        tiempo: "Время",
        tiempo_restante: "Ост. время",
        nivel_label: "Уровень",
        vidas_label: "Жизни",
        puntos: "Очки",
        victorias_label: "Победы",
        record: "Рекорд",
        score: "Счёт",
        derrotas: "Поражения",

        // Состояния игры
        game_over: "Игра Окончена!",
        ganaste: "Вы Выиграли!",
        nuevo_record: "Новый Рекорд!",
        victoria: "Победа!",

        // Модальное окно Как Играть
        como_jugar_titulo: "Как Играть?",
        como_jugar_subtitulo: "Проверьте свою память, накапливайте очки и сохраняйте свои жизни!",
        como_jugar_paso1: "Переворачивайте карты: Нажмите на две карты, чтобы открыть скрытые значки на доске.",
        como_jugar_paso2: "Составляйте пары и зарабатывайте жизни: Каждый раз, когда вы находите правильную пару, вы получаете жизни в награду для продолжения игры.",
        como_jugar_paso3: "Остерегайтесь ошибок: Если карты не совпадают, вы теряете жизнь. Вы начинаете с 7 жизней. Если они закончатся, вы можете посмотреть короткую рекламу, чтобы восстановить их и продолжить именно с того места, где остановились.",
        como_jugar_paso4: "Цель: Переворачивайте по две карты за раз, чтобы найти одинаковые пары, пока не закончились 7 жизней.",
        cerrar: "Закрыть",

        // Модальное окно Настройки
        ajustes_titulo: "Настройки",
        sonido: "Звук:",
        activado: "Вкл",
        silenciado: "Выкл",
        modo: "Режим:",
        dark: "Тёмный",
        light: "Светлый",
        animaciones: "Анимации",
        animaciones_activadas: "Включены",
        animaciones_desactivadas: "Отключены",
        idioma: "Язык",

        // Модальное окно Разработчик
        desarrollador_titulo: "Разработчик",
        desarrollador_texto: "Привет, я Ямпьеро Мухика. Я создал Memoria с любовью, используя HTML, CSS и JavaScript, чтобы вы могли хорошо провести время, тренируя свою память без надоедливой рекламы. Если вам нравится проект и вы хотите поддержать меня, чтобы он оставался активным, угостите меня кофе, нажав на чашку",

        // Системное модальное окно (Game Over)
        game_over_mensaje: "Жаль! У вас закончились жизни.",
        ir_menu: "В меню",
        reintentar_nivel: "Повторить Уровень",
        sin_vidas_titulo: "У вас закончились жизни!",
        sin_vidas_mensaje: "Что вы хотите сделать, чтобы продолжить?",
        sin_vidas_mensaje_progreso: "Подпишитесь, чтобы сохранить свой уровень, счёт и рекорд, и продолжить с того места, где вы остановились.",
        ver_anuncio: "🎬 Посмотреть рекламу и восстановить 7 жизней (Продолжить игру)",
        ver_anuncio_texto: "Посмотреть рекламу и сохранить прогресс",
        reiniciar_partida: "🔄 Перезапустить игру (Потерять прогресс)",
        reiniciar_partida_texto: "Перезапустить игру (Потерять прогресс)",

        // Модальные окна успеха / победы
        victoria_mensaje: "Поздравляем, вы успешно завершили уровень!",
        siguiente_nivel: "Следующий Уровень",
        progreso_salvado_titulo: "Прогресс Сохранён!",
        progreso_salvado_suscripcion: "Спасибо за подписку. У вас есть 7 новых жизней, и вы продолжите в своей текущей категории, не теряя свой счёт или рекорд.",
        progreso_salvado_anuncio: "Спасибо за просмотр рекламы. У вас есть 7 новых жизней, и вы продолжаете в своей текущей категории, не теряя свой счёт или рекорд.",
        continuar_jugando: "Продолжить Игру",
        anuncio_no_disponible_titulo: "Реклама недоступна",
        anuncio_no_disponible_mensaje: "Не удалось загрузить рекламу. Повторите попытку позже.",

        // Сообщения об уровнях
        categoria_superada_titulo: "Категория Пройдена!",
        categoria_superada_mensaje: (cat, niv) => `Молодец! Теперь вы переходите к Категории ${cat} Уровня ${niv}.`,
        nivel2_desbloqueado_titulo: "Уровень 2 Разблокирован!",
        nivel2_desbloqueado_mensaje: "Теперь вы играете против часов! Каждое попадание даёт вам +1 жизнь и +5 секунд.",
        nivel3_desbloqueado_titulo: "Уровень 3 Разблокирован!",
        nivel3_desbloqueado_mensaje: "Экстремальный Режим! Нет наград за время или жизни. Покажите, на что вы способны!",
        juego_completado_titulo: "Игра Завершена!",
        juego_completado_mensaje: "Вы победили все 3 уровня! Вы начинаете заново с Уровня 1.",
        siguiente_categoria: "Следующая Категория",

        // Подвал и прочее
        invitar_cafe: "Угостить меня кофе",
        version: "2026 © | V 2.9",
        confirmar_borrar: "Удалить всю историю и сбросить счета?",

        // PayPal
        cargando_paypal: "Загрузка PayPal...",
        error_paypal_conexion: "Ошибка загрузки PayPal. Попробуйте снова.",
        error_paypal_render: "Ошибка отрисовки кнопки.",
        paypal_no_disponible_venezuela: "PayPal недоступен в вашем регионе.",

        // Подсказки
        titulo_iniciar: "Начать Игру",
        titulo_revolver: "Перемешать Карты",
        titulo_resetear: "Сбросить Значения",
        titulo_volver: "Назад",

        // Динамические тексты (функции)
        tiempo_record: (tiempo) => `Новый Рекорд! Время: ${tiempo}с`,
        tiempo_victoria: (tiempo, puntos) => `Победа! Время: ${tiempo}с. Очки: ${puntos}`,
    },

    he: {
        // תפריט ראשי
        jugar_ahora: "שחק עכשיו",
        como_jugar: "איך לשחק?",
        ajustes: "הגדרות",
        desarrollador: "מפתח",
        salir: "יציאה",
        iniciar_sesion: "התחברות",
        correo_electronico: "כתובת אימייל",
        contrasena_min: "סיסמה (לפחות 6 תווים)",
        nombre_usuario: "שם משתמש (רק בהרשמה)",
        entrar: "היכנס",
        no_tienes_cuenta: "אין לך חשבון?",
        registrate: "הירשם",
        politica_privacidad: "מדיניות פרטיות",

        // מסך משחק
        iniciar_juego: "התחל משחק",
        pausar: "השהה",
        reanudar: "המשך",
        revolver_cartas: "ערבב קלפים",
        resetear_valores: "אפס ערכים",

        // לוח סטטיסטיקות
        tiempo: "זמן",
        tiempo_restante: "זמן נותר",
        nivel_label: "רמה",
        vidas_label: "חיים",
        puntos: "נקודות",
        victorias_label: "ניצחונות",
        record: "שיא",
        score: "ניקוד",
        derrotas: "הפסדים",

        // מצבי משחק
        game_over: "המשחק נגמר!",
        ganaste: "ניצחת!",
        nuevo_record: "שיא חדש!",
        victoria: "ניצחון!",

        // חלונית איך לשחק
        como_jugar_titulo: "איך לשחק?",
        como_jugar_subtitulo: "בחן את הזיכרון שלך, צבור נקודות ושמור על חייך!",
        como_jugar_paso1: "הפוך קלפים: לחץ על שני קלפים כדי לגלות את הסמלים המוסתרים בלוח.",
        como_jugar_paso2: "צור זוגות והרווח חיים: בכל פעם שתמצא זוג נכון, תרוויח חיים כפרס להמשך המשחק.",
        como_jugar_paso3: "היזהר מטעויות: אם הקלפים אינם תואמים, תאבד חיים. אתה מתחיל עם 7 חיים. אם נגמרים לך, תוכל לצפות בפרסומת קצרה כדי לשחזר אותם ולהמשיך בדיוק מאיפה שהפסקת.",
        como_jugar_paso4: "מטרה: הפוך קלפים שניים בכל פעם כדי למצוא זוגות זהים לפני שייגמרו לך 7 החיים.",
        cerrar: "סגור",

        // חלונית הגדרות
        ajustes_titulo: "הגדרות",
        sonido: "צליל:",
        activado: "פעיל",
        silenciado: "מושתק",
        modo: "מצב:",
        dark: "כהה",
        light: "בהיר",
        animaciones: "אנימציות",
        animaciones_activadas: "מופעלות",
        animaciones_desactivadas: "מכובות",
        idioma: "שפה",

        // חלונית מפתח
        desarrollador_titulo: "מפתח",
        desarrollador_texto: "שלום, אני יאמפיירו מוחיקה. יצרתי את Memoria באהבה באמצעות HTML, CSS ו-JavaScript כדי שתוכל לבלות זמן טוב באימון הזיכרון שלך ללא פרסומות מעצבנות. אם אתה אוהב את הפרויקט ורוצה לתמוך בי כדי להשאיר אותו פעיל, תזמין אותי לקפה בלחיצה על הספל",

        // חלונית מערכת (Game Over)
        game_over_mensaje: "חבל! נגמרו לך החיים.",
        ir_menu: "עבור לתפריט",
        reintentar_nivel: "נסה שוב",
        sin_vidas_titulo: "נגמרו לך החיים!",
        sin_vidas_mensaje: "מה תרצה לעשות כדי להמשיך?",
        sin_vidas_mensaje_progreso: "הירשם כדי לשמור על הרמה, הניקוד והשיא שלך, ולהמשיך מהמקום שבו הפסקת.",
        ver_anuncio: "🎬 צפה בפרסומת ושחזר 7 חיים (המשך משחק)",
        ver_anuncio_texto: "צפה בפרסומת ושמור את ההתקדמות שלי",
        reiniciar_partida: "🔄 הפעל מחדש משחק (אובדן התקדמות)",
        reiniciar_partida_texto: "הפעל מחדש משחק (אובדן התקדמות)",

        // חלוניות הצלחה / ניצחון
        victoria_mensaje: "ברכות, השלמת את השלב בהצלחה!",
        siguiente_nivel: "שלב הבא",
        progreso_salvado_titulo: "ההתקדמות נשמרה!",
        progreso_salvado_suscripcion: "תודה על ההרשמה. יש לך 7 חיים חדשים ותמשיך בקטגוריה הנוכחית שלך מבלי לאבד את הניקוד או השיא שלך.",
        progreso_salvado_anuncio: "תודה שצפית בפרסומת. יש לך 7 חיים חדשים ואתה ממשיך בקטגוריה הנוכחית שלך מבלי לאבד את הניקוד או השיא שלך.",
        continuar_jugando: "המשך לשחק",
        anuncio_no_disponible_titulo: "הפרסומת אינה זמינה",
        anuncio_no_disponible_mensaje: "לא ניתן היה לטעון את הפרסומת. נסה שוב מאוחר יותר.",

        // הודעות שלב
        categoria_superada_titulo: "הקטגוריה הושלמה!",
        categoria_superada_mensaje: (cat, niv) => `כל הכבוד! עכשיו אתה עובר לקטגוריה ${cat} של שלב ${niv}.`,
        nivel2_desbloqueado_titulo: "שלב 2 נפתח!",
        nivel2_desbloqueado_mensaje: "עכשיו אתה משחק נגד השעון! כל הצלחה נותנת לך +1 חיים ו-+5 שניות.",
        nivel3_desbloqueado_titulo: "שלב 3 נפתח!",
        nivel3_desbloqueado_mensaje: "מצב קיצוני! אין פרסים על זמן או חיים. הראה מה אתה שווה!",
        juego_completado_titulo: "המשחק הושלם!",
        juego_completado_mensaje: "ניצחת את כל 3 השלבים! אתה מתחיל מחדש משלב 1.",
        siguiente_categoria: "הקטגוריה הבאה",

        // תחתית ונוספים
        invitar_cafe: "הזמן אותי לקפה",
        version: "2026 © | V 2.9",
        confirmar_borrar: "למחוק את כל ההיסטוריה ולאפס ניקודים?",

        // PayPal
        cargando_paypal: "טוען את PayPal...",
        error_paypal_conexion: "שגיאה בטעינת PayPal. נסה שוב.",
        error_paypal_render: "שגיאה בציור הכפתור.",
        paypal_no_disponible_venezuela: "PayPal אינו זמין באזורך.",

        // Tooltips
        titulo_iniciar: "התחל משחק",
        titulo_revolver: "ערבב קלפים",
        titulo_resetear: "אפס ערכים",
        titulo_volver: "חזור",

        // טקסטים דינמיים (פונקציות)
        tiempo_record: (tiempo) => `שיא חדש! זמן: ${tiempo} שניות`,
        tiempo_victoria: (tiempo, puntos) => `ניצחון! זמן: ${tiempo} שניות. נקודות: ${puntos}`,
    },

    gn: { // Guaraní
        // Menú principal - Tenda ñepyrũ
        jugar_ahora: "Juga Ko'ág̃a",
        como_jugar: "Mba'éichapa Juga?",
        ajustes: "Mbohekoporã",
        desarrollador: "Apohára",
        salir: "Sẽ",
        iniciar_sesion: "Eike",
        correo_electronico: "Ñanduti veve",
        contrasena_min: "Ñe'ẽñemi (mín. 6 tai)",
        nombre_usuario: "Téra puruhára",
        entrar: "Eike",
        no_tienes_cuenta: "¿Ndererekói ne cuenta?",
        registrate: "Eñescribe",
        politica_privacidad: "Tekoñemi Purureko",

        // Pantalla de juego - Ta'anga ñembosarái
        iniciar_juego: "Ñepyrũ Ñembosarái",
        pausar: "Pytu'u",
        reanudar: "Joko'ỹ",
        revolver_cartas: "Kárta Mbojehe'a",
        resetear_valores: "Mbojehe'a Papapy",

        // Panel de estadísticas - Papapykuéra
        tiempo: "Ára",
        tiempo_restante: "Ára Oĩva",
        nivel_label: "Nivel",
        vidas_label: "Tekove",
        puntos: "Puntu",
        victorias_label: "Pu'aka",
        record: "Tuvicha",
        score: "Score",
        derrotas: "Ñehundí",

        // Estados del juego
        game_over: "Ñembosarái Opa!",
        ganaste: "Reñeha'ã!",
        nuevo_record: "Tuvicha Pyahu!",
        victoria: "Pu'aka!",

        // Modal Cómo Jugar
        como_jugar_titulo: "Mba'éichapa Juga?",
        como_jugar_subtitulo: "Eñeha'ã ne mandu'á rehe, embyaty ha eñangareko ne rekove rehe!",
        como_jugar_paso1: "Embojere kárta: Eikutu mokõi kártare reikuaa hag̃ua mba'épa oĩ kañyhápe.",
        como_jugar_paso2: "Ejapo joaju ha egana tekove: Opa jey rejuhúvo peteĩ joaju oĩporãva, reganáta tekove repu'akáramo rejuga jey.",
        como_jugar_paso3: "Eñangareko jejavy rehe: Umi kárta ndojojuhúiramo, reganáta peteĩ tekove. Reñepyrũ 7 tekove ndive. Opáramo, ikatu rehecha peteĩ ñemurã mbyky ha egana jey tekovekuéra ha reho mboyve gueteri.",
        como_jugar_paso4: "Objetivo: Embojere mokõi kárta rehecha hag̃ua joaju ojueheguáva 7 tekove ndaopái mboyve.",
        cerrar: "Mboty",

        // Modal Ajustes
        ajustes_titulo: "Mbohekoporã",
        sonido: "Pu:",
        activado: "Hendúva",
        silenciado: "Ikirirĩva",
        modo: "Modo:",
        dark: "Ñypytũ",
        light: "Tesape",
        animaciones: "Mýi",
        animaciones_activadas: "Oñemýiva",
        animaciones_desactivadas: "Nomýiriva",
        idioma: "Ñe'ẽ",

        // Modal Desarrollador
        desarrollador_titulo: "Apohára",
        desarrollador_texto: "Maitei, che Yampiero Mujica. Ajapo Memoria mborayhúpe HTML, CSS ha JavaScript rupive ikatu hag̃uáicha revy'a entrena nde mandu'á ãga ñemurã vai'ỹre. Iporãramo ndéve ko proyecto ha reipytyvõse chéve, eipay café peteĩve",

        // Modal sistema
        game_over_mensaje: "Vy'apá! Nderekovévéima tekove.",
        ir_menu: "Tenda ñepyrũme",
        reintentar_nivel: "Eñeha'ã jey",
        sin_vidas_titulo: "Nderekovévéima tekove!",
        sin_vidas_mensaje: "Mba'épa rejapose reho hag̃ua tenonde?",
        sin_vidas_mensaje_progreso: "Eñescribe reñongatu hag̃ua ne nivel, Score ha récord, ha reho hag̃ua mboyve gueteri.",
        ver_anuncio: "🎬 Ehecha ñemurã ha egana jey 7 tekove (Reho tenonde)",
        ver_anuncio_texto: "Ehecha ñemurã ha eñongatu che progreso",
        reiniciar_partida: "🔄 Eñepyrũ jey ñembosarái (Reho mboyve)",
        reiniciar_partida_texto: "Eñepyrũ jey ñembosarái (Reho mboyve)",

        // Modales de Éxito / Victoria
        victoria_mensaje: "Vy'apavẽ, remohu'ã porãite ko nivel!",
        siguiente_nivel: "Nivel Oseguíva",
        progreso_salvado_titulo: "¡Progreso Ñongatupyre!",
        progreso_salvado_suscripcion: "Aguyje eñescribire. Rekóta 7 tekove pyahu ha rehojeýta ne categoría ko'ág̃agua nderehechaukái mboyve ne Score térã récord.",
        progreso_salvado_anuncio: "Aguyje ehechare. Rekóta 7 tekove pyahu ha rehojeýta ne categoría ko'ág̃agua nderehechaukái mboyve ne Score térã récord.",
        continuar_jugando: "Joko'ỹ Juega",
        anuncio_no_disponible_titulo: "Ñemurã ndoikói",
        anuncio_no_disponible_mensaje: "Ndoikói ehepyme'ẽ hag̃ua ñemurã. Eñeha'ã jey.",
        
        // Mensajes de Niveles
        categoria_superada_titulo: "¡Categoría Ohasava'ekue!",
        categoria_superada_mensaje: (cat, niv) => `¡Iporã! Ko'ág̃a rehóta Categoría ${cat} Nivel ${niv}pe.`,
        nivel2_desbloqueado_titulo: "¡Nivel 2 Nderendái!",
        nivel2_desbloqueado_mensaje: "¡Ko'ág̃a rejuega relój rehe! Peteĩ acierto ome'ẽ ndéve +1 tekove ha +5 segundos.",
        nivel3_desbloqueado_titulo: "¡Nivel 3 Nderendái!",
        nivel3_desbloqueado_mensaje: "¡Modo Extremo! Ndaipóri recompensa ára térã tekove. ¡Ehechauka mba'épa reikuaa!",
        juego_completado_titulo: "¡Ñembosarái Opa!",
        juego_completado_mensaje: "¡Rehasava'ekue 3 nivel! Reñepyrũjey Nivel 1pe.",
        siguiente_categoria: "Categoría Oseguíva",

        // Footer y otros
        invitar_cafe: "Eipay café",
        version: "2026 © | V 2.9",
        confirmar_borrar: "Emboguete opaite tembiasakue ha embojevy papapykuéra?",
        
        // PayPal
        cargando_paypal: "PayPal Oñemyatyrõhína...",
        error_paypal_conexion: "Jejavy PayPal ojehupívo. Eñeha'ã jey.",
        error_paypal_render: "Jejavy botón ojejapóvo.",
        paypal_no_disponible_venezuela: "PayPal ndoikói nde regiónpe.",

        // Tooltips
        titulo_iniciar: "Ñepyrũ Ñembosarái",
        titulo_revolver: "Kárta Mbojehe'a",
        titulo_resetear: "Mbojehe'a Papapy",
        titulo_volver: "Jevy",

        // Textos dinámicos
        tiempo_record: (tiempo) => `Tuvicha Pyahu! Ára: ${tiempo}s`,
        tiempo_victoria: (tiempo, puntos) => `Pu'aka! Ára: ${tiempo}s. Puntu: ${puntos}`,
    },

    guc: { // Wayuunaiki
        // Menú principal
        jugar_ahora: "Jüküjainjachia",
        como_jugar: "¿Jamüshi Jüküjain?",
        ajustes: "Anaatirü",
        desarrollador: "Aashajaka",
        salir: "Jüpüle",
        iniciar_sesion: "E'itaanüin",
        correo_electronico: "Korreo",
        contrasena_min: "Kontraseña (6 yaa)",
        nombre_usuario: "A'yataashi",
        entrar: "E'itaa",
        no_tienes_cuenta: "¿Nnojotsü püküa cuenta?",
        registrate: "Eshajaa",
        politica_privacidad: "Política de Privacidad",

        // Pantalla de juego
        iniciar_juego: "Ajalajaa Jüküjain",
        pausar: "Jüpüla",
        reanudar: "Jütanü",
        revolver_cartas: "Jüchajünaa Karta",
        resetear_valores: "Jüpülaajünaa",

        // Panel de estadísticas
        tiempo: "Kara",
        tiempo_restante: "Kara Jüpüla",
        nivel_label: "Nivel",
        vidas_label: "Kakuuna",
        puntos: "Puntu",
        victorias_label: "Aalayaa",
        record: "Anüiki",
        score: "Score",
        derrotas: "Müliayaa",

        // Estados del juego
        game_over: "¡Jamaa Jüküjain!",
        ganaste: "¡Aalayaashi!",
        nuevo_record: "¡Anüiki Jekü!",
        victoria: "¡Aalayaa!",

        // Modal Cómo Jugar
        como_jugar_titulo: "¿Jamüshi Jüküjain?",
        como_jugar_subtitulo: "¡Aja'itaaka pünüiki, akumajaa puntu je müliain püküa!",
        como_jugar_paso1: "Jüchajünaa karta: Ajakütaa piama karta jüpüla jüchajünaa tü icono müliaka sulu'u.",
        como_jugar_paso2: "Akumajaa pareja je antiraa kakuuna: Wattamüin jüpüla antüin pareja anasü, antiraashi kakuuna jüpüla jüküjainjatüin.",
        como_jugar_paso3: "Müliashi jüpüla error: Nnojolüin jütüjüin karta, müshirüin pünülia kakuuna. Jüshajüin akatsa'a 7 kakuuna. Nnojolüinjee, püleejeerü wane anuncio jüpüla akumajünaajatü jukuwa'ipa.",
        como_jugar_paso4: "Objetivo: Jüchajünaa karta piama jüpüla antüin pareja jümüin jüpüla nnojoluinjachin 7 kakuuna.",
        cerrar: "Jüpütü",

        // Modal Ajustes
        ajustes_titulo: "Anaatirü",
        sonido: "Akuwai:",
        activado: "Jütanü",
        silenciado: "Jüpüla",
        modo: "Modo:",
        dark: "Jouutsü",
        light: "Jouchon",
        animaciones: "Jüküjain Animado",
        animaciones_activadas: "Jütanü",
        animaciones_desactivadas: "Jüpüla",
        idioma: "Anüiki",

        // Modal Desarrollador
        desarrollador_titulo: "Aashajaka",
        desarrollador_texto: "Jamiaa, taya Yampiero Mujica. Tajüin Memoria jümüin asakaa HTML, CSS je JavaScript jüpüla püleejeerü jüküjain pünüiki. Jüpüla pünekiire proyecto je püliitüinjatüin, pükaaliijüin café",

        // Modal sistema
        game_over_mensaje: "¡Aishii! Nnojolüin püküa kakuuna.",
        ir_menu: "Jüpüle menú",
        reintentar_nivel: "Jüküjain jekü",
        sin_vidas_titulo: "¡Nnojolüin püküa kakuuna!",
        sin_vidas_mensaje: "¿Kasa püleejeerü jüpüla jütanüin?",
        sin_vidas_mensaje_progreso: "E'itaanüin jüpüla pükaalein pünivel, Score je récord, je pütanüin jamaa püküa.",
        ver_anuncio: "🎬 Jüchajünaa anuncio je antiraa 7 kakuuna (Jütanü jüküjain)",
        ver_anuncio_texto: "Jüchajünaa anuncio je apülaajaa che progreso",
        reiniciar_partida: "🔄 Jüpülaajünaa jüküjain (Müshirüin jütanü)",
        reiniciar_partida_texto: "Jüpülaajünaa jüküjain (Müshirüin jütanü)",

        // Modales de Éxito / Victoria
        victoria_mensaje: "¡Anasü, ajutuushi nivel!",
        siguiente_nivel: "Nivel jekü",
        progreso_salvado_titulo: "¡Progreso Apülaajünüin!",
        progreso_salvado_suscripcion: "¡Asüüja pü'itaanüinjachin. Püküa 7 kakuuna jekü je pütanüin pücategoría jekü nnojolüin pümüshirüin pünüiki Score ni récord.",
        progreso_salvado_anuncio: "¡Asüüja püchajünüinjachin anuncio. Püküa 7 kakuuna jekü je pütanüin pücategoría jekü nnojolüin pümüshirüin pünüiki Score ni récord.",
        continuar_jugando: "Pütanüin Jüküjain",
        anuncio_no_disponible_titulo: "Anuncio nnojolüin",
        anuncio_no_disponible_mensaje: "Nnojolüin jüchajünaa anuncio. E'itaanüin jekü.",
        
        // Mensajes de Niveles
        categoria_superada_titulo: "¡Categoría Jutuushi!",
        categoria_superada_mensaje: (cat, niv) => `¡Anasü! Jümüin püleejeerü Categoría ${cat} Nivel ${niv}.`,
        nivel2_desbloqueado_titulo: "¡Nivel 2 Jüpülaajünüin!",
        nivel2_desbloqueado_mensaje: "¡Jümüin püjüküjain reloj. Wattamüin acierto antiraashi +1 kakuuna je +5 segundos.",
        nivel3_desbloqueado_titulo: "¡Nivel 3 Jüpülaajünüin!",
        nivel3_desbloqueado_mensaje: "¡Modo Extremo! Nnojolüin recompensa kara ni kakuuna. ¡Püchajünaa jamüshi püküa!",
        juego_completado_titulo: "¡Jüküjain Jutuushi!",
        juego_completado_mensaje: "¡Püjutuushi 3 nivel. Püleejeerü jekü Nivel 1.",
        siguiente_categoria: "Categoría Jekü",

        // Footer y otros
        invitar_cafe: "Pükaaliijüin café",
        version: "2026 © | V 2.9",
        confirmar_borrar: "¿Jüpülaajünaa sukuwa'ipa je jüpülaajünaa puntu?",
        
        // PayPal
        cargando_paypal: "PayPal Oñemyatyrõhína...",
        error_paypal_conexion: "Jejavy PayPal ojehupívo. Eñeha'ã jey.",
        error_paypal_render: "Jejavy botón ojejapóvo.",
        paypal_no_disponible_venezuela: "PayPal ndoikói nde regiónpe.",

        // Tooltips
        titulo_iniciar: "Ajalajaa Jüküjain",
        titulo_revolver: "Jüchajünaa Karta",
        titulo_resetear: "Jüpülaajünaa",
        titulo_volver: "Jüpüle",

        // Textos dinámicos
        tiempo_record: (tiempo) => `¡Anüiki Jekü! Kara: ${tiempo}s`,
        tiempo_victoria: (tiempo, puntos) => `¡Aalayaa! Kara: ${tiempo}s. Puntu: ${puntos}`,
    },

    wau: { // Warao
        // Menú principal
        jugar_ahora: "Jükü Jainako",
        como_jugar: "¿Jine Jükü?",
        ajustes: "Moinikane",
        desarrollador: "Araunaka",
        salir: "Jüpore",
        iniciar_sesion: "Jükü Jakore",
        correo_electronico: "Korreo",
        contrasena_min: "Kontraseña (6 yaa)",
        nombre_usuario: "A'yataashi",
        entrar: "Jükü Jakore",
        no_tienes_cuenta: "¿Najoro püküa cuenta?",
        registrate: "Eshajaa",
        politica_privacidad: "Política de Privacidad",

        // Pantalla de juego
        iniciar_juego: "Jükü Jakore",
        pausar: "Jotoro",
        reanudar: "Jükü Jakore Jisaka",
        revolver_cartas: "Karta Jeburatu",
        resetear_valores: "Moinibunatu",

        // Panel de estadísticas
        tiempo: "Jiara",
        tiempo_restante: "Jiara Jebuna",
        nivel_label: "Nivel",
        vidas_label: "Jebu",
        puntos: "Puntu",
        victorias_label: "Winata",
        record: "Rekor",
        score: "Score",
        derrotas: "Derota",

        // Estados del juego
        game_over: "¡Jükü Jebu!",
        ganaste: "¡Winataya!",
        nuevo_record: "¡Rekor Jobaji!",
        victoria: "¡Winata!",

        // Modal Cómo Jugar
        como_jugar_titulo: "¿Jine Jükü?",
        como_jugar_subtitulo: "¡A jüna siko, akumaja punto, je akore jebuna!",
        como_jugar_paso1: "Karta jeburatu: A jakore manamo karta a wabatu jokore jokore.",
        como_jugar_paso2: "A pareja akumaja je a jebuna winata: Jese orowai a pareja a wabatu, a winataya jebuna.",
        como_jugar_paso3: "Erroro a konae: Karta najorokitane, a jobajitaya jebu. A jakore 7 jebu. Najorokitane jebu, a wabatu anuncio a jobaji jebu je a jükü jisaka.",
        como_jugar_paso4: "Objetivo: Karta jeburatu manamo a wabatu pareja jokore 7 jebu najoroyakore.",
        cerrar: "Jüpore",

        // Modal Ajustes
        ajustes_titulo: "Moinikane",
        sonido: "Kuirida:",
        activado: "Ajukuka",
        silenciado: "Najoro",
        modo: "Modo:",
        dark: "Dimara",
        light: "Jarata",
        animaciones: "Animasion",
        animaciones_activadas: "Ajukuka",
        animaciones_desactivadas: "Najoro",
        idioma: "Ñe'ẽ",

        // Modal Desarrollador
        desarrollador_titulo: "Araunaka",
        desarrollador_texto: "Jamia, ine Yampiero Mujica. Ine Memoria akumaja HTML, CSS je JavaScript a siko entrena a jükü. A konae proyecto je a wabatu apoyo, ine café",

        // Modal sistema
        game_over_mensaje: "¡Jebu najoro! A jebu najorokitane.",
        ir_menu: "Menú a wabatu",
        reintentar_nivel: "Jükü Jisaka",
        sin_vidas_titulo: "¡A jebu najorokitane!",
        sin_vidas_mensaje: "¿Jine a wabatu jisaka?",
        sin_vidas_mensaje_progreso: "Eshajaa a wabatu pünivel, Score je récord, je a jükü jisaka jamaa püküa.",
        ver_anuncio: "🎬 Anuncio a wabatu je 7 jebu jobaji (Jükü jisaka)",
        ver_anuncio_texto: "Anuncio a wabatu je apülaajaa che progreso",
        reiniciar_partida: "🔄 Jükü jobaji (Progreso najoro)",
        reiniciar_partida_texto: "Jükü jobaji (Progreso najoro)",

        // Modales de Éxito / Victoria
        victoria_mensaje: "¡Winata, a nivel jobaji!",
        siguiente_nivel: "Nivel Jisaka",
        progreso_salvado_titulo: "¡Progreso Apülaajünüin!",
        progreso_salvado_suscripcion: "¡Asüüja pü'itaanüinjachin. Püküa 7 kakuuna jekü je pütanüin pücategoría jekü nnojolüin pümüshirüin pünüiki Score ni récord.",
        progreso_salvado_anuncio: "¡Asüüja püchajünüinjachin anuncio. Püküa 7 kakuuna jekü je pütanüin pücategoría jekü nnojolüin pümüshirüin pünüiki Score ni récord.",
        continuar_jugando: "Pütanüin Jüküjain",
        anuncio_no_disponible_titulo: "Anuncio nnojolüin",
        anuncio_no_disponible_mensaje: "Nnojolüin jüchajünaa anuncio. E'itaanüin jekü.",
        
        // Mensajes de Niveles
        categoria_superada_titulo: "¡Categoría Jutuushi!",
        categoria_superada_mensaje: (cat, niv) => `¡Anasü! Jümüin püleejeerü Categoría ${cat} Nivel ${niv}.`,
        nivel2_desbloqueado_titulo: "¡Nivel 2 Jüpülaajünüin!",
        nivel2_desbloqueado_mensaje: "¡Jümüin püjüküjain reloj. Wattamüin acierto antiraashi +1 kakuuna je +5 segundos.",
        nivel3_desbloqueado_titulo: "¡Nivel 3 Jüpülaajünüin!",
        nivel3_desbloqueado_mensaje: "¡Modo Extremo! Nnojolüin recompensa kara ni kakuuna. ¡Püchajünaa jamüshi püküa!",
        juego_completado_titulo: "¡Jüküjain Jutuushi!",
        juego_completado_mensaje: "¡Püjutuushi 3 nivel. Püleejeerü jekü Nivel 1.",
        siguiente_categoria: "Categoría Jekü",

        // Footer y otros
        invitar_cafe: "Ine café",
        version: "2026 © | V 2.9",
        confirmar_borrar: "¿Moinibunatu score je historia?",
        
        // PayPal
        cargando_paypal: "PayPal Oñemyatyrõhína...",
        error_paypal_conexion: "Jejavy PayPal ojehupívo. Eñeha'ã jey.",
        error_paypal_render: "Jejavy botón ojejapóvo.",
        paypal_no_disponible_venezuela: "PayPal ndoikói nde regiónpe.",

        // Tooltips
        titulo_iniciar: "Jükü Jakore",
        titulo_revolver: "Karta Jeburatu",
        titulo_resetear: "Moinibunatu",
        titulo_volver: "Jüpore",

        // Textos dinámicos
        tiempo_record: (tiempo) => `¡Rekor Jobaji! Jiara: ${tiempo}s`,
        tiempo_victoria: (tiempo, puntos) => `¡Winata! Jiara: ${tiempo}s. Puntu: ${puntos}`,
    },

    pex: { // Pemón
        // Menú principal
        jugar_ahora: "Eserenkare Iaré",
        como_jugar: "¿Eneken Eserenka?",
        ajustes: "Enepaik",
        desarrollador: "Enekapuei",
        salir: "Enechi",
        iniciar_sesion: "Eserenka Enetoi",
        correo_electronico: "Korreo",
        contrasena_min: "Kontraseña (6 yaa)",
        nombre_usuario: "A'yataashi",
        entrar: "Eserenka Enetoi",
        no_tienes_cuenta: "¿Najoro püküa cuenta?",
        registrate: "Eshajaa",
        politica_privacidad: "Política de Privacidad",

        // Pantalla de juego
        iniciar_juego: "Eserenka Enetoi",
        pausar: "Enechitöi",
        reanudar: "Enetoi Pé",
        revolver_cartas: "Karta Enatöika",
        resetear_valores: "Enepaik Pé",

        // Panel de estadísticas
        tiempo: "Kareta",
        tiempo_restante: "Kareta Enetoi",
        nivel_label: "Nivel",
        vidas_label: "Enapai",
        puntos: "Puntu",
        victorias_label: "Enetoi",
        record: "Rekor",
        score: "Score",
        derrotas: "Enapaika",

        // Estados del juego
        game_over: "¡Eserenka Enapa!",
        ganaste: "¡Enetoi Pé!",
        nuevo_record: "¡Rekor Enetoi!",
        victoria: "¡Enetoi!",

        // Modal Cómo Jugar
        como_jugar_titulo: "¿Eneken Eserenka?",
        como_jugar_subtitulo: "¡Eserenka ene enupa, akumaja puntu je enetoi enapai!",
        como_jugar_paso1: "Karta enatöika: Eserek manamo karta ena enupa kareta.",
        como_jugar_paso2: "Pareja akumaja je enapai enetoi: Orowai pareja enetoi, enapai enetoi enapa.",
        como_jugar_paso3: "Error enapaika: Karta nenetoi, enapaika enapai. Eserenka 7 enapai. Nenapaika, ene anuncio enetoi.",
        como_jugar_paso4: "Objetivo: Karta enatöika manamo pareja enetoi 7 enapai nenapaika.",
        cerrar: "Enechi",

        // Modal Ajustes
        ajustes_titulo: "Enepaik",
        sonido: "Enupa:",
        activado: "Enetoi",
        silenciado: "Enapaika",
        modo: "Modo:",
        dark: "Enupun",
        light: "Enukare",
        animaciones: "Enemöika",
        animaciones_activadas: "Enetoi",
        animaciones_desactivadas: "Enapaika",
        idioma: "Eneken",

        // Modal Desarrollador
        desarrollador_titulo: "Enekapuei",
        desarrollador_texto: "Enapai, Yampiero Mujica. Memoria akumaja HTML, CSS je JavaScript ene eserenka enupa. Enetoi proyecto, ene café enapa",

        // Modal sistema
        game_over_mensaje: "¡Enapaika! Enapai nenapaika.",
        ir_menu: "Menú enapa",
        reintentar_nivel: "Eserenka Pé",
        sin_vidas_titulo: "¡Enapai nenapaika!",
        sin_vidas_mensaje: "¿Eneken enapa pé?",
        sin_vidas_mensaje_progreso: "Eshajaa a wabatu pünivel, Score je récord, je a jükü jisaka jamaa püküa.",
        ver_anuncio: "🎬 Anuncio enapa je 7 enapai enetoi (Eserenka pé)",
        ver_anuncio_texto: "Anuncio enapa je apülaajaa che progreso",
        reiniciar_partida: "🔄 Eserenka pé (Progreso enapaika)",
        reiniciar_partida_texto: "Eserenka pé (Progreso enapaika)",

        // Modales de Éxito / Victoria
        victoria_mensaje: "¡Enetoi, nivel akumaja!",
        siguiente_nivel: "Nivel Pé",
        progreso_salvado_titulo: "¡Progreso Apülaajünüin!",
        progreso_salvado_suscripcion: "¡Asüüja pü'itaanüinjachin. Püküa 7 kakuuna jekü je pütanüin pücategoría jekü nnojolüin pümüshirüin pünüiki Score ni récord.",
        progreso_salvado_anuncio: "¡Asüüja püchajünüinjachin anuncio. Püküa 7 kakuuna jekü je pütanüin pücategoría jekü nnojolüin pümüshirüin pünüiki Score ni récord.",
        continuar_jugando: "Pütanüin Jüküjain",
        anuncio_no_disponible_titulo: "Anuncio nnojolüin",
        anuncio_no_disponible_mensaje: "Nnojolüin jüchajünaa anuncio. E'itaanüin jekü.",
        
        // Mensajes de Niveles
        categoria_superada_titulo: "¡Categoría Jutuushi!",
        categoria_superada_mensaje: (cat, niv) => `¡Anasü! Jümüin püleejeerü Categoría ${cat} Nivel ${niv}.`,
        nivel2_desbloqueado_titulo: "¡Nivel 2 Jüpülaajünüin!",
        nivel2_desbloqueado_mensaje: "¡Jümüin püjüküjain reloj. Wattamüin acierto antiraashi +1 kakuuna je +5 segundos.",
        nivel3_desbloqueado_titulo: "¡Nivel 3 Jüpülaajünüin!",
        nivel3_desbloqueado_mensaje: "¡Modo Extremo! Nnojolüin recompensa kara ni kakuuna. ¡Püchajünaa jamüshi püküa!",
        juego_completado_titulo: "¡Jüküjain Jutuushi!",
        juego_completado_mensaje: "¡Püjutuushi 3 nivel. Püleejeerü jekü Nivel 1.",
        siguiente_categoria: "Categoría Jekü",

        // Footer y otros
        invitar_cafe: "Ene café",
        version: "2026 © | V 2.9",
        confirmar_borrar: "¿Enepaik pé score je historia?",
        
        // PayPal
        cargando_paypal: "PayPal Oñemyatyrõhína...",
        error_paypal_conexion: "Jejavy PayPal ojehupívo. Eñeha'ã jey.",
        error_paypal_render: "Jejavy botón ojejapóvo.",
        paypal_no_disponible_venezuela: "PayPal ndoikói nde regiónpe.",

        // Tooltips
        titulo_iniciar: "Eserenka Enetoi",
        titulo_revolver: "Karta Enatöika",
        titulo_resetear: "Enepaik Pé",
        titulo_volver: "Enechi",

        // Textos dinámicos
        tiempo_record: (tiempo) => `¡Rekor Enetoi! Kareta: ${tiempo}s`,
        tiempo_victoria: (tiempo, puntos) => `¡Enetoi! Kareta: ${tiempo}s. Puntu: ${puntos}`,
    },

    jiv: { // Jivi (Hiwi/Guajibo)
        // Menú principal
        jugar_ahora: "Jiwita Jume",
        como_jugar: "¿Jume Jiwita?",
        ajustes: "Jiwakajü",
        desarrollador: "Jiwapajü",
        salir: "Jüpüna",
        iniciar_sesion: "Jükü Jakore",
        correo_electronico: "Korreo",
        contrasena_min: "Kontraseña (6 yaa)",
        nombre_usuario: "A'yataashi",
        entrar: "Jükü Jakore",
        no_tienes_cuenta: "¿Najoro püküa cuenta?",
        registrate: "Eshajaa",
        politica_privacidad: "Política de Privacidad",

        // Pantalla de juego
        iniciar_juego: "Jiwita Jüpünajü",
        pausar: "Jüpünaka",
        reanudar: "Jiwita Jüme",
        revolver_cartas: "Karta Jiwakota",
        resetear_valores: "Jiwakajü Jüme",

        // Panel de estadísticas
        tiempo: "Jume",
        tiempo_restante: "Jume Jiwita",
        nivel_label: "Nivel",
        vidas_label: "Jüme",
        puntos: "Puntu",
        victorias_label: "Jiwita",
        record: "Rekor",
        score: "Score",
        derrotas: "Jiwapana",

        // Estados del juego
        game_over: "¡Jiwita Jüpana!",
        ganaste: "¡Jiwita Jü!",
        nuevo_record: "¡Rekor Jüme!",
        victoria: "¡Jiwita!",

        // Modal Cómo Jugar
        como_jugar_titulo: "¿Jume Jiwita?",
        como_jugar_subtitulo: "¡Jiwita jü jume, akumaja puntu je jiwita jüpüna!",
        como_jugar_paso1: "Karta jiwakota: Jiwita manamo karta jü jume kareta.",
        como_jugar_paso2: "Pareja akumaja je jiwita jüme: Orowai pareja jiwita, jiwita jüme.",
        como_jugar_paso3: "Error jiwapana: Karta najiwita, jiwapana jüme. Jiwita 7 jüme. Najiwapana, jü anuncio jiwita.",
        como_jugar_paso4: "Objetivo: Karta jiwakota manamo pareja jiwita 7 jüme najiwapana.",
        cerrar: "Jüpüna",

        // Modal Ajustes
        ajustes_titulo: "Jiwakajü",
        sonido: "Jüme:",
        activado: "Jiwita",
        silenciado: "Jiwapana",
        modo: "Modo:",
        dark: "Jüpünü",
        light: "Jükare",
        animaciones: "Jiwamöika",
        animaciones_activadas: "Jiwita",
        animaciones_desactivadas: "Jiwapana",
        idioma: "Jüme",

        // Modal Desarrollador
        desarrollador_titulo: "Jiwapajü",
        desarrollador_texto: "Jüme, Yampiero Mujica. Memoria akumaja HTML, CSS je JavaScript jü jiwita jume. Jiwita proyecto, jü café",

        // Modal sistema
        game_over_mensaje: "¡Jiwapana! Jüme najiwapana.",
        ir_menu: "Menú jü",
        reintentar_nivel: "Jiwita Jüme",
        sin_vidas_titulo: "¡Jüme najiwapana!",
        sin_vidas_mensaje: "¿Jume jü jüme?",
        sin_vidas_mensaje_progreso: "Eshajaa a wabatu pünivel, Score je récord, je a jükü jisaka jamaa püküa.",
        ver_anuncio: "🎬 Anuncio jü je 7 jüme jiwita (Jiwita jüme)",
        ver_anuncio_texto: "Anuncio jü je apülaajaa che progreso",
        reiniciar_partida: "🔄 Jiwita jüme (Progreso jiwapana)",
        reiniciar_partida_texto: "Jiwita jüme (Progreso jiwapana)",

        // Modales de Éxito / Victoria
        victoria_mensaje: "¡Jiwita, nivel akumaja!",
        siguiente_nivel: "Nivel Jüme",
        progreso_salvado_titulo: "¡Progreso Apülaajünüin!",
        progreso_salvado_suscripcion: "¡Asüüja pü'itaanüinjachin. Püküa 7 kakuuna jekü je pütanüin pücategoría jekü nnojolüin pümüshirüin pünüiki Score ni récord.",
        progreso_salvado_anuncio: "¡Asüüja püchajünüinjachin anuncio. Püküa 7 kakuuna jekü je pütanüin pücategoría jekü nnojolüin pümüshirüin pünüiki Score ni récord.",
        continuar_jugando: "Pütanüin Jüküjain",
        anuncio_no_disponible_titulo: "Anuncio nnojolüin",
        anuncio_no_disponible_mensaje: "Nnojolüin jüchajünaa anuncio. E'itaanüin jekü.",
        
        // Mensajes de Niveles
        categoria_superada_titulo: "¡Categoría Jutuushi!",
        categoria_superada_mensaje: (cat, niv) => `¡Anasü! Jümüin püleejeerü Categoría ${cat} Nivel ${niv}.`,
        nivel2_desbloqueado_titulo: "¡Nivel 2 Jüpülaajünüin!",
        nivel2_desbloqueado_mensaje: "¡Jümüin püjüküjain reloj. Wattamüin acierto antiraashi +1 kakuuna je +5 segundos.",
        nivel3_desbloqueado_titulo: "¡Nivel 3 Jüpülaajünüin!",
        nivel3_desbloqueado_mensaje: "¡Modo Extremo! Nnojolüin recompensa kara ni kakuuna. ¡Püchajünaa jamüshi püküa!",
        juego_completado_titulo: "¡Jüküjain Jutuushi!",
        juego_completado_mensaje: "¡Püjutuushi 3 nivel. Püleejeerü jekü Nivel 1.",
        siguiente_categoria: "Categoría Jekü",

        // Footer y otros
        invitar_cafe: "Jü café",
        version: "2026 © | V 2.9",
        confirmar_borrar: "¿Jiwakajü jüme score je historia?",
        
        // PayPal
        cargando_paypal: "PayPal Oñemyatyrõhína...",
        error_paypal_conexion: "Jejavy PayPal ojehupívo. Eñeha'ã jey.",
        error_paypal_render: "Jejavy botón ojejapóvo.",
        paypal_no_disponible_venezuela: "PayPal ndoikói nde regiónpe.",

        // Tooltips
        titulo_iniciar: "Jiwita Jüpünajü",
        titulo_revolver: "Karta Jiwakota",
        titulo_resetear: "Jiwakajü Jüme",
        titulo_volver: "Jüpüna",

        // Textos dinámicos
        tiempo_record: (tiempo) => `¡Rekor Jüme! Jume: ${tiempo}s`,
        tiempo_victoria: (tiempo, puntos) => `¡Jiwita! Jume: ${tiempo}s. Puntu: ${puntos}`,
    },

    wot: { // Wottuja (Piaroa)
        // Menú principal
        jugar_ahora: "Jükü Jainako",
        como_jugar: "¿Jine Jükü?",
        ajustes: "Moinikane",
        desarrollador: "Araunaka",
        salir: "Jüpore",
        iniciar_sesion: "Jükü Jakore",
        correo_electronico: "Korreo",
        contrasena_min: "Kontraseña (6 yaa)",
        nombre_usuario: "A'yataashi",
        entrar: "Jükü Jakore",
        no_tienes_cuenta: "¿Najoro püküa cuenta?",
        registrate: "Eshajaa",
        politica_privacidad: "Política de Privacidad",

        // Pantalla de juego
        iniciar_juego: "Jükü Jakore",
        pausar: "Jotoro",
        reanudar: "Jükü Jakore Jisaka",
        revolver_cartas: "Karta Jeburatu",
        resetear_valores: "Moinibunatu",

        // Panel de estadísticas
        tiempo: "Jiara",
        tiempo_restante: "Jiara Jebuna",
        nivel_label: "Nivel",
        vidas_label: "Jebu",
        puntos: "Puntu",
        victorias_label: "Winata",
        record: "Rekor",
        score: "Score",
        derrotas: "Derota",

        // Estados del juego
        game_over: "¡Jükü Jebu!",
        ganaste: "¡Winataya!",
        nuevo_record: "¡Rekor Jobaji!",
        victoria: "¡Winata!",

        // Modal Cómo Jugar
        como_jugar_titulo: "¿Jine Jükü?",
        como_jugar_subtitulo: "¡A jüna siko, akumaja punto, je akore jebuna!",
        como_jugar_paso1: "Karta jeburatu: A jakore manamo karta a wabatu jokore jokore.",
        como_jugar_paso2: "A pareja akumaja je a jebuna winata: Jese orowai a pareja a wabatu, a winataya jebuna.",
        como_jugar_paso3: "Erroro a konae: Karta najorokitane, a jobajitaya jebu. A jakore 7 jebu. Najorokitane jebu, a wabatu anuncio a jobaji jebu je a jükü jisaka.",
        como_jugar_paso4: "Objetivo: Karta jeburatu manamo a wabatu pareja jokore 7 jebu najoroyakore.",
        cerrar: "Jüpore",

        // Modal Ajustes
        ajustes_titulo: "Moinikane",
        sonido: "Kuirida:",
        activado: "Ajukuka",
        silenciado: "Najoro",
        modo: "Modo:",
        dark: "Dimara",
        light: "Jarata",
        animaciones: "Animasion",
        animaciones_activadas: "Ajukuka",
        animaciones_desactivadas: "Najoro",
        idioma: "Ñe'ẽ",

        // Modal Desarrollador
        desarrollador_titulo: "Araunaka",
        desarrollador_texto: "Jamia, ine Yampiero Mujica. Ine Memoria akumaja HTML, CSS je JavaScript a siko entrena a jükü. A konae proyecto je a wabatu apoyo, ine café",

        // Modal sistema
        game_over_mensaje: "¡Jebu najoro! A jebu najorokitane.",
        ir_menu: "Menú a wabatu",
        reintentar_nivel: "Jükü Jisaka",
        sin_vidas_titulo: "¡A jebu najorokitane!",
        sin_vidas_mensaje: "¿Jine a wabatu jisaka?",
        sin_vidas_mensaje_progreso: "Eshajaa a wabatu pünivel, Score je récord, je a jükü jisaka jamaa püküa.",
        ver_anuncio: "🎬 Anuncio a wabatu je 7 jebu jobaji (Jükü jisaka)",
        ver_anuncio_texto: "Anuncio a wabatu je apülaajaa che progreso",
        reiniciar_partida: "🔄 Jükü jobaji (Progreso najoro)",
        reiniciar_partida_texto: "Jükü jobaji (Progreso najoro)",

        // Modales de Éxito / Victoria
        victoria_mensaje: "¡Winata, a nivel jobaji!",
        siguiente_nivel: "Nivel Jisaka",
        progreso_salvado_titulo: "¡Progreso Apülaajünüin!",
        progreso_salvado_suscripcion: "¡Asüüja pü'itaanüinjachin. Püküa 7 kakuuna jekü je pütanüin pücategoría jekü nnojolüin pümüshirüin pünüiki Score ni récord.",
        progreso_salvado_anuncio: "¡Asüüja püchajünüinjachin anuncio. Püküa 7 kakuuna jekü je pütanüin pücategoría jekü nnojolüin pümüshirüin pünüiki Score ni récord.",
        continuar_jugando: "Pütanüin Jüküjain",
        anuncio_no_disponible_titulo: "Anuncio nnojolüin",
        anuncio_no_disponible_mensaje: "Nnojolüin jüchajünaa anuncio. E'itaanüin jekü.",
        
        // Mensajes de Niveles
        categoria_superada_titulo: "¡Categoría Jutuushi!",
        categoria_superada_mensaje: (cat, niv) => `¡Anasü! Jümüin püleejeerü Categoría ${cat} Nivel ${niv}.`,
        nivel2_desbloqueado_titulo: "¡Nivel 2 Jüpülaajünüin!",
        nivel2_desbloqueado_mensaje: "¡Jümüin püjüküjain reloj. Wattamüin acierto antiraashi +1 kakuuna je +5 segundos.",
        nivel3_desbloqueado_titulo: "¡Nivel 3 Jüpülaajünüin!",
        nivel3_desbloqueado_mensaje: "¡Modo Extremo! Nnojolüin recompensa kara ni kakuuna. ¡Püchajünaa jamüshi püküa!",
        juego_completado_titulo: "¡Jüküjain Jutuushi!",
        juego_completado_mensaje: "¡Püjutuushi 3 nivel. Püleejeerü jekü Nivel 1.",
        siguiente_categoria: "Categoría Jekü",

        // Footer y otros
        invitar_cafe: "Ine café",
        version: "2026 © | V 2.9",
        confirmar_borrar: "¿Moinibunatu score je historia?",
        
        // PayPal
        cargando_paypal: "PayPal Oñemyatyrõhína...",
        error_paypal_conexion: "Jejavy PayPal ojehupívo. Eñeha'ã jey.",
        error_paypal_render: "Jejavy botón ojejapóvo.",
        paypal_no_disponible_venezuela: "PayPal ndoikói nde regiónpe.",

        // Tooltips
        titulo_iniciar: "Jükü Jakore",
        titulo_revolver: "Karta Jeburatu",
        titulo_resetear: "Moinibunatu",
        titulo_volver: "Jüpore",

        // Textos dinámicos
        tiempo_record: (tiempo) => `¡Rekor Jobaji! Jiara: ${tiempo}s`,
        tiempo_victoria: (tiempo, puntos) => `¡Winata! Jiara: ${tiempo}s. Puntu: ${puntos}`,
    },

    nl: { // Holandés (Neerlandés)
        // Hoofdmenu
        jugar_ahora: "Nu Spelen",
        como_jugar: "Hoe Spelen?",
        ajustes: "Instellingen",
        desarrollador: "Ontwikkelaar",
        salir: "Afsluiten",
        iniciar_sesion: "Inloggen",
        correo_electronico: "E-mailadres",
        contrasena_min: "Wachtwoord (min. 6 tekens)",
        nombre_usuario: "Gebruikersnaam (alleen bij registratie)",
        entrar: "Binnengaan",
        no_tienes_cuenta: "Heb je geen account?",
        registrate: "Registreren",
        politica_privacidad: "Privacybeleid",

        // Spelscherm
        iniciar_juego: "Spel Starten",
        pausar: "Pauzeren",
        reanudar: "Hervatten",
        revolver_cartas: "Kaarten Schudden",
        resetear_valores: "Waarden Resetten",

        // Statistiekenpaneel
        tiempo: "Tijd",
        tiempo_restante: "Resterende tijd",
        nivel_label: "Niveau",
        vidas_label: "Levens",
        puntos: "Punten",
        victorias_label: "Overwinningen",
        record: "Record",
        score: "Score",
        derrotas: "Nederlagen",

        // Spelstatussen
        game_over: "Game Over!",
        ganaste: "Je hebt Gewonnen!",
        nuevo_record: "Nieuw Record!",
        victoria: "Overwinning!",

        // Modal Hoe Spelen
        como_jugar_titulo: "Hoe Spelen?",
        como_jugar_subtitulo: "Test je geheugen, verzamel punten en bescherm je levens!",
        como_jugar_paso1: "Kaarten omdraaien: Klik op twee kaarten om de verborgen pictogrammen op het bord te ontdekken.",
        como_jugar_paso2: "Paren maken en levens verdienen: Elke keer dat je een correct paar vindt, verdien je levens als beloning om door te spelen.",
        como_jugar_paso3: "Pas op voor fouten: Als de kaarten niet overeenkomen, verlies je een leven. Je begint met 7 levens. Als ze op zijn, kun je een korte advertentie bekijken om ze te herstellen en verder te gaan waar je was.",
        como_jugar_paso4: "Doel: Draai twee kaarten tegelijk om om identieke paren te vinden voordat je 7 levens op zijn.",
        cerrar: "Sluiten",

        // Modal Instellingen
        ajustes_titulo: "Instellingen",
        sonido: "Geluid:",
        activado: "Aan",
        silenciado: "Uit",
        modo: "Modus:",
        dark: "Donker",
        light: "Licht",
        animaciones: "Animaties",
        animaciones_activadas: "Ingeschakeld",
        animaciones_desactivadas: "Uitgeschakeld",
        idioma: "Taal",

        // Modal Ontwikkelaar
        desarrollador_titulo: "Ontwikkelaar",
        desarrollador_texto: "Hallo, ik ben Yampiero Mujica. Ik heb Memoria met liefde gemaakt met HTML, CSS en JavaScript zodat jij je geheugen kunt trainen zonder vervelende advertenties. Als je het project leuk vindt en me wilt steunen om het actief te houden, trakteer me dan op een koffie door op het kopje te klikken",

        // Systeemmodal (Game Over)
        game_over_mensaje: "Jammer! Je hebt geen levens meer.",
        ir_menu: "Naar menu",
        reintentar_nivel: "Level Opnieuw Proberen",
        sin_vidas_titulo: "Je hebt geen levens meer!",
        sin_vidas_mensaje: "Wat wil je doen om door te gaan?",
        sin_vidas_mensaje_progreso: "Abonneer je om je niveau, score en record te behouden en verder te gaan waar je was gebleven.",
        ver_anuncio: "🎬 Bekijk advertentie en herstel 7 levens (Spel voortzetten)",
        ver_anuncio_texto: "Bekijk advertentie en sla mijn voortgang op",
        reiniciar_partida: "🔄 Spel herstarten (Voortgang verliezen)",
        reiniciar_partida_texto: "Spel herstarten (Voortgang verliezen)",

        // Succes / Overwinningsmodals
        victoria_mensaje: "Gefeliciteerd, je hebt het level succesvol voltooid!",
        siguiente_nivel: "Volgend Level",
        progreso_salvado_titulo: "Voortgang Opgeslagen!",
        progreso_salvado_suscripcion: "Bedankt voor je abonnement. Je hebt 7 nieuwe levens en gaat verder in je huidige categorie zonder je score of record te verliezen.",
        progreso_salvado_anuncio: "Bedankt voor het bekijken van de advertentie. Je hebt 7 nieuwe levens en gaat verder in je huidige categorie zonder je score of record te verliezen.",
        continuar_jugando: "Blijf Spelen",
        anuncio_no_disponible_titulo: "Advertentie niet beschikbaar",
        anuncio_no_disponible_mensaje: "Kan de advertentie niet laden. Probeer het later opnieuw.",

        // Levelberichten
        categoria_superada_titulo: "Categorie Voltooid!",
        categoria_superada_mensaje: (cat, niv) => `Goed gedaan! Je gaat nu naar Categorie ${cat} van Niveau ${niv}.`,
        nivel2_desbloqueado_titulo: "Niveau 2 Ontgrendeld!",
        nivel2_desbloqueado_mensaje: "Nu speel je tegen de klok! Elke treffer geeft je +1 leven en +5 seconden.",
        nivel3_desbloqueado_titulo: "Niveau 3 Ontgrendeld!",
        nivel3_desbloqueado_mensaje: "Extreme Modus! Er zijn geen tijd- of levensbeloningen. Laat zien wat je waard bent!",
        juego_completado_titulo: "Spel Voltooid!",
        juego_completado_mensaje: "Je hebt alle 3 niveaus verslagen! Je begint opnieuw vanaf Niveau 1.",
        siguiente_categoria: "Volgende Categorie",

        // Footer en overige
        invitar_cafe: "Trakteer me op een koffie",
        version: "2026 © | V 2.9",
        confirmar_borrar: "Alle geschiedenis wissen en scores resetten?",

        // PayPal
        cargando_paypal: "PayPal laden...",
        error_paypal_conexion: "Fout bij het laden van PayPal. Probeer het opnieuw.",
        error_paypal_render: "Fout bij het tekenen van de knop.",
        paypal_no_disponible_venezuela: "PayPal is niet beschikbaar in jouw regio.",

        // Tooltips
        titulo_iniciar: "Spel Starten",
        titulo_revolver: "Kaarten Schudden",
        titulo_resetear: "Waarden Resetten",
        titulo_volver: "Terug",

        // Dynamische teksten (functies)
        tiempo_record: (tiempo) => `Nieuw Record! Tijd: ${tiempo}s`,
        tiempo_victoria: (tiempo, puntos) => `Overwinning! Tijd: ${tiempo}s. Punten: ${puntos}`,
    },

    ko: { // Coreano
        // 메인 메뉴
        jugar_ahora: "지금 플레이",
        como_jugar: "게임 방법",
        ajustes: "설정",
        desarrollador: "개발자",
        salir: "나가기",
        iniciar_sesion: "로그인",
        correo_electronico: "이메일 주소",
        contrasena_min: "비밀번호 (최소 6자)",
        nombre_usuario: "사용자 이름 (등록 시에만)",
        entrar: "입력",
        no_tienes_cuenta: "계정이 없으신가요?",
        registrate: "가입하기",
        politica_privacidad: "개인정보 처리방침",

        // 게임 화면
        iniciar_juego: "게임 시작",
        pausar: "일시정지",
        reanudar: "다시 시작",
        revolver_cartas: "카드 섞기",
        resetear_valores: "값 초기화",

        // 통계 패널
        tiempo: "시간",
        tiempo_restante: "남은 시간",
        nivel_label: "레벨",
        vidas_label: "생명",
        puntos: "점수",
        victorias_label: "승리",
        record: "기록",
        score: "스코어",
        derrotas: "패배",

        // 게임 상태
        game_over: "게임 오버!",
        ganaste: "승리했습니다!",
        nuevo_record: "새 기록!",
        victoria: "승리!",

        // 게임 방법 모달
        como_jugar_titulo: "게임 방법",
        como_jugar_subtitulo: "기억력을 테스트하고 점수를 쌓고 생명을 지키세요!",
        como_jugar_paso1: "카드 뒤집기: 카드 두 장을 클릭하여 보드에 숨겨진 아이콘을 발견하세요.",
        como_jugar_paso2: "짝을 맞추고 생명 획득: 올바른 짝을 찾을 때마다 보상으로 생명을 획득하여 계속 플레이할 수 있습니다.",
        como_jugar_paso3: "실수 주의: 카드가 일치하지 않으면 생명을 하나 잃습니다. 7개의 생명으로 시작합니다. 모두 소진되면 짧은 광고를 보고 회복하고 중단한 곳에서 계속할 수 있습니다.",
        como_jugar_paso4: "목표: 7개의 생명이 소진되기 전에 두 장씩 카드를 뒤집어 동일한 짝을 찾으세요.",
        cerrar: "닫기",

        // 설정 모달
        ajustes_titulo: "설정",
        sonido: "소리:",
        activado: "켜짐",
        silenciado: "꺼짐",
        modo: "모드:",
        dark: "다크",
        light: "라이트",
        animaciones: "애니메이션",
        animaciones_activadas: "활성화됨",
        animaciones_desactivadas: "비활성화됨",
        idioma: "언어",

        // 개발자 모달
        desarrollador_titulo: "개발자",
        desarrollador_texto: "안녕하세요, 저는 Yampiero Mujica입니다. 성가신 광고 없이 기억력을 훈련하며 즐거운 시간을 보낼 수 있도록 HTML, CSS, JavaScript로 정성을 담아 Memoria를 만들었습니다. 프로젝트가 마음에 들고 계속 유지되도록 지원하고 싶다면 컵을 클릭하여 커피 한 잔 사주세요",

        // 시스템 모달 (게임 오버)
        game_over_mensaje: "안타깝습니다! 생명을 모두 소진했습니다.",
        ir_menu: "메뉴로 이동",
        reintentar_nivel: "레벨 다시 시도",
        sin_vidas_titulo: "생명을 모두 소진했습니다!",
        sin_vidas_mensaje: "계속하려면 어떻게 하시겠습니까?",
        sin_vidas_mensaje_progreso: "레벨, 점수 및 기록을 유지하고 중단한 곳에서 계속하려면 구독하세요.",
        ver_anuncio: "🎬 광고 보고 생명 7개 회복 (게임 계속)",
        ver_anuncio_texto: "광고 보고 내 진행 상황 저장",
        reiniciar_partida: "🔄 게임 재시작 (진행 상황 손실)",
        reiniciar_partida_texto: "게임 재시작 (진행 상황 손실)",

        // 성공 / 승리 모달
        victoria_mensaje: "축하합니다, 레벨을 성공적으로 완료했습니다!",
        siguiente_nivel: "다음 레벨",
        progreso_salvado_titulo: "진행 상황 저장됨!",
        progreso_salvado_suscripcion: "구독해 주셔서 감사합니다. 7개의 새로운 생명을 얻었으며 점수나 기록을 잃지 않고 현재 카테고리에서 계속합니다.",
        progreso_salvado_anuncio: "광고를 시청해 주셔서 감사합니다. 7개의 새로운 생명을 얻었으며 점수나 기록을 잃지 않고 현재 카테고리에서 계속합니다.",
        continuar_jugando: "계속 플레이",
        anuncio_no_disponible_titulo: "광고를 사용할 수 없음",
        anuncio_no_disponible_mensaje: "광고를 로드할 수 없습니다. 나중에 다시 시도하세요.",

        // 레벨 메시지
        categoria_superada_titulo: "카테고리 통과!",
        categoria_superada_mensaje: (cat, niv) => `잘했어요! 이제 레벨 ${niv}의 카테고리 ${cat}으로 이동합니다.`,
        nivel2_desbloqueado_titulo: "레벨 2 잠금 해제!",
        nivel2_desbloqueado_mensaje: "이제 시계와 경쟁합니다! 성공할 때마다 +1 생명과 +5초를 얻습니다.",
        nivel3_desbloqueado_titulo: "레벨 3 잠금 해제!",
        nivel3_desbloqueado_mensaje: "익스트림 모드! 시간이나 생명 보상이 없습니다. 당신의 가치를 보여주세요!",
        juego_completado_titulo: "게임 완료!",
        juego_completado_mensaje: "3개의 레벨을 모두 물리쳤습니다! 레벨 1부터 다시 시작합니다.",
        siguiente_categoria: "다음 카테고리",

        // 푸터 및 기타
        invitar_cafe: "커피 한 잔 사주기",
        version: "2026 © | V 2.9",
        confirmar_borrar: "모든 기록을 삭제하고 점수를 초기화하시겠습니까?",

        // PayPal
        cargando_paypal: "PayPal 로드 중...",
        error_paypal_conexion: "PayPal 로드 오류. 다시 시도하세요.",
        error_paypal_render: "버튼 그리기 오류.",
        paypal_no_disponible_venezuela: "PayPal은 해당 지역에서 사용할 수 없습니다.",

        // 툴팁
        titulo_iniciar: "게임 시작",
        titulo_revolver: "카드 섞기",
        titulo_resetear: "값 초기화",
        titulo_volver: "뒤로",

        // 동적 텍스트 (함수)
        tiempo_record: (tiempo) => `새 기록! 시간: ${tiempo}초`,
        tiempo_victoria: (tiempo, puntos) => `승리! 시간: ${tiempo}초. 점수: ${puntos}`,
    },

    el: { // Griego
        // Κύριο μενού
        jugar_ahora: "Παίξε Τώρα",
        como_jugar: "Πώς Παίζω;",
        ajustes: "Ρυθμίσεις",
        desarrollador: "Προγραμματιστής",
        salir: "Έξοδος",
        iniciar_sesion: "Σύνδεση",
        correo_electronico: "Διεύθυνση email",
        contrasena_min: "Κωδικός πρόσβασης (τουλ. 6 χαρακτήρες)",
        nombre_usuario: "Όνομα χρήστη (μόνο για εγγραφή)",
        entrar: "Είσοδος",
        no_tienes_cuenta: "Δεν έχετε λογαριασμό;",
        registrate: "Εγγραφή",
        politica_privacidad: "Πολιτική Απορρήτου",

        // Οθόνη παιχνιδιού
        iniciar_juego: "Έναρξη Παιχνιδιού",
        pausar: "Παύση",
        reanudar: "Συνέχεια",
        revolver_cartas: "Ανακάτεμα Καρτών",
        resetear_valores: "Επαναφορά Τιμών",

        // Πίνακας στατιστικών
        tiempo: "Χρόνος",
        tiempo_restante: "Υπόλοιπο χρόνου",
        nivel_label: "Επίπεδο",
        vidas_label: "Ζωές",
        puntos: "Πόντοι",
        victorias_label: "Νίκες",
        record: "Ρεκόρ",
        score: "Σκορ",
        derrotas: "Ήττες",

        // Καταστάσεις παιχνιδιού
        game_over: "Τέλος Παιχνιδιού!",
        ganaste: "Κέρδισες!",
        nuevo_record: "Νέο Ρεκόρ!",
        victoria: "Νίκη!",

        // Modal Πώς Παίζω
        como_jugar_titulo: "Πώς Παίζω;",
        como_jugar_subtitulo: "Δοκίμασε τη μνήμη σου, συγκέντρωσε πόντους και κράτησε τις ζωές σου ασφαλείς!",
        como_jugar_paso1: "Γύρνα κάρτες: Κάνε κλικ σε δύο κάρτες για να ανακαλύψεις τα κρυμμένα εικονίδια στον πίνακα.",
        como_jugar_paso2: "Φτιάξε ζευγάρια και κέρδισε ζωές: Κάθε φορά που βρίσκεις ένα σωστό ζευγάρι, κερδίζεις ζωές ως ανταμοιβή για να συνεχίσεις να παίζεις.",
        como_jugar_paso3: "Πρόσεχε τα λάθη: Αν οι κάρτες δεν ταιριάζουν, χάνεις μια ζωή. Ξεκινάς με 7 ζωές. Αν τελειώσουν, μπορείς να δεις μια σύντομη διαφήμιση για να τις ανακτήσεις και να συνεχίσεις από εκεί που σταμάτησες.",
        como_jugar_paso4: "Στόχος: Γύρνα δύο κάρτες κάθε φορά για να βρεις πανομοιότυπα ζευγάρια πριν τελειώσουν οι 7 ζωές.",
        cerrar: "Κλείσιμο",

        // Modal Ρυθμίσεις
        ajustes_titulo: "Ρυθμίσεις",
        sonido: "Ήχος:",
        activado: "Ενεργό",
        silenciado: "Σίγαση",
        modo: "Λειτουργία:",
        dark: "Σκοτεινό",
        light: "Φωτεινό",
        animaciones: "Κινούμενα Σχέδια",
        animaciones_activadas: "Ενεργοποιημένα",
        animaciones_desactivadas: "Απενεργοποιημένα",
        idioma: "Γλώσσα",

        // Modal Προγραμματιστής
        desarrollador_titulo: "Προγραμματιστής",
        desarrollador_texto: "Γεια σου, είμαι ο Yampiero Mujica. Δημιούργησα το Memoria με αγάπη χρησιμοποιώντας HTML, CSS και JavaScript για να περνάς καλά εκπαιδεύοντας τη μνήμη σου χωρίς ενοχλητικές διαφημίσεις. Αν σου αρέσει το έργο και θέλεις να με υποστηρίξεις να το κρατήσω ενεργό, κέρασέ με έναν καφέ κάνοντας κλικ στο φλιτζάνι",

        // Modal συστήματος (Game Over)
        game_over_mensaje: "Κρίμα! Σου τελείωσαν οι ζωές.",
        ir_menu: "Μετάβαση στο μενού",
        reintentar_nivel: "Επανάληψη Επιπέδου",
        sin_vidas_titulo: "Σου τελείωσαν οι ζωές!",
        sin_vidas_mensaje: "Τι θέλεις να κάνεις για να συνεχίσεις;",
        sin_vidas_mensaje_progreso: "Εγγραφείτε για να διατηρήσετε το επίπεδο, το σκορ και το ρεκόρ σας και να συνεχίσετε από εκεί που σταματήσατε.",
        ver_anuncio: "🎬 Δες διαφήμιση και ανάκτησε 7 ζωές (Συνέχεια παιχνιδιού)",
        ver_anuncio_texto: "Δες διαφήμιση και αποθήκευσε την πρόοδό μου",
        reiniciar_partida: "🔄 Επανεκκίνηση παιχνιδιού (Απώλεια προόδου)",
        reiniciar_partida_texto: "Επανεκκίνηση παιχνιδιού (Απώλεια προόδου)",

        // Modals επιτυχίας / νίκης
        victoria_mensaje: "Συγχαρητήρια, ολοκλήρωσες το επίπεδο με επιτυχία!",
        siguiente_nivel: "Επόμενο Επίπεδο",
        progreso_salvado_titulo: "Η Πρόοδος Αποθηκεύτηκε!",
        progreso_salvado_suscripcion: "Ευχαριστούμε για την εγγραφή σας. Έχετε 7 νέες ζωές και θα συνεχίσετε στην τρέχουσα κατηγορία σας χωρίς να χάσετε το Σκορ ή το ρεκόρ σας.",
        progreso_salvado_anuncio: "Ευχαριστούμε που παρακολουθήσατε τη διαφήμιση. Έχετε 7 νέες ζωές και συνεχίζετε στην τρέχουσα κατηγορία σας χωρίς να χάσετε το Σκορ ή το ρεκόρ σας.",
        continuar_jugando: "Συνέχεια Παιχνιδιού",
        anuncio_no_disponible_titulo: "Η διαφήμιση δεν είναι διαθέσιμη",
        anuncio_no_disponible_mensaje: "Δεν ήταν δυνατή η φόρτωση της διαφήμισης. Δοκιμάστε ξανά αργότερα.",

        // Μηνύματα επιπέδων
        categoria_superada_titulo: "Κατηγορία Ολοκληρώθηκε!",
        categoria_superada_mensaje: (cat, niv) => `Μπράβο! Τώρα πηγαίνετε στην Κατηγορία ${cat} του Επιπέδου ${niv}.`,
        nivel2_desbloqueado_titulo: "Επίπεδο 2 Ξεκλειδώθηκε!",
        nivel2_desbloqueado_mensaje: "Τώρα παίζετε αντίστροφα με το ρολόι! Κάθε επιτυχία σας δίνει +1 ζωή και +5 δευτερόλεπτα.",
        nivel3_desbloqueado_titulo: "Επίπεδο 3 Ξεκλειδώθηκε!",
        nivel3_desbloqueado_mensaje: "Λειτουργία Extreme! Δεν υπάρχουν ανταμοιβές χρόνου ή ζωών. Δείξτε την αξία σας!",
        juego_completado_titulo: "Το Παιχνίδι Ολοκληρώθηκε!",
        juego_completado_mensaje: "Νικήσατε και τα 3 επίπεδα! Ξεκινάτε από την αρχή από το Επίπεδο 1.",
        siguiente_categoria: "Επόμενη Κατηγορία",

        // Υποσέλιδο και άλλα
        invitar_cafe: "Κέρασέ με έναν καφέ",
        version: "2026 © | V 2.9",
        confirmar_borrar: "Διαγραφή όλου του ιστορικού και επαναφορά βαθμολογιών;",

        // PayPal
        cargando_paypal: "Φόρτωση PayPal...",
        error_paypal_conexion: "Σφάλμα φόρτωσης PayPal. Δοκιμάστε ξανά.",
        error_paypal_render: "Σφάλμα σχεδίασης του κουμπιού.",
        paypal_no_disponible_venezuela: "Το PayPal δεν είναι διαθέσιμο στην περιοχή σας.",

        // Tooltips
        titulo_iniciar: "Έναρξη Παιχνιδιού",
        titulo_revolver: "Ανακάτεμα Καρτών",
        titulo_resetear: "Επαναφορά Τιμών",
        titulo_volver: "Πίσω",

        // Δυναμικά κείμενα (συναρτήσεις)
        tiempo_record: (tiempo) => `Νέο Ρεκόρ! Χρόνος: ${tiempo}δ`,
        tiempo_victoria: (tiempo, puntos) => `Νίκη! Χρόνος: ${tiempo}δ. Πόντοι: ${puntos}`,
    },

    pap: { // Papiamento (Aruba, Curazao, Bonaire)
        // Menú prinsipal
        jugar_ahora: "Juga Awor",
        como_jugar: "Kon Juga?",
        ajustes: "Ajuste",
        desarrollador: "Desaroyadó",
        salir: "Salí",
        iniciar_sesion: "Drenta",
        correo_electronico: "E-mail",
        contrasena_min: "Kontraseña (mín. 6 karakter)",
        nombre_usuario: "Nomber di usuario (solo pa registro)",
        entrar: "Drenta",
        no_tienes_cuenta: "No tin un cuenta?",
        registrate: "Registrá",
        politica_privacidad: "Polítika di Privasidat",

        // Pantaya di wega
        iniciar_juego: "Kuminsá Wega",
        pausar: "Pousa",
        reanudar: "Kontinuá",
        revolver_cartas: "Bati Karta",
        resetear_valores: "Reset Valornan",

        // Panel di estadístika
        tiempo: "Tempu",
        tiempo_restante: "Tempu Restante",
        nivel_label: "Nivel",
        vidas_label: "Bida",
        puntos: "Punto",
        victorias_label: "Viktoria",
        record: "Rèkòrt",
        score: "Skor",
        derrotas: "Derota",

        // Estado di wega
        game_over: "Wega A Kaba!",
        ganaste: "Bo A Gana!",
        nuevo_record: "Rèkòrt Nobo!",
        victoria: "Viktoria!",

        // Modal Kon Juga
        como_jugar_titulo: "Kon Juga?",
        como_jugar_subtitulo: "Purba bo memoria, akumulá punto i tene bo bidanan salbo!",
        como_jugar_paso1: "Bira karta: Klik riba dos karta pa deskubrí e ikononan skondí riba e tablero.",
        como_jugar_paso2: "Traha par i gana bida: Kada biaha ku bo haña un par korekto, bo ta gana bida komo rekompensa pa sigui juga.",
        como_jugar_paso3: "Kuidou ku eror: Si e kartanan no ta igual, bo ta pèrdè un bida. Bo ta kuminsá ku 7 bida. Si bo ta keda sin, bo por mira un anunsio kòrtiku pa rekuperá nan i sigui eksaktamente kaminda bo a keda.",
        como_jugar_paso4: "Meta: Bira karta di dos den dos pa haña par igual promé ku bo 7 bidanan kaba.",
        cerrar: "Sera",

        // Modal Ajuste
        ajustes_titulo: "Ajuste",
        sonido: "Zonido:",
        activado: "Activá",
        silenciado: "Silensiá",
        modo: "Modo:",
        dark: "Skur",
        light: "Klaru",
        animaciones: "Animashon",
        animaciones_activadas: "Activá",
        animaciones_desactivadas: "Desactivá",
        idioma: "Idioma",

        // Modal Desaroyadó
        desarrollador_titulo: "Desaroyadó",
        desarrollador_texto: "Bon dia, mi ta Yampiero Mujica. Mi a krea Memoria ku amor usando HTML, CSS i JavaScript pa bo pasa un bon ratu entrenando bo memoria sin anunsio molestoso. Si bo gusta e proyecto i ke apoyá mi pa mantené aktivo, invitá mi un kòfi klikando riba e taza",

        // Modal di sistema (Game Over)
        game_over_mensaje: "Lástima! Bo a keda sin bida.",
        ir_menu: "Bai na menú",
        reintentar_nivel: "Purba Nivel Atrobe",
        sin_vidas_titulo: "Bo a keda sin bida!",
        sin_vidas_mensaje: "Kiko bo ke hasi pa kontinuá?",
        sin_vidas_mensaje_progreso: "Aboná pa mantené bo nivel, Skor i rèkòrt, i kontinuá kaminda bo a keda.",
        ver_anuncio: "🎬 Mira anunsio i rekuperá 7 bida (Kontinuá wega)",
        ver_anuncio_texto: "Mira anunsio i salba mi progreso",
        reiniciar_partida: "🔄 Kuminsá wega di nobo (Pèrdè progreso)",
        reiniciar_partida_texto: "Kuminsá wega di nobo (Pèrdè progreso)",

        // Modals di Éksito / Viktoria
        victoria_mensaje: "Pabien, bo a kompletá e nivel ku éksito!",
        siguiente_nivel: "Siguiente Nivel",
        progreso_salvado_titulo: "Progreso Salbá!",
        progreso_salvado_suscripcion: "Danki pa aboná. Bo tin 7 bida nobo i lo kontinuá den bo kategoria aktual sin pèrdè bo Skor ni rèkòrt.",
        progreso_salvado_anuncio: "Danki pa mira e anunsio. Bo tin 7 bida nobo i ta kontinuá den bo kategoria aktual sin pèrdè bo Skor ni rèkòrt.",
        continuar_jugando: "Kontinuá Juga",
        anuncio_no_disponible_titulo: "Anunsio no disponibel",
        anuncio_no_disponible_mensaje: "No por a karga e anunsio. Purba atrobe mas laten.",

        // Mensahe di Nivel
        categoria_superada_titulo: "Kategoria Kompletá!",
        categoria_superada_mensaje: (cat, niv) => `Bon trabou! Awor bo ta bai pa Kategoria ${cat} di Nivel ${niv}.`,
        nivel2_desbloqueado_titulo: "Nivel 2 Desblokiá!",
        nivel2_desbloqueado_mensaje: "Awor bo ta hunga kontra e klòk! Kada éksito ta duna bo +1 bida i +5 sekònde.",
        nivel3_desbloqueado_titulo: "Nivel 3 Desblokiá!",
        nivel3_desbloqueado_mensaje: "Modo Ekstremo! No tin rekompensa di tempu ni bida. Mustra kiko bo ta bal!",
        juego_completado_titulo: "Wega Kompletá!",
        juego_completado_mensaje: "Bo a derotá tur 3 nivel! Bo ta kuminsá di nobo for di Nivel 1.",
        siguiente_categoria: "Siguiente Kategoria",

        // Footer i otronan
        invitar_cafe: "Invitá mi un kòfi",
        version: "2026 © | V 2.9",
        confirmar_borrar: "Bora tur historia i reset skornan?",

        // PayPal
        cargando_paypal: "Kargando PayPal...",
        error_paypal_conexion: "Eror kargando PayPal. Purba atrobe.",
        error_paypal_render: "Eror dibuhando e boton.",
        paypal_no_disponible_venezuela: "PayPal no ta disponibel den bo region.",

        // Tooltips
        titulo_iniciar: "Kuminsá Wega",
        titulo_revolver: "Bati Karta",
        titulo_resetear: "Reset Valornan",
        titulo_volver: "Bèk",

        // Teksto dinámiko (funshon)
        tiempo_record: (tiempo) => `Rèkòrt Nobo! Tempu: ${tiempo}s`,
        tiempo_victoria: (tiempo, puntos) => `Viktoria! Tempu: ${tiempo}s. Punto: ${puntos}`,
    },

    id: { // Indonesio
        // Menu utama
        jugar_ahora: "Main Sekarang",
        como_jugar: "Cara Bermain",
        ajustes: "Pengaturan",
        desarrollador: "Pengembang",
        salir: "Keluar",
        iniciar_sesion: "Masuk",
        correo_electronico: "Alamat email",
        contrasena_min: "Kata sandi (min. 6 karakter)",
        nombre_usuario: "Nama pengguna (hanya untuk pendaftaran)",
        entrar: "Masuk",
        no_tienes_cuenta: "Belum punya akun?",
        registrate: "Daftar",
        politica_privacidad: "Kebijakan Privasi",

        // Layar permainan
        iniciar_juego: "Mulai Permainan",
        pausar: "Jeda",
        reanudar: "Lanjutkan",
        revolver_cartas: "Kocok Kartu",
        resetear_valores: "Atur Ulang Nilai",

        // Panel statistik
        tiempo: "Waktu",
        tiempo_restante: "Sisa Waktu",
        nivel_label: "Level",
        vidas_label: "Nyawa",
        puntos: "Poin",
        victorias_label: "Kemenangan",
        record: "Rekor",
        score: "Skor",
        derrotas: "Kekalahan",

        // Status permainan
        game_over: "Permainan Selesai!",
        ganaste: "Kamu Menang!",
        nuevo_record: "Rekor Baru!",
        victoria: "Kemenangan!",

        // Modal Cara Bermain
        como_jugar_titulo: "Cara Bermain",
        como_jugar_subtitulo: "Uji ingatanmu, kumpulkan poin, dan jaga nyawamu tetap aman!",
        como_jugar_paso1: "Balik kartu: Klik dua kartu untuk menemukan ikon tersembunyi di papan.",
        como_jugar_paso2: "Buat pasangan dan dapatkan nyawa: Setiap kali kamu menemukan pasangan yang benar, kamu akan mendapatkan nyawa sebagai hadiah untuk terus bermain.",
        como_jugar_paso3: "Hati-hati dengan kesalahan: Jika kartu tidak cocok, kamu akan kehilangan satu nyawa. Kamu mulai dengan 7 nyawa. Jika habis, kamu bisa menonton iklan singkat untuk memulihkannya dan melanjutkan tepat di tempat kamu berhenti.",
        como_jugar_paso4: "Tujuan: Balik dua kartu sekaligus untuk menemukan pasangan identik sebelum 7 nyawamu habis.",
        cerrar: "Tutup",

        // Modal Pengaturan
        ajustes_titulo: "Pengaturan",
        sonido: "Suara:",
        activado: "Aktif",
        silenciado: "Bisu",
        modo: "Mode:",
        dark: "Gelap",
        light: "Terang",
        animaciones: "Animasi",
        animaciones_activadas: "Diaktifkan",
        animaciones_desactivadas: "Dinonaktifkan",
        idioma: "Bahasa",

        // Modal Pengembang
        desarrollador_titulo: "Pengembang",
        desarrollador_texto: "Halo, saya Yampiero Mujica. Saya membuat Memoria dengan cinta menggunakan HTML, CSS, dan JavaScript agar kamu bisa bersenang-senang melatih ingatanmu tanpa iklan yang mengganggu. Jika kamu suka proyek ini dan ingin mendukung saya untuk tetap aktif, traktir saya kopi dengan mengklik cangkirnya",

        // Modal sistem (Game Over)
        game_over_mensaje: "Sayang sekali! Nyawamu habis.",
        ir_menu: "Pergi ke menu",
        reintentar_nivel: "Coba Lagi Level",
        sin_vidas_titulo: "Nyawamu habis!",
        sin_vidas_mensaje: "Apa yang ingin kamu lakukan untuk melanjutkan?",
        sin_vidas_mensaje_progreso: "Berlangganan untuk mempertahankan level, Skor, dan rekor Anda, dan lanjutkan dari tempat Anda berhenti.",
        ver_anuncio: "🎬 Tonton iklan dan pulihkan 7 nyawa (Lanjutkan permainan)",
        ver_anuncio_texto: "Tonton iklan dan simpan progres saya",
        reiniciar_partida: "🔄 Mulai ulang permainan (Kehilangan kemajuan)",
        reiniciar_partida_texto: "Mulai ulang permainan (Kehilangan kemajuan)",

        // Modals Sukses / Kemenangan
        victoria_mensaje: "Selamat, kamu telah menyelesaikan level dengan sukses!",
        siguiente_nivel: "Level Berikutnya",
        progreso_salvado_titulo: "Progres Tersimpan!",
        progreso_salvado_suscripcion: "Terima kasih telah berlangganan. Anda memiliki 7 nyawa baru dan akan melanjutkan di kategori Anda saat ini tanpa kehilangan Skor atau rekor Anda.",
        progreso_salvado_anuncio: "Terima kasih telah menonton iklan. Anda memiliki 7 nyawa baru dan melanjutkan di kategori Anda saat ini tanpa kehilangan Skor atau rekor Anda.",
        continuar_jugando: "Lanjutkan Bermain",
        anuncio_no_disponible_titulo: "Iklan tidak tersedia",
        anuncio_no_disponible_mensaje: "Tidak dapat memuat iklan. Silakan coba lagi nanti.",

        // Pesan Level
        categoria_superada_titulo: "Kategori Selesai!",
        categoria_superada_mensaje: (cat, niv) => `Kerja bagus! Sekarang Anda pergi ke Kategori ${cat} dari Level ${niv}.`,
        nivel2_desbloqueado_titulo: "Level 2 Terbuka!",
        nivel2_desbloqueado_mensaje: "Sekarang Anda bermain melawan waktu! Setiap keberhasilan memberi Anda +1 nyawa dan +5 detik.",
        nivel3_desbloqueado_titulo: "Level 3 Terbuka!",
        nivel3_desbloqueado_mensaje: "Mode Ekstrem! Tidak ada hadiah waktu atau nyawa. Tunjukkan kemampuan Anda!",
        juego_completado_titulo: "Permainan Selesai!",
        juego_completado_mensaje: "Anda telah mengalahkan semua 3 level! Anda memulai dari awal dari Level 1.",
        siguiente_categoria: "Kategori Berikutnya",

        // Footer dan lainnya
        invitar_cafe: "Traktir saya kopi",
        version: "2026 © | V 2.9",
        confirmar_borrar: "Hapus semua riwayat dan atur ulang skor?",

        // PayPal
        cargando_paypal: "Memuat PayPal...",
        error_paypal_conexion: "Kesalahan memuat PayPal. Coba lagi.",
        error_paypal_render: "Kesalahan menggambar tombol.",
        paypal_no_disponible_venezuela: "PayPal tidak tersedia di wilayah Anda.",

        // Tooltips
        titulo_iniciar: "Mulai Permainan",
        titulo_revolver: "Kocok Kartu",
        titulo_resetear: "Atur Ulang Nilai",
        titulo_volver: "Kembali",

        // Teks dinamis (fungsi)
        tiempo_record: (tiempo) => `Rekor Baru! Waktu: ${tiempo}s`,
        tiempo_victoria: (tiempo, puntos) => `Kemenangan! Waktu: ${tiempo}s. Poin: ${puntos}`,
    }
};

// Función helper para obtener traducción
export function t(clave, idioma, ...params) {
    const traduccion = traducciones[idioma]?.[clave] || traducciones['es'][clave] || clave;
    return typeof traduccion === 'function' ? traduccion(...params) : traduccion;
}