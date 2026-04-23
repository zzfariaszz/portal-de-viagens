import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroBackground}>
          <Image
            src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1600&q=80"
            alt="Viagem pelo mundo"
            fill
            className={styles.heroImage}
            priority
          />
          <div className={styles.heroOverlay} />
        </div>
        <div className={styles.heroContent}>
          <p className={styles.heroEyebrow}>Portal de Viagens</p>
          <h1 className={styles.heroTitle}>
            O mundo espera
            <br />
            por você
          </h1>
          <p className={styles.heroSubtitle}>
            Descubra destinos que transformam viagens em memórias
            inesquecíveis. De templos milenares a geleiras árticas — sua
            próxima aventura começa aqui.
          </p>
          <Link href="/destinos" className={styles.heroButton}>
            Explorar Destinos
          </Link>
        </div>
      </section>

      <section className={styles.intro}>
        <div className={styles.introInner}>
          <div className={styles.introText}>
            <span className={styles.introLabel}>Sobre o portal</span>
            <h2 className={styles.introTitle}>
              Curadoria de lugares extraordinários
            </h2>
            <p className={styles.introParagraph}>
              Cada destino foi selecionado por sua capacidade de surpreender,
              emocionar e ampliar perspectivas. Não vendemos pacotes — oferecemos
              inspiração e informação para que você construa a viagem dos seus
              sonhos com consciência e estilo.
            </p>
            <p className={styles.introParagraph}>
              De continentes a culturas, de paisagens naturais a centros urbanos
              vibrantes: nosso catálogo cresce constantemente com lugares que
              merecem estar na sua lista.
            </p>
          </div>
          <div className={styles.introStats}>
            <div className={styles.stat}>
              <span className={styles.statNumber}>6</span>
              <span className={styles.statLabel}>Destinos</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNumber}>5</span>
              <span className={styles.statLabel}>Continentes</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNumber}>∞</span>
              <span className={styles.statLabel}>Experiências</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}