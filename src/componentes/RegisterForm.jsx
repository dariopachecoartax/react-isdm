import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { registrarse } from '../services/auth';

function RegisterForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();

  const navigate = useNavigate();
  const [errorServidor, setErrorServidor] = useState('');

  async function enviar({ email, password }) {
    setErrorServidor('');

    try {
      await registrarse(email, password);
      navigate('/comisiones');
    } catch (error) {
      setErrorServidor(error.message);
    }
  }

  return (
    <form className="formulario" onSubmit={handleSubmit(enviar)}>
      <h2>Crear cuenta</h2>

      <label htmlFor="email">Email</label>
      <input
        id="email"
        type="email"
        {...register('email', { required: 'El email es obligatorio' })}
      />
      {errors.email && <p className="error">{errors.email.message}</p>}

      <label htmlFor="password">Contraseña</label>
      <input
        id="password"
        type="password"
        {...register('password', {
          required: 'La contraseña es obligatoria',
          minLength: { value: 6, message: 'Mínimo 6 caracteres' },
        })}
      />
      {errors.password && <p className="error">{errors.password.message}</p>}

      <label htmlFor="confirmar">Repetir contraseña</label>
      <input
        id="confirmar"
        type="password"
        {...register('confirmar', {
          required: 'Repetí la contraseña',
          validate: (valor) =>
            valor === watch('password') || 'Las contraseñas no coinciden',
        })}
      />
      {errors.confirmar && <p className="error">{errors.confirmar.message}</p>}

      {errorServidor && <p className="error">{errorServidor}</p>}

      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Creando...' : 'Registrarme'}
      </button>

      <p className="ayuda">
        ¿Ya tenés cuenta? <Link to="/login">Iniciá sesión</Link>
      </p>
    </form>
  );
}

export default RegisterForm;
