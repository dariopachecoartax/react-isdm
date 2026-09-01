function Etiqueta({ tipo }) {
  return <span className={`etiqueta etiqueta-${tipo}`}>{tipo}</span>;
}

export default Etiqueta;
