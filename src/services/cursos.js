import { supabase } from '../supabaseClient';

const COLUMNAS = 'id, nombre, profesor, nivel, cupo, descripcion, creado_en';

export async function obtenerCursos() {
  const { data, error } = await supabase
    .from('cursos')
    .select(COLUMNAS)
    .order('nombre');

  if (error) throw error;
  return data;
}

export async function obtenerCursoPorId(id) {
  const { data, error } = await supabase
    .from('cursos')
    .select(COLUMNAS)
    .eq('id', id)
    .maybeSingle();

  if (error) throw error;
  if (!data) throw new Error('No encontramos el curso que buscás.');
  return data;
}
