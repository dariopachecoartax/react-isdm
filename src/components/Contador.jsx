import { useState } from 'react';

function Contador() {
  const [conteo, setConteo] = useState(0);

  const incrementar = () => setConteo((prev) => prev + 1);
  const decrementar = () => setConteo((prev) => prev - 1);

  const reiniciar = () => setConteo(0);

  return (
    <div>
      <p>Valor actual: {conteo}</p>
      <button onClick={incrementar}>+1</button>
      <button onClick={decrementar}>-1</button>
      <button onClick={reiniciar}>Reiniciar</button>
    </div>
  );
}

export default Contador;
