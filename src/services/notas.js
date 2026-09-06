import { supabase } from './supabase';

export async function traerNotas() {
  const { data, error } = await supabase
    .from('notas')
    .select('id, contenido')
    .order('id', { ascending: false });

  if (error) throw error;
  return data;
}

// No mandamos user_id: lo completa el default auth.uid() de la tabla.
export async function crearNota(contenido) {
  const { data, error } = await supabase
    .from('notas')
    .insert({ contenido })
    .select()
    .single();

  if (error) throw error;
  return data;
}

export async function borrarNota(id) {
  const { error } = await supabase.from('notas').delete().eq('id', id);
  if (error) throw error;
}
