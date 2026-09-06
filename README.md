# Desarrollo web ISDM - Tecnicatura en análisis de sistemas informáticos

Este repositorio se usará como lugar de prácticas realizadas durante el cursado de la materia de 2do año Desarrollo web del ISDM, dictada por los profesores Prof. Ing. Jesus González y Prof. Rodrigo Alday.

Alumno: Dario Pacheco

## Actividad en Clase N.º 4 — Login, rutas protegidas y despliegue

Login y registro con React Hook Form, sesión de Supabase en un `AuthContext`, y
`/comisiones` y `/notas` protegidas con `RutaPrivada`.

- Deployment: https://react-isdm.vercel.app/
- SQL de la tabla y las políticas: `supabase/notas.sql`
- Variables necesarias: ver `.env.example`

### Política de RLS elegida para `notas`

Elegí las cuatro políticas por operación (`select`, `insert`, `update`, `delete`) contra
`authenticated`, todas comparando `auth.uid() = user_id`, en lugar de una sola política
`for all`. Separarlas deja explícito qué puede hacer cada usuario en cada operación y
permite cambiar una sin tocar las otras. En `insert` la condición va en `with check`
porque la fila todavía no existe, y `user_id` nunca se manda desde el cliente: lo completa
el `default auth.uid()` de la tabla.
