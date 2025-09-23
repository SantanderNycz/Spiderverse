import { IHeroData } from "../../interfaces/heroes";

const heroesImage: Record<string, string> = {
  "spider-man-616": "/spiders/spider-man-616.png",
  "mulher-aranha-65": "/spiders/mulher-aranha-65.png",
  "spider-man-1610": "/spiders/spider-man-1610.png",
  "sp-dr-14512": "/spiders/sp-dr-14512.png",
  "spider-ham-8311": "/spiders/spider-ham-8311.png",
  "spider-man-90214": "/spiders/spider-man-90214.png",
  "spider-man-928": "/spiders/spider-man-928.png",
};

interface IProps {
  hero: IHeroData;
}

export default function HeroPicture({ hero }: IProps) {
  return (
    <img
      src={heroesImage[hero.id] || "/spiders/spider-man-616.png"}
      alt={`${hero.name} (Universo-${hero.universe})` || ""}
      loading="eager"
    />
  );
}
