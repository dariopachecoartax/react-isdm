# Desarrollo web ISDM - Tecnicatura en análisis de sistemas informáticos

Este repositorio se usará como lugar de prácticas realizadas durante el cursado de la materia de 2do año Desarrollo web del ISDM, dictada por los profesores Prof. Ing. Jesus González y Prof. Rodrigo Alday.

Alumno: Dario Pacheco

## Trabajo Práctico N.º 3 — Datos externos con useEffect

Pokédex que se arma con datos reales de [PokeAPI](https://pokeapi.co). La colección se pide con `axios` dentro de un `useEffect` y la pantalla muestra los tres estados de la petición: cargando, éxito y error.

### Variables de entorno

El proyecto no funciona sin un archivo `.env` en la raíz. Está ignorado en git, así que hay que crearlo copiando `.env.example`:

```bash
cp .env.example .env
```

| Variable       | Descripción                    | Valor a usar                  |
| -------------- | ------------------------------ | ----------------------------- |
| `VITE_API_URL` | URL base de la API de Pokémon  | `https://pokeapi.co/api/v2`   |

Vite sólo expone al navegador las variables que empiezan con el prefijo `VITE_`. Si la variable falta, la app arranca directamente en el estado de error avisando que hay que definirla.

### Cómo levantar el proyecto

```bash
npm install
cp .env.example .env
npm run dev
```

### Cómo probar el estado de error

Poner una URL inválida en el `.env` y recargar:

```
VITE_API_URL=https://pokeapi.co/api/v2-que-no-existe
```

La pantalla muestra el mensaje de error con un botón para reintentar la petición.
