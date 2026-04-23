import Link from "next/link";
import styles from "./Layout.module.css";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <Link href="/" className={styles.logo}>
            <span className={styles.logoMark}>V</span>
            <span className={styles.logoText}>Viagens</span>
          </Link>
          <nav className={styles.nav}>
            <Link href="/" className={styles.navLink}>
              Início
            </Link>
            <Link href="/destinos" className={styles.navLink}>
              Destinos
            </Link>
          </nav>
        </div>
      </header>

      <main className={styles.main}>{children}</main>

      <footer className={styles.footer}>
        <div className={styles.footerInner}>
          <p className={styles.footerTagline}>
            "O mundo é um livro. Quem não viaja lê apenas uma página."
          </p>
          <p className={styles.footerCredit}>
            Santo Agostinho · Atividade 18 — EBAC
          </p>
        </div>
      </footer>
    </div>
  );
}