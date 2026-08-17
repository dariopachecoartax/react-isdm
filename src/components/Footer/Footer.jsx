import styles from './Footer.module.css';

function Footer({ texto, anio }) {
  return (
    <footer className={styles.footer}>
      <p className={styles.texto}>
        {texto} © {anio}
      </p>
    </footer>
  );
}

export default Footer;
