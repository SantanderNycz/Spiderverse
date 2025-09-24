import Carousel from "@/components/Carousel";
import { IHeroData } from "@/interfaces/heroes";

interface IProps {
  params: {
    id: string;
  };
}

async function getHeroesData(): Promise<{ data: IHeroData[] }> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_DOMAIN_ORIGIN}/api/heroes`,
    {
      cache: "no-store", // evita cache do Next
    }
  );

  if (!res.ok) {
    console.error("Erro na resposta da API:", res.status, res.statusText);
    throw new Error("Falha ao buscar heróis");
  }

  return res.json();
}

export default async function Hero({ params: { id } }: IProps) {
  const heroesData = await getHeroesData();

  return <Carousel heroes={heroesData.data} activeId={id} />;
}
