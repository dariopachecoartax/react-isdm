import styles from './Navbar.module.css';

function Navbar({ titulo, links }) {
  return (
    <nav className={styles.navbar}>
      <span className={styles.logo}>{titulo}</span>

      <ul className={styles.links}>
        {links.map((link) => (
          <li key={link}>{link}</li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
