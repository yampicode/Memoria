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