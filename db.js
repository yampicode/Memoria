// db.js - Manejo de datos en Supabase
import { supabase } from './supabase-client.js';

export async function guardarStatsEnDB(userId, stats) {
    try {
        const { error } = await supabase
            .from('player_stats')
            .upsert({
                user_id: userId,
                score_total: stats.scoreTotal,
                vidas: stats.vidas,
                victorias: stats.victorias,
                derrotas: stats.derrotas,
                mejor_tiempo: stats.mejorTiempo,
                indice_categoria: stats.indiceCategoriaActual,
                nivel_actual: stats.nivelActual || 1, // <-- NUEVO
                updated_at: new Date().toISOString()
            });

        if (error) throw error;
        console.log("Estadísticas guardadas en DB.");
    } catch (error) {
        console.error('Error al guardar en DB:', error.message);
    }
}

export async function cargarStatsDesdeDB(userId) {
    try {
        const { data, error } = await supabase
            .from('player_stats')
            .select('*')
            .eq('user_id', userId)
            .single();

        if (error && error.code !== 'PGRST116') throw error;
        
        return data;
    } catch (error) {
        console.error('Error al cargar desde DB:', error.message);
        return null;
    }
}

// Obtener el Top 10 global
export async function obtenerTopRanking() {
    try {
        // 1. Traer los 10 mejores stats
        const { data: stats, error: err1 } = await supabase
            .from('player_stats')
            .select('user_id, score_total, victorias, mejor_tiempo')
            .order('score_total', { ascending: false })
            .limit(10);

        if (err1) throw err1;
        if (!stats || stats.length === 0) return [];

        // 2. Traer los nombres de usuario de esos 10 IDs
        const userIds = stats.map(s => s.user_id);
        const { data: perfiles, error: err2 } = await supabase
            .from('profiles')
            .select('id, username')
            .in('id', userIds);

        if (err2) throw err2;

        // 3. Unirlos manualmente en un solo objeto
        return stats.map(s => {
            const perfil = perfiles.find(p => p.id === s.user_id);
            return {
                ...s,
                username: perfil?.username || 'Anónimo'
            };
        });

    } catch (error) {
        console.error('Error al cargar ranking:', error.message);
        return [];
    }
}
// Obtener la posición del jugador actual
export async function obtenerMiPosicion(userId) {
    try {
        const { data: miData, error: err1 } = await supabase
            .from('player_stats')
            .select('score_total')
            .eq('user_id', userId)
            .single();

        if (err1 || !miData) return null;

        const { count, error: err2 } = await supabase
            .from('player_stats')
            .select('*', { count: 'exact', head: true })
            .gt('score_total', miData.score_total);

        if (err2) throw err2;
        return { posicion: (count || 0) + 1, score: miData.score_total };
    } catch (error) {
        console.error('Error al calcular posición:', error.message);
        return null;
    }
}