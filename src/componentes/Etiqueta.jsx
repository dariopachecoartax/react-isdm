function Etiqueta({ texto, tipo }) {
  return <span className={`etiqueta etiqueta-${tipo}`}>{texto}</span>;
}

export default Etiqueta;
