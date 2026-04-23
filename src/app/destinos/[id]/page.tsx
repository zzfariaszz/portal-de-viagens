import { destinos } from "@/data/destinos";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return destinos.map((d) => ({ id: d.id }));
}

export async function generateMetadata({ params }: PageProps) {
  const { id } = await params;
  const destino = destinos.find((d) => d.id === id);
  return {
    title: destino ? `${destino.nome} · Viagens` : "Destino não encontrado",
  };
}

export default async function DestinoPage({ params }: PageProps) {
  const { id } = await params;
  const destino = destinos.find((d) => d.id === id);

  if (!destino) notFound();

  const outros = destinos.filter((d) => d.id !== destino.id).slice(0, 3);

  return (
    <div className={styles.page}>
      <div className={styles.hero}>
        <Image
          src={destino.imagem}
          alt={destino.nome}
          fill
          className={styles.heroImage}
          priority
        />
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <Link href="/destinos" className={styles.backLink}>
            ← Todos os destinos
          </Link>
          <span className={styles.continente}>{destino.continente}</span>
          <h1 className={styles.nome}>{destino.nome}</h1>
          <p className={styles.pais}>{destino.pais}</p>
        </div>
      </div>

      <div className={styles.body}>
        <div className={styles.main}>
          <p className={styles.descricao}>{destino.descricao}</p>

          <div className={styles.destaques}>
            <h2 className={styles.sectionTitle}>Destaques</h2>
            <ul className={styles.destaquesList}>
              {destino.destaques.map((item, index) => (
                <li key={index} className={styles.destaqueItem}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <aside className={styles.sidebar}>
          <div className={styles.infoCard}>
            <h3 className={styles.infoTitle}>Informações</h3>
            <dl className={styles.infoList}>
              <div className={styles.infoRow}>
                <dt>País</dt>
                <dd>{destino.pais}</dd>
              </div>
              <div className={styles.infoRow}>
                <dt>Continente</dt>
                <dd>{destino.continente}</dd>
              </div>
              <div className={styles.infoRow}>
                <dt>Idioma</dt>
                <dd>{destino.idioma}</dd>
              </div>
              <div className={styles.infoRow}>
                <dt>População</dt>
                <dd>{destino.populacao}</dd>
              </div>
              <div className={styles.infoRow}>
                <dt>Melhor época</dt>
                <dd>{destino.melhorEpoca}</dd>
              </div>
            </dl>
          </div>
        </aside>
      </div>

      {outros.length > 0 && (
        <div className={styles.relacionados}>
          <h2 className={styles.relacionadosTitle}>Outros destinos</h2>
          <div className={styles.relacionadosGrid}>
            {outros.map((d) => (
              <Link key={d.id} href={`/destinos/${d.id}`} className={styles.relacionadoCard}>
                <div className={styles.relacionadoImage}>
                  <Image src={d.imagem} alt={d.nome} fill className={styles.relImg} sizes="300px" />
                  <div className={styles.relacionadoOverlay} />
                  <span className={styles.relacionadoNome}>{d.nome}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}