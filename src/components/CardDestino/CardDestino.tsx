import Link from "next/link";
import Image from "next/image";
import { Destino } from "@/types/destino";
import styles from "./CardDestino.module.css";

interface CardDestinoProps {
  destino: Destino;
}

export default function CardDestino({ destino }: CardDestinoProps) {
  return (
    <Link href={`/destinos/${destino.id}`} className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image
          src={destino.imagem}
          alt={destino.nome}
          fill
          className={styles.image}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className={styles.overlay} />
        <span className={styles.continente}>{destino.continente}</span>
      </div>
      <div className={styles.body}>
        <h3 className={styles.nome}>{destino.nome}</h3>
        <p className={styles.pais}>{destino.pais}</p>
        <span className={styles.cta}>Ver destino →</span>
      </div>
    </Link>
  );
}