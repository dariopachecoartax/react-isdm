import styles from './Main.module.css';

function Main({ titulo, descripcion, items }) {
  return (
    <main className={styles.main}>
      <h1 className={styles.titulo}>{titulo}</h1>
      <p className={styles.descripcion}>{descripcion}</p>

      <ul className={styles.items}>
        {items.map((item) => (
          <li key={item} className={styles.item}>
            {item}
          </li>
        ))}
      </ul>
    </main>
  );
}

export default Main;
