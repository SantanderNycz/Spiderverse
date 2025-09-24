import styles from "./page.module.scss";

import HeroesList from "@/components/HeroesList";
import { IHeroData } from "@/interfaces/heroes";

async function getHeroesData(): Promise<{ data: IHeroData[] }> {
  const baseUrl = process.env.DOMAIN_ORIGIN || "http://localhost:3001";
  const res = await fetch(`${baseUrl}/api/heroes`);

  if (!res.ok) {
    throw new Error("Falha ao buscar heróis");
  }

  return res.json();
}

export default async function Home() {
  const res = await getHeroesData();

  return (
    <main className={styles.main}>
      <HeroesList heroes={res.data} />
    </main>
  );
}
