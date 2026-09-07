# Desarrollo web ISDM - Tecnicatura en análisis de sistemas informáticos

Este repositorio se usará como lugar de prácticas realizadas durante el cursado de la materia de 2do año Desarrollo web del ISDM, dictada por los profesores Prof. Ing. Jesus González y Prof. Rodrigo Alday.

Alumno: Dario Pacheco

## Trabajo Integrador Final — CRUD de publicaciones

ABM completo contra la tabla `publicaciones` de Supabase, en la ruta `/publicaciones`.
Es una ruta pública: el TP no usa login ni políticas por usuario.

- SQL de la tabla: `supabase/publicaciones.sql`
- Capa de servicios: `src/services/publicaciones.js`
- Pantalla: `src/paginas/Publicaciones.jsx` + `FormularioPublicacion` y `ListaPublicaciones`
- El cliente de Supabase se reutiliza del TP anterior: `src/services/supabase.js`

### Las cuatro funciones de `services/publicaciones.js`

**`obtenerPublicaciones()`** — Trae todas las filas de la tabla con sus cuatro columnas y las
ordena por `creado_en` de la más nueva a la más vieja. Se dispara en el `useEffect` de
`Publicaciones.jsx` cuando la pantalla se monta, y otra vez después de crear o de editar,
para que la lista muestre lo mismo que hay en la base.

**`crearPublicacion({ titulo, contenido })`** — Inserta una fila nueva. El `id` y el `creado_en`
no se mandan: los completa la base. Se dispara al apretar **Publicar** en el formulario,
cuando no hay ninguna publicación en modo edición.

**`actualizarPublicacion(id, cambios)`** — Modifica la fila cuyo `id` coincide con el que se
le pasa, con los campos que vengan en `cambios`. Se dispara al apretar **Guardar cambios**,
que es el mismo botón del formulario cuando antes se tocó **Editar** en una fila.

**`eliminarPublicacion(id)`** — Borra la fila con ese `id`. Se dispara con el botón **Borrar**
de cada fila de la lista, después de que el usuario acepta el `window.confirm`.

Ningún componente llama a `supabase.from('publicaciones')` por su cuenta: todo pasa por estas
cuatro funciones. El formulario es uno solo para alta y edición — el estado `publicacionEditando`
decide cuál de las dos operaciones se ejecuta y qué texto muestran el título y el botón.
