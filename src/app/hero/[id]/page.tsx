import Carousel from "@/components/Carousel";
import { IHeroData } from "@/interfaces/heroes";

interface IProps {
  params: {
    id: string;
  };
}

async function getHeroesData(): Promise<{ data: IHeroData[] }> {
  const baseUrl = process.env.DOMAIN_ORIGIN || 'http://localhost:3001';
  const res = await fetch(`${baseUrl}/api/heroes`);

  if (!res.ok) {
    throw new Error("Falha ao buscar heróis");
  }

  return res.json();
}

export default async function Hero({ params: { id } }: IProps) {
  const res = await getHeroesData();

  return <Carousel heroes={res.data} activeId={id} />;
}
