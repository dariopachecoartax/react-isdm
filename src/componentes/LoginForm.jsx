import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { iniciarSesion } from '../services/auth';

function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const navigate = useNavigate();
  const [errorServidor, setErrorServidor] = useState('');

  async function enviar({ email, password }) {
    setErrorServidor('');

    try {
      await iniciarSesion(email, password);
      navigate('/comisiones');
    } catch (error) {
      setErrorServidor(error.message);
    }
  }

  return (
    <form className="formulario" onSubmit={handleSubmit(enviar)}>
      <h2>Iniciar sesión</h2>

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
        {...register('password', { required: 'La contraseña es obligatoria' })}
      />
      {errors.password && <p className="error">{errors.password.message}</p>}

      {errorServidor && <p className="error">{errorServidor}</p>}

      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Entrando...' : 'Entrar'}
      </button>

      <p className="ayuda">
        ¿No tenés cuenta? <Link to="/registro">Registrate</Link>
      </p>
    </form>
  );
}

export default LoginForm;
