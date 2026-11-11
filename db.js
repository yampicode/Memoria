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
                nivel_actual: stats.nivelActual || 1,
                pais: stats.pais || '', 
                updated_at: new Date().toISOString()
            });

        if (error) throw error;
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
        const { data: stats, error: err1 } = await supabase
            .from('player_stats')
            .select('user_id, score_total, victorias, mejor_tiempo, pais')
            .order('score_total', { ascending: false })
            .limit(10);

        if (err1) throw err1;
        if (!stats || stats.length === 0) return [];

        console.log("Datos crudos del ranking desde Supabase:", stats);

        const userIds = stats.map(s => s.user_id);
        const { data: perfiles, error: err2 } = await supabase
            .from('profiles')
            .select('id, username')
            .in('id', userIds);

        if (err2) throw err2;

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
        // 1. Obtener mis datos (puntos y tiempo)
        const { data: miData, error: err1 } = await supabase
            .from('player_stats')
            .select('score_total, mejor_tiempo')
            .eq('user_id', userId)
            .single();

        if (err1 || !miData) return null;

        // 2. Contar cuántos tienen MÁS puntos que yo
        const { count: countPuntos, error: err2 } = await supabase
            .from('player_stats')
            .select('*', { count: 'exact', head: true })
            .gt('score_total', miData.score_total);

        if (err2) throw err2;

        // 3. Contar cuántos tienen LOS MISMOS puntos pero MEJOR tiempo
        let countEmpate = 0;
        if (miData.mejor_tiempo !== null) {
            const { count: countTie, error: err3 } = await supabase
                .from('player_stats')
                .select('*', { count: 'exact', head: true })
                .eq('score_total', miData.score_total)
                .lt('mejor_tiempo', miData.mejor_tiempo);
            
            if (!err3) countEmpate = countTie || 0;
        } else {
            // Si no tengo tiempo, cuento a los que tienen el mismo puntaje y SÍ tienen tiempo
            const { count: countTie, error: err3 } = await supabase
                .from('player_stats')
                .select('*', { count: 'exact', head: true })
                .eq('score_total', miData.score_total)
                .not('mejor_tiempo', 'is', null);
            
            if (!err3) countEmpate = countTie || 0;
        }

        // 4. Mi posición real es: los que tienen más puntos + los que empatan con mejor tiempo + 1
        return { 
            posicion: (countPuntos || 0) + countEmpate + 1, 
            score: miData.score_total 
        };
    } catch (error) {
        console.error('Error al calcular posición:', error.message);
        return null;
    }
}