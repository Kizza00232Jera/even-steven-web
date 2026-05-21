import styles from './home.module.css';

export default function HomePage() {
  return (
    <main className={styles.container}>
      <div className={styles.card}>
        <div className={styles.logo}>ES</div>
        <h1 className={styles.title}>Even Steven</h1>
        <p className={styles.body}>Split expenses fairly with friends.</p>
        <div className={styles.links}>
          <a href="/privacy">Privacy Policy</a>
          <span className={styles.divider}>·</span>
          <a href="/terms">Terms of Service</a>
        </div>
      </div>
    </main>
  );
}
