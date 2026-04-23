import { destinos } from "@/data/destinos";
import CardDestino from "@/components/CardDestino/CardDestino";
import styles from "./page.module.css";

export const metadata = {
  title: "Destinos · Viagens",
};

export default function DestinosPage() {
  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <span className={styles.eyebrow}>Explore o mundo</span>
        <h1 className={styles.title}>Destinos</h1>
        <p className={styles.subtitle}>
          {destinos.length} destinos selecionados em {" "}
          {new Set(destinos.map((d) => d.continente)).size} continentes
        </p>
      </div>
      <div className={styles.grid}>
        {destinos.map((destino) => (
          <CardDestino key={destino.id} destino={destino} />
        ))}
      </div>
    </div>
  );
}