import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

function FormularioPublicacion({ publicacionEditando, onGuardar, onCancelar }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  // Cuando se toca Editar en una fila, el formulario se llena con esa publicación.
  useEffect(() => {
    reset({
      titulo: publicacionEditando ? publicacionEditando.titulo : '',
      contenido: publicacionEditando ? publicacionEditando.contenido : '',
    });
  }, [publicacionEditando, reset]);

  async function enviar(datos) {
    await onGuardar(datos);
    reset({ titulo: '', contenido: '' });
  }

  return (
    <form className="formulario-publicacion" onSubmit={handleSubmit(enviar)}>
      <h2>{publicacionEditando ? 'Editar publicación' : 'Nueva publicación'}</h2>

      <label htmlFor="titulo">Título</label>
      <input
        id="titulo"
        {...register('titulo', { required: 'El título es obligatorio' })}
      />
      {errors.titulo && <p className="error">{errors.titulo.message}</p>}

      <label htmlFor="contenido">Contenido</label>
      <textarea
        id="contenido"
        rows="3"
        {...register('contenido', { required: 'El contenido es obligatorio' })}
      />
      {errors.contenido && <p className="error">{errors.contenido.message}</p>}

      <div className="acciones">
        <button type="submit" disabled={isSubmitting}>
          {publicacionEditando ? 'Guardar cambios' : 'Publicar'}
        </button>

        {publicacionEditando && (
          <button type="button" onClick={onCancelar}>
            Cancelar
          </button>
        )}
      </div>
    </form>
  );
}

export default FormularioPublicacion;
