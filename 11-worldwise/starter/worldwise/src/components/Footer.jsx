import styles from "./Footer.module.css";
function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.copyright}>
        &copy; Copyright {new Date().getFullYear()} by Worldwise Inc.
      </p>
    </footer>
  );
}

export default Footer;
